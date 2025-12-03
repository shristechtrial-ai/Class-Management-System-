import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, LogIn, Eye, EyeOff, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { toast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

const mockUsers: Record<string, { role: keyof typeof siteConfig.dashboards; name: string }> = {
  "admin@school.com": { role: "admin", name: "Admin User" },
  "counselor@school.com": { role: "counselor", name: "Counselor User" },
  "teacher@school.com": { role: "teacher", name: "Teacher User" },
  "accountant@school.com": { role: "accountant", name: "Accountant User" },
  "student@school.com": { role: "student", name: "Student User" },
};

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const user = mockUsers[data.email.toLowerCase()];

      if (user) {
        toast({
          title: `Welcome, ${user.name}!`,
          description: `Redirecting to ${user.role} dashboard...`,
        });

        setTimeout(() => {
          window.location.href = siteConfig.dashboards[user.role];
        }, 1500);
      } else {
        toast({
          title: "Login Successful",
          description: "Redirecting to your dashboard...",
        });
      }

      onClose();
    } catch {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50"
          />

          {/* Modal (UPDATED CENTERED POSITION) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            <div className="bg-card rounded-2xl shadow-elevated border border-border overflow-hidden w-full max-w-md">
              {/* Header */}
              <div className="relative p-6 pb-0">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <LogIn className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-foreground">
                      Welcome Back
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Sign in to your dashboard
                    </p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@institution.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      id="login-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      {...register("password")}
                      className={errors.password ? "border-destructive pr-10" : "pr-10"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Signing in..." : "Sign In"}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </form>

              {/* Footer */}
              <div className="px-6 py-4 bg-secondary/30 border-t border-border">
                <p className="text-sm text-center text-muted-foreground">
                  New institution?{" "}
                  <a href="#contact" onClick={onClose} className="text-primary font-medium hover:underline">
                    Request access
                  </a>
                </p>
              </div>

              {/* Demo credentials */}
              <div className="px-6 pb-6">
                <details className="text-xs text-muted-foreground">
                  <summary className="cursor-pointer hover:text-foreground transition-colors">
                    Demo credentials
                  </summary>
                  <div className="mt-2 p-3 rounded-lg bg-secondary/50 space-y-1">
                    <p>admin@school.com → Admin Dashboard</p>
                    <p>teacher@school.com → Teacher Dashboard</p>
                    <p>student@school.com → Student Dashboard</p>
                    <p className="text-muted-foreground/70 mt-1">(Any password works)</p>
                  </div>
                </details>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
