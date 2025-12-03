import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Anonymous Educator",
    role: "Verified Institution User",
    institution: "Undisclosed School",
    avatar: "UG",
    content:
      "The Class Management System has transformed our daily operations. Attendance tracking that took hours earlier now happens instantly, and communication with parents is extremely smooth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Anonymous Director",
    role: "Admin User",
    institution: "Private Coaching Institute",
    avatar: "UG",
    content:
      "Managing multiple batches was always a challenge. With the CRM and automated fee system, our lead conversion and fee collection have significantly improved.",
    rating: 5,
  },
  {
    id: 3,
    name: "Operations Head (Anonymous)",
    role: "Verified User",
    institution: "Training Institute",
    avatar: "UG",
    content:
      "We began with attendance and fee management, and now we use the entire suite. Payroll and staff modules helped us remove multiple disconnected tools.",
    rating: 5,
  },
  {
    id: 4,
    name: "Anonymous Administrator",
    role: "Institution Admin",
    institution: "K–12 School",
    avatar: "UG",
    content:
      "The implementation was smooth and the support team is excellent. The communication module alone reduced our scattered message groups by almost 80%.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-primary-glow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Trusted by Institutions Across India
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/70">
            Hear from verified users who have transformed their administrative workflows.
          </p>
        </motion.div>

        {/* Testimonials Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 border border-primary-foreground/10"
          >
            {/* Quote Icon */}
            <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-primary-foreground/20 mb-4 sm:mb-6" />

            {/* Content */}
            <p className="text-lg sm:text-xl lg:text-2xl text-primary-foreground leading-relaxed mb-6">
              "{testimonials[activeIndex].content}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">
                  {testimonials[activeIndex].avatar}
                </span>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-primary-foreground text-base sm:text-lg">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-sm text-primary-foreground/70">
                  {testimonials[activeIndex].role}, {testimonials[activeIndex].institution}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "bg-primary-foreground w-7 sm:w-8"
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  )}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
