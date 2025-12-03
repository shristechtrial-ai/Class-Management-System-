import { motion, type Variants } from "framer-motion";
import { ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

interface HeroSectionProps {
  onDemoClick: () => void;
}

export function HeroSection({ onDemoClick }: HeroSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const benefits = [
    "Complete student lifecycle management",
    "Real-time attendance & fee tracking",
    "Multi-stakeholder communication",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-10 overflow-hidden bg-gradient-hero">
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute top-1/4 right-0 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent/5 rounded-full blur-3xl" />

      {/* Floating shapes (hidden on small screens) */}
      <motion.div
        className="hidden md:block absolute top-32 left-[10%] w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="hidden md:block absolute top-48 right-[15%] w-10 h-10 rounded-full bg-sky/10 border border-sky/20"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="hidden md:block absolute bottom-32 left-[20%] w-14 h-14 rounded-3xl bg-primary/5 border border-primary/10"
        animate={{ y: [0, 10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by 500+ Institutions
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-5"
            >
              Smart{" "}
              <span className="text-gradient-primary">Class Management</span>{" "}
              System for Modern Institutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-7 max-w-xl mx-auto lg:mx-0"
            >
              {siteConfig.description}
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-2 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" onClick={onDemoClick}>
                Request Demo
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>

              <Button variant="heroOutline" size="lg" asChild>
                <a href="#modules">
                  <Play className="w-5 h-5 mr-2" />
                  Explore Modules
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT — Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full flex justify-center"
          >
            <div className="relative max-w-sm sm:max-w-md md:max-w-lg w-full">
              {/* Main Dashboard Card */}
              <motion.div
                className="glass-card rounded-2xl p-5 sm:p-6 shadow-elevated"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-base sm:text-lg">
                      Admin Dashboard
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Real-time Overview
                    </p>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5">
                  {[
                    { label: "Total Students", value: "2,847", change: "+12%" },
                    { label: "Attendance Today", value: "94.2%", change: "+2.1%" },
                    { label: "Fee Collection", value: "₹12.4L", change: "+8%" },
                    { label: "Pending Enquiries", value: "34", change: "-5" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-3 sm:p-4 rounded-xl bg-secondary/50 border border-border/40"
                    >
                      <p className="text-xs text-muted-foreground mb-1">
                        {stat.label}
                      </p>
                      <div className="flex items-end justify-between">
                        <span className="font-heading font-bold text-lg text-foreground">
                          {stat.value}
                        </span>
                        <span className="text-xs text-accent font-medium">
                          {stat.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="h-28 sm:h-32 rounded-xl bg-secondary/30 border border-border/40 flex items-end justify-around px-4 pb-3">
                  {[40, 65, 45, 80, 55, 70, 90, 60].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2.5 sm:w-3 rounded-t-sm bg-primary"
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
