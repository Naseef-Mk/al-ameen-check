import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Plane,
  FileText,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Star,
  ArrowRight,
  ChevronDown,
  Search,
  Calendar,
  Users,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AIRPORTS } from "@/lib/airports";
const branches = [
  { name: "Head Office", area: "Central Salalah", address: "23rd July St, Salalah", phone: "+968 99172257", maps: "https://www.google.com/maps?q=Salalah%20Oman&output=embed" },
  { name: "New Salalah", area: "Al nahda Street", address: "Near Muscat Pharmacy, Salalah", phone: "+968 90941233", maps: "https://www.google.com/maps?q=Haffa%20Salalah&output=embed" },
  { name: "Sa'adah Branch", area: "Saadah", address: "Al Mashhoor Complex, Saadah, Salalah", phone: "+968 90664141", maps: "https://www.google.com/maps?q=Saadah%20Salalah&output=embed" },
];
/**
 * Design Philosophy: Modern Luxury Travel
 * - Color Palette: Deep Ocean Blue (#1e3a5f) + Warm Gold (#d4a574)
 * - Typography: Playfair Display (headlines) + Inter (body)
 * - Layout: Asymmetric, spacious with floating elements
 * - Interactions: Smooth animations, hover effects, scroll reveals
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("tickets");
  const [fareData, setFareData] = useState({
    from: "",
    to: "",
    travelDate: "",
    passengers: "1",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "tickets",
    dates: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFareChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFareData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      "Flight fare request",
      `From: ${fareData.from || "Not specified"}`,
      `To: ${fareData.to || "Not specified"}`,
      `Travel date: ${fareData.travelDate || "Not specified"}`,
      `Passengers: ${fareData.passengers || "Not specified"}`,
    ].join("\n");

    window.open(
      `https://wa.me/96890664141?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToFareCheck = () => {
    document
      .getElementById("fare-check")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your inquiry! We'll contact you shortly with more information."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "tickets",
      dates: "",
      message: "",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
        <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between gap-4 py-4 md:py-4">
          <div className="flex min-w-0 items-center gap-2 md:gap-3">
            <img
              src="/alameen-logo-mark.png"
              alt="Al Ameen logo mark"
              className="h-8 w-auto shrink-0 md:h-10"
            />
            <img
              src="/alameen-wordmark.png"
              alt="Al Ameen Travel Tours & Cargo L.L.C"
              className="h-8 w-auto max-w-[145px] object-contain md:h-11 md:max-w-[190px]"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="hover:text-accent transition-colors">
              Services
            </a>
            <a href="#corporate" className="hover:text-accent transition-colors">
              Corporate
            </a>
            <a href="#about" className="hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </nav>
          <a href="https://wa.me/96890664141" target="_blank" rel="noopener noreferrer">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">
              <MessageCircle className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">WhatsApp</span>
            </Button>
          </a>
        </div>
      </motion.header>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pb-12 pt-24 md:pb-16 md:pt-24 lg:h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=2400&q=85')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-5 text-center text-white md:space-y-6 lg:text-left">
              <div className="inline-block rounded-full bg-accent/20 px-3 py-2 text-xs font-semibold text-accent md:px-4 md:text-sm">
                ✈️ Salalah • 9+ Years • 3 Branches
              </div>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Fly Smarter from Salalah, Oman
              </h1>
              <p className="mx-auto max-w-lg text-base text-white/90 md:text-xl lg:mx-0">
                Trusted by leading corporates. Expert-handled tickets & visas.
                Dedicated support for families and business travelers.
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center md:gap-4 lg:justify-start">
                <Button className="bg-accent px-6 py-5 text-base text-accent-foreground hover:opacity-90 md:px-8 md:py-6 md:text-lg">
                  Plan My Trip
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white px-6 py-5 text-base text-white hover:bg-white/10 md:px-8 md:py-6 md:text-lg"
                >
                  Visa Help
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Floating Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            id="fare-check"
            className="block w-full"
          >
            <Card className="mx-auto w-full max-w-md rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-sm md:p-8 lg:max-w-none">
              <h3 className="mb-5 text-2xl font-bold text-primary md:mb-6">
                Check Fare
              </h3>
              <form onSubmit={handleFareSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    From (e.g., MCT)
                  </label>
                  <Input
                    name="from"
                    value={fareData.from}
                    onChange={handleFareChange}
                    list="departure-airports"
                    placeholder="Type city or airport code"
                    className="bg-secondary/50 border-0"
                    required
                  />
                  <datalist id="departure-airports">
                    {AIRPORTS.map((airport) => (
                      <option key={`from-${airport}`} value={airport} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    To (e.g., DEL)
                  </label>
                  <Input
                    name="to"
                    value={fareData.to}
                    onChange={handleFareChange}
                    list="arrival-airports"
                    placeholder="Type city or airport code"
                    className="bg-secondary/50 border-0"
                    required
                  />
                  <datalist id="arrival-airports">
                    {AIRPORTS.map((airport) => (
                      <option key={`to-${airport}`} value={airport} />
                    ))}
                  </datalist>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Travel Date
                  </label>
                  <Input
                    name="travelDate"
                    type="date"
                    value={fareData.travelDate}
                    onChange={handleFareChange}
                    className="bg-secondary/50 border-0"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Passengers
                  </label>
                  <Input
                    name="passengers"
                    type="number"
                    min="1"
                    value={fareData.passengers}
                    onChange={handleFareChange}
                    className="bg-secondary/50 border-0"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary py-5 text-base text-white hover:opacity-90 md:py-6 md:text-lg"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search Flights
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 transform md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 md:py-16">
        <div className="container">
          <motion.div
            className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary md:text-5xl">
                9+
              </div>
              <p className="text-muted-foreground mt-2">Years of Service</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary md:text-5xl">
                3
              </div>
              <p className="text-muted-foreground mt-2">Branches in Salalah</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="text-4xl font-bold text-primary md:text-5xl">
                24/7
              </div>
              <p className="text-muted-foreground mt-2">Customer Support</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Focused on what we do best—tickets and visas. Cargo is coming
              soon.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Air Tickets */}
            <motion.div variants={itemVariants}>
              <Card
                role="button"
                tabIndex={0}
                onClick={scrollToFareCheck}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollToFareCheck();
                  }
                }}
                className="card-luxury group cursor-pointer hover:border-accent hover:border-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Plane className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Air Tickets
                </h3>
                <p className="text-muted-foreground mb-6">
                  Competitive fares, flexible booking options, and expert
                  support for all your flight needs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Best fares guaranteed</li>
                  <li>✓ Flexible rebooking</li>
                  <li>✓ 24/7 support</li>
                </ul>
              </Card>
            </motion.div>

            {/* Visa Processing */}
            <motion.div variants={itemVariants}>
              <Card className="card-luxury group hover:border-accent hover:border-2 transition-all duration-300">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  Visa Processing
                </h3>
                <p className="text-muted-foreground mb-6">
                  Expert guidance through the visa process with destination-specific
                  checklists and support.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Expert consultation</li>
                  <li>✓ Document guidance</li>
                  <li>✓ Fast processing</li>
                </ul>
              </Card>
            </motion.div>

            {/* Cargo Services */}
            <motion.div variants={itemVariants}>
              <Card className="card-luxury group hover:border-accent hover:border-2 transition-all duration-300 opacity-75">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-muted-foreground mb-3">
                  Cargo Services
                </h3>
                <p className="text-muted-foreground mb-6">
                  Coming soon. Door-to-door cargo with transparent pricing and
                  reliable tracking.
                </p>
                <div className="inline-block bg-secondary px-3 py-1 rounded-full text-xs font-semibold text-muted-foreground">
                  Coming Soon
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Travel Section */}
      <section id="corporate" className="py-20 md:py-28 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85"
              alt="Corporate Travel"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Enterprise & Corporate Travel
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Trusted by leading corporates across Oman and beyond. We handle
              your travel needs with expertise and dedication.
            </p>

            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Negotiated fares & flexible rules",
                "Dedicated account manager & SLAs",
                "Last-minute change support",
                "Centralized invoicing & reports",
                "Traveler safety & compliance guidance",
                "Visa & document coordination",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <p className="text-lg text-foreground">{item}</p>
                </motion.div>
              ))}
            </motion.div>

            <Button className="mt-8 bg-primary text-white px-8 py-6 text-lg hover:opacity-90">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our 3 Branches in Salalah
            </h2>
            <p className="text-lg text-muted-foreground">
              Walk in to any branch or message us—same great support everywhere.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {branches.map((branch, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="card-luxury text-center">
                                  <a
                    href={branch.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mb-4 hover:opacity-80 transition-opacity"
                  >
                    <MapPin className="w-12 h-12 text-accent mx-auto" />
                  </a>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {branch.name}
                  </h3>
                  <p className="text-muted-foreground mb-2 text-sm">
                    {branch.area}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {branch.address}
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4 text-accent" />
                      {branch.phone}
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4 text-accent" />
                      shukoor@alameentravels.com
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              About ALAMEEN
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Local expertise in Salalah, Oman with 9+ years of service and 3
              branches. We're a Salalah-born travel company focused on exactly
              what matters: airline tickets and visa processing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over the past 9+ years we've grown to 3 branches and built strong
              relationships with airlines and consulates. Families trust us for
              smooth journeys; enterprises count on us for responsive,
              policy-aware support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                q: "Do you operate only in Salalah?",
                a: "Our teams are based in Salalah across three branches, but we serve customers across Oman and abroad via phone, WhatsApp, and email.",
              },
              {
                q: "Which services are available now?",
                a: "Currently we provide Air Tickets and Visa Processing. Cargo is planned and will launch soon.",
              },
              {
                q: "Do you handle corporate travel?",
                a: "Yes. We manage negotiated fares, last-minute changes, and billing tailored for enterprise workflows.",
              },
              {
                q: "What documents are needed for visa help?",
                a: "It varies by destination. Typically passport scans, photos, bank statements, travel plan, and forms. Contact us and we'll share a destination-specific checklist.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-luxury"
              >
                <h3 className="text-lg font-bold text-primary mb-3">
                  {faq.q}
                </h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="container">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Reach us on WhatsApp, call, or send an email. We're quick to
              respond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-luxury space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    ALAMEEN TRAVEL TOURS & CARGO
                  </h3>
                  <p className="text-muted-foreground">
                    23rd July Street, Salalah, Oman
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="tel:+96890664141"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <Phone className="w-6 h-6 text-accent" />
                    +968 90664141
                  </a>
                  <a
                    href="mailto:shukoor@alameentravel.com"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <Mail className="w-6 h-6 text-accent" />
                    shukoor@alameentravel.com
                  </a>
                  <a
                    href="https://wa.me/96890664141"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-lg hover:text-accent transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 text-accent" />
                    Chat on WhatsApp
                  </a>
                </div>

                <div className="pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Follow us on social media
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    >
                      f
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    >
                      @
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-accent/20 flex items-center justify-center transition-colors"
                    >
                      in
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-luxury">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder="+968 XXXX XXXX"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="tickets">Air Tickets</option>
                      <option value="visa">Visa Processing</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="cargo">Cargo Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Travel Dates
                    </label>
                    <Input
                      name="dates"
                      value={formData.dates}
                      onChange={handleFormChange}
                      placeholder="e.g., 05 Sep → 12 Sep"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us your route, number of travelers, and any preferences"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white py-6 text-lg hover:opacity-90"
                  >
                    Send Enquiry
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/alameen-logo-mark.png"
                  alt="Al Ameen logo mark"
                  className="h-9 w-auto"
                />
                <img
                  src="/alameen-wordmark.png"
                  alt="Al Ameen Travel Tours & Cargo L.L.C"
                  className="h-10 w-auto max-w-[170px] object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/80">
                Your trusted travel partner in Salalah, Oman.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Air Tickets
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Visa Processing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition">
                    Cargo Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-white/80">
                <li>+968 90664141</li>
                <li>shukoor@alameentravel.com</li>
                <li>23rd July Street, Salalah</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/80">
            <p>
              &copy; 2026 ALAMEEN Travel Tours & Cargo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
