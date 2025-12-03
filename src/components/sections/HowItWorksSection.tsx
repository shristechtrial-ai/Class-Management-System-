import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquareText, 
  UserCheck, 
  ClipboardCheck, 
  FileText,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquareText,
    title: "Enquiry & Demo",
    description: "Capture leads from multiple sources, schedule demos, and track follow-ups with our CRM.",
  },
  {
    step: "02",
    icon: UserCheck,
    title: "Enrollment",
    description: "Digital admission forms, document upload, batch assignment, and automatic ID generation.",
  },
  {
    step: "03",
    icon: ClipboardCheck,
    title: "Daily Operations",
    description: "Track attendance, manage fees, coordinate staff, and communicate with parents seamlessly.",
  },
  {
    step: "04",
    icon: FileText,
    title: "Reports & Analytics",
    description: "Generate comprehensive reports, analyze trends, and make data-driven decisions.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-sky/10 text-sky text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How It <span className="text-gradient-primary">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From first enquiry to daily operations — a streamlined journey for your institution.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Arrow connector - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-3 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
                
                <div className="text-center lg:text-left">
                  {/* Step number */}
                  <div className="relative inline-flex mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-shadow duration-300">
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {item.step}
                    </span>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
