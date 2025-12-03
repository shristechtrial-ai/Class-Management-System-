export const siteConfig = {
  name: "Class Management System",
  description: "From enquiry to graduation — manage admissions, attendance, fees, staff, and parent communication on one secure platform.",
  company: "SHRIS TECH",
  tagline: "Empowering Digital Growth",
  
  // Contact info
  contact: {
    email: "anisha@shristech.com",
    phone: "+91-9579968397",
    phoneAlt: "+91-7588473653",
    website: "www.shristech.com",
  },
  
  // App URLs - Configure these for your deployment
  appUrl: "/app", // Change to your app subdomain/domain
  dashboards: {
    admin: "/app/admin/dashboard",
    counselor: "/app/counselor/dashboard",
    teacher: "/app/teacher/dashboard",
    accountant: "/app/finance/dashboard",
    student: "/app/student/dashboard",
  },
  
  // Navigation links
  navLinks: [
    { name: "Features", href: "#features" },
    { name: "Modules", href: "#modules" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
  
  // Social links
  social: {
    twitter: "#",
    linkedin: "#",
    facebook: "#",
  },
  
  // Stats
  stats: [
    { label: "Institutions", value: "50+", description: "Schools & Coaching Centers" },
    { label: "Students Managed", value: "1000+", description: "Active learners" },
    { label: "Fee Collection", value: "40%", description: "Faster revenue" },
    { label: "Time Saved", value: "60%", description: "Administrative hours" },
  ],
};

export type SiteConfig = typeof siteConfig;
