import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ClipboardCheck, 
  Wallet, 
  UserPlus, 
  Briefcase, 
  GraduationCap,
  Check,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const modules = [
  {
    id: "attendance",
    icon: ClipboardCheck,
    title: "Attendance Module",
    subtitle: "Smart tracking for every class",
    description: "Real-time attendance marking with multiple verification methods and automated alerts.",
    features: [
      "QR code & biometric integration",
      "GPS-based verification",
      "Automated parent notifications",
      "Defaulter management system",
      "Weekly & monthly reports",
      "Class-wise analytics"
    ],
    color: "primary",
  },
  {
    id: "fees",
    icon: Wallet,
    title: "Fee Management",
    subtitle: "Streamlined fee collection",
    description: "Complete financial management with flexible payment options and comprehensive reporting.",
    features: [
      "Multiple payment gateway integration",
      "Installment & discount management",
      "Automated payment reminders",
      "Receipt generation & GST compliance",
      "Defaulter tracking",
      "Financial analytics dashboard"
    ],
    color: "accent",
  },
  {
    id: "crm",
    icon: UserPlus,
    title: "Enquiry CRM",
    subtitle: "Lead to enrollment pipeline",
    description: "Convert more enquiries with systematic lead management and follow-up automation.",
    features: [
      "Multi-source lead capture",
      "Auto-assign to counselors",
      "Follow-up reminders & templates",
      "Demo class scheduling",
      "Conversion tracking",
      "Source-wise analytics"
    ],
    color: "sky",
  },
  {
    id: "staff",
    icon: Briefcase,
    title: "Staff Management",
    subtitle: "Empower your team",
    description: "Comprehensive staff operations from attendance to payroll with performance tracking.",
    features: [
      "Staff attendance tracking",
      "Leave management system",
      "Payroll processing",
      "Task assignment & tracking",
      "Performance evaluation",
      "Incentive calculation"
    ],
    color: "primary",
  },
  {
    id: "student",
    icon: GraduationCap,
    title: "Student Portal",
    subtitle: "Connected learning experience",
    description: "Empower students and parents with complete visibility into academic progress.",
    features: [
      "Personal dashboard access",
      "Attendance & exam schedules",
      "Online fee payment",
      "Report card downloads",
      "Communication channel",
      "Document management"
    ],
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary",
    bgLight: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/30",
    gradient: "from-primary/10 to-primary/5",
  },
  accent: {
    bg: "bg-accent",
    bgLight: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/30",
    gradient: "from-accent/10 to-accent/5",
  },
  sky: {
    bg: "bg-sky",
    bgLight: "bg-sky/10",
    text: "text-sky",
    border: "border-sky/30",
    gradient: "from-sky/10 to-sky/5",
  },
};

export function ModulesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModule, setActiveModule] = useState(modules[0].id);

  const activeModuleData = modules.find(m => m.id === activeModule)!;
  const colors = colorClasses[activeModuleData.color as keyof typeof colorClasses];

  return (
    <section id="modules" ref={ref} className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Powerful Modules
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modular Design,{" "}
            <span className="text-gradient-accent">Scalable Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with what you need and expand as you grow. Each module is designed to work independently or as part of the complete system.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Module Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-2"
          >
            {modules.map((module) => {
              const moduleColors = colorClasses[module.color as keyof typeof colorClasses];
              const isActive = activeModule === module.id;
              return (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module.id)}
                  className={cn(
                    "w-full p-4 rounded-xl text-left transition-all duration-300 border",
                    isActive
                      ? `bg-card shadow-elegant ${moduleColors.border}`
                      : "bg-transparent border-transparent hover:bg-card/50"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300",
                      isActive ? moduleColors.bg : moduleColors.bgLight
                    )}>
                      <module.icon className={cn(
                        "w-6 h-6 transition-colors duration-300",
                        isActive ? "text-primary-foreground" : moduleColors.text
                      )} />
                    </div>
                    <div className="flex-1">
                      <h3 className={cn(
                        "font-heading font-semibold transition-colors duration-300",
                        isActive ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {module.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{module.subtitle}</p>
                    </div>
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all duration-300",
                      isActive ? `${moduleColors.text} rotate-0` : "text-muted-foreground/50 -rotate-90"
                    )} />
                  </div>
                </button>
              );
            })}
          </motion.div>

          {/* Module Detail */}
          <motion.div
            key={activeModule}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8"
          >
            <div className={cn(
              "h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br border shadow-elegant",
              colors.gradient,
              colors.border
            )}>
              <div className="flex items-start gap-6 mb-8">
                <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center", colors.bg)}>
                  <activeModuleData.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {activeModuleData.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {activeModuleData.description}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {activeModuleData.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card/50"
                  >
                    <div className={cn("w-6 h-6 rounded-full flex items-center justify-center", colors.bgLight)}>
                      <Check className={cn("w-4 h-4", colors.text)} />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Button variant="default" size="lg" asChild>
                <a href="#contact">
                  Get Started with {activeModuleData.title}
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
