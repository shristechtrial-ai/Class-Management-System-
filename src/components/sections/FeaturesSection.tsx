import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  QrCode, 
  CreditCard, 
  Users, 
  UserCog, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "Smart Attendance",
    description: "QR code, biometric & GPS-based attendance marking with real-time parent notifications and defaulter management.",
    color: "primary",
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Flexible payment plans, online gateway integration, automated reminders, and comprehensive financial reports.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Enquiry CRM",
    description: "Multi-source lead capture, auto-assign to counselors, demo scheduling, and conversion tracking analytics.",
    color: "sky",
  },
  {
    icon: UserCog,
    title: "Staff Management",
    description: "Complete staff operations including attendance, leave management, payroll processing, and performance tracking.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "SMS, Email & WhatsApp integration for seamless parent-teacher communication and announcements.",
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
    hover: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    hover: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
  sky: {
    bg: "bg-sky/10",
    text: "text-sky",
    border: "border-sky/20",
    hover: "group-hover:bg-sky group-hover:text-sky-foreground",
  },
};

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Core Features
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Manage Your Institution</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive suite of tools designed to streamline operations, enhance communication, and drive student success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/30 shadow-elegant hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-6 transition-all duration-300 ${colors.hover}`}>
                    <feature.icon className={`w-7 h-7 ${colors.text} transition-colors duration-300 group-hover:text-inherit`} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <a
                    href="#modules"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${colors.text} hover:gap-3 transition-all duration-300`}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
