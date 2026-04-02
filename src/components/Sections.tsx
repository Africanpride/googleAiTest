import { motion } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#heading" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#heading" className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-black" : "text-white"}`}>
          VANGUARD
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                isScrolled ? "text-slate-900" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-2"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="heading" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-white-lines-on-a-black-background-32860-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/50" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6"
        >
          The Future of <span className="text-blue-400">Digital</span> Experience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We build immersive, high-performance web applications that push the boundaries of what's possible on the modern web.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#about"
            className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-slate-100 transition-all flex items-center group"
          >
            Get Started
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Redefining the standard of web design.</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Vanguard is a creative studio dedicated to crafting exceptional digital experiences. We combine cutting-edge technology with minimalist aesthetics to help brands stand out in a crowded digital landscape.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Our approach is rooted in performance, accessibility, and user-centric design. We don't just build websites; we build platforms that drive growth and inspire action.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-blue-600">150+</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Projects Done</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600">99%</h4>
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold mt-1">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1000"
            alt="Modern Office"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Ultra Performance",
      description: "Optimized for speed and efficiency, ensuring your users never have to wait.",
      icon: "⚡",
    },
    {
      title: "Responsive Design",
      description: "Seamless experiences across all devices, from mobile to ultra-wide displays.",
      icon: "📱",
    },
    {
      title: "SEO Optimized",
      description: "Built with the latest best practices to ensure your brand gets discovered.",
      icon: "🔍",
    },
    {
      title: "Secure by Default",
      description: "State-of-the-art security measures to protect your data and your users.",
      icon: "🛡️",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Powerful Features</h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Everything you need to launch a successful digital presence, built with the latest technologies.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
          >
            <div className="text-4xl mb-6">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Web Development",
      items: ["Custom React Apps", "E-commerce Solutions", "API Integration", "Performance Tuning"],
    },
    {
      title: "UI/UX Design",
      items: ["User Research", "Wireframing", "Prototyping", "Visual Identity"],
    },
    {
      title: "Digital Strategy",
      items: ["Market Analysis", "Growth Hacking", "Content Strategy", "SEO & SEM"],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
            <p className="text-slate-600 text-lg">
              We provide end-to-end solutions for businesses looking to make a serious impact online.
            </p>
          </div>
          <a href="#contact" className="text-blue-600 font-bold flex items-center hover:underline">
            View all services <ChevronRight className="ml-1 w-4 h-4" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-slate-100">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      content: "Vanguard transformed our digital presence. Their attention to detail and performance optimization is unmatched.",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Michael Chen",
      role: "Founder of Nexus",
      content: "The video background hero section they built for us is a showstopper. We've seen a 40% increase in engagement.",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director",
      content: "Working with the Vanguard team was a breeze. They understood our vision perfectly and delivered beyond expectations.",
      avatar: "https://i.pravatar.cc/150?u=elena",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">What Clients Say</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Don't just take our word for it. Here's what industry leaders think about our work.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <p className="text-lg text-slate-300 italic mb-8">"{t.content}"</p>
            <div className="flex items-center">
              <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4" referrerPolicy="no-referrer" />
              <div>
                <h4 className="font-bold">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's build something amazing together.</h2>
          <p className="text-lg text-slate-600 mb-12">
            Ready to start your next project? Get in touch with us today for a free consultation and quote.
          </p>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4">
                📍
              </div>
              <div>
                <h4 className="font-bold">Our Office</h4>
                <p className="text-slate-600">123 Design Street, Creative Valley, CA 94043</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mr-4">
                📧
              </div>
              <div>
                <h4 className="font-bold">Email Us</h4>
                <p className="text-slate-600">hello@vanguard.studio</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-8 md:p-10 rounded-3xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Project Inquiry"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">VANGUARD</div>
        <div className="flex space-x-8 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
        </div>
        <div className="text-sm text-slate-400">
          © {new Date().getFullYear()} Vanguard Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, About, Features, Services, Testimonials, Contact, Footer };
