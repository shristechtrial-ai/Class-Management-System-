import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/config/site";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  organization: z.string().min(2, "Organization name is required").max(200),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  expectedUsers: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
      toast({
        title: "Request Submitted!",
        description: "Our team will contact you within 24 hours.",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Request a <span className="text-gradient-primary">Demo</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how the Class Management System can transform your institution. Our team will give you a personalized walkthrough.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Let's Talk
              </h3>
              <p className="text-muted-foreground">
                Have questions? Our team is here to help you find the perfect solution for your institution.
              </p>
            </div>

            <div className="space-y-6">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.email}</p>
                </div>
              </a>

              <a 
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <Phone className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.phone}</p>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.phoneAlt}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-sky/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-sky" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Visit Website</h4>
                  <p className="text-muted-foreground text-sm">{siteConfig.contact.website}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-card border border-border text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your demo request has been submitted. Our team will reach out within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 rounded-2xl bg-card border border-border shadow-elegant"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization *</Label>
                    <Input
                      id="organization"
                      placeholder="School/Institute name"
                      {...register("organization")}
                      className={errors.organization ? "border-destructive" : ""}
                    />
                    {errors.organization && (
                      <p className="text-sm text-destructive">{errors.organization.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@organization.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone")}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <Label htmlFor="expectedUsers">Expected Number of Users</Label>
                  <Input
                    id="expectedUsers"
                    placeholder="e.g., 500 students, 50 staff"
                    {...register("expectedUsers")}
                  />
                </div>

                <div className="space-y-2 mb-8">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your institution and requirements..."
                    rows={4}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request Demo
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
