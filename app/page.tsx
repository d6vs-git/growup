"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Instagram,
  Phone,
  Star,
  TrendingUp,
  Users,
  Zap,
  Sparkles,
  Play,
  CheckCircle,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FlipWords } from "@/components/ui/flip-words";

export default function GrowUpPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const services = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Instagram Growth",
      description:
        "Organic strategies that build authentic engagement and real followers",
      features: [
        "Content Strategy",
        "Hashtag Research",
        "Engagement Tactics",
        "Analytics",
      ],
      gradient: "from-gray-900 via-blue-900 to-gray-900",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Editing",
      description:
        "Professional video content that captures attention and drives results",
      features: [
        "Reels & Stories",
        "YouTube Videos",
        "Ad Creatives",
        "Motion Graphics",
      ],
      gradient: "from-gray-900 via-blue-900 to-gray-900",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Ads",
      description: "Data-driven advertising campaigns that maximize your ROI",
      features: [
        "Facebook Ads",
        "Instagram Ads",
        "Google Ads",
        "Campaign Optimization",
      ],
      gradient: "from-gray-900 via-blue-900 to-gray-900",
    },
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      designation: "Content Creator",
      content:
        "Professional video editing and amazing Instagram growth strategies. My content quality improved dramatically!",
      rating: 5,
      growth: "5K → 32K Followers",
    },
    {
      name: "Lisa Thompson",
      designation: "E-commerce Brand",
      content:
        "Their digital ads expertise helped us scale from startup to 6-figures. Incredible results and professional service!",
      rating: 5,
      growth: "0 → 25K Followers",
    },
    {
      name: "David Park",
      designation: "Personal Brand Coach",
      content:
        "Outstanding content strategy and execution. The team understands what works on social media today.",
      rating: 5,
      growth: "15K → 68K Followers",
    },
  ];

  // Add flip words for dynamic text
  const flipWords = [
    "Instagram",
    "Video Editing",
    "Digital Ads",
    "Social Media",
  ];

  const stats = [
    {
      number: "500+",
      label: "Clients Served",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "2M+",
      label: "Followers Grown",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    { number: "24/7", label: "Support", icon: <Zap className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-poppins">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient overlay for faded look */}
        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-400/10 to-blue-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-400/5 to-blue-400/5 rounded-full blur-3xl"
          animate={{
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/30 shadow-xl"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <motion.div
              className="flex items-center space-x-2 sm:space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative p-1 sm:p-2 rounded-xl">
                <Image
                  src="/growup-logo.png"
                  alt="GROWUP Logo"
                  width={32}
                  height={32}
                  className="object-contain sm:w-10 sm:h-10"
                  priority
                />
              </div>
              <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                GROWUP
              </div>
            </motion.div>

            {/* Mobile-first CTA */}
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="tel:9701171787">
                    <Phone className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">Call Now</span>
                    <span className="xs:hidden">Call</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 sm:pt-20 pb-8 px-3 sm:px-4 lg:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div
            className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.h1
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent block">
                  Transform Your
                </span>
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent block">
                  Digital Presence
                </span>
                <span className="text-gray-700 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-2">
                  with
                </span>
                <FlipWords
                  words={flipWords}
                  className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
                />
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl lg:mx-0 mx-auto leading-relaxed px-2 sm:px-0"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                We specialize in creating compelling digital strategies for
                Businesses & Personal Brands. Transform your online presence
                with our proven expertise.
              </motion.p>

              <motion.div
                className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center mb-6 sm:mb-8 px-2 sm:px-0"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full xs:w-auto"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full xs:w-auto"
                    asChild
                  >
                    <a href="tel:9701171787">
                      <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Call: +91 9701171787
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full xs:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-400 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold w-full xs:w-auto"
                    asChild
                  >
                    <a
                      href="https://www.instagram.com/growupmedia_7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                      Follow Us
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 xs:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto lg:mx-0"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    variants={itemVariants}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex justify-center lg:justify-start mb-1 text-blue-600">
                      {stat.icon}
                    </div>
                    <div className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Circular Logo Design */}
            <motion.div
              className="flex justify-center lg:justify-end order-1 lg:order-2"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative">
                {/* Circular Background with Gradient */}
                <motion.div
                  className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-100 via-white to-blue-100 shadow-2xl flex items-center justify-center relative overflow-hidden"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Decorative rings */}
                  <div className="absolute inset-2 xs:inset-3 rounded-full border border-blue-200/50"></div>
                  <div className="absolute inset-4 xs:inset-6 rounded-full border border-gray-200/50"></div>
                  <div className="absolute inset-6 xs:inset-9 rounded-full border border-gray-200/50"></div>

                  {/* Logo in center */}
                  <motion.div
                    className="z-10 relative"
                    animate={{
                      rotate: [0, -360],
                    }}
                    transition={{
                      duration: 50,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src="/growup-logo.png"
                      alt="GROWUP Logo"
                      width={120}
                      height={80}
                      className="object-contain drop-shadow-xl xs:w-[140px] xs:h-[93px] sm:w-[160px] sm:h-[107px]"
                      priority
                    />
                  </motion.div>
                </motion.div>

                {/* Floating elements around the circle */}
                <motion.div
                  className="absolute -top-1 -right-1 xs:-top-2 xs:-right-2 sm:-top-3 sm:-right-3 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 bg-blue-500 rounded-full"
                  animate={{
                    y: [-8, 8, -8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-1 xs:-bottom-2 xs:-left-2 sm:-bottom-3 sm:-left-3 w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 bg-blue-500 rounded-full"
                  animate={{
                    y: [8, -8, 8],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute top-1/2 -left-3 xs:-left-4 sm:-left-6 w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full"
                  animate={{
                    x: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className="py-16 sm:py-20 lg:py-24 px-3 sm:px-4 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16 lg:mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>What We Offer</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Transform your digital presence with our comprehensive suite of marketing solutions, 
              designed to grow your brand and engage your audience.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="group md:col-span-2 lg:col-span-1 first:md:col-span-1 last:md:col-span-2 last:md:col-start-1 lg:last:col-span-1 lg:last:col-start-auto"
              >
                <div className="relative h-full">
                  {/* Gradient Header */}
                  <div
                    className={`h-24 sm:h-28 lg:h-32 bg-gradient-to-r ${service.gradient} rounded-t-3xl relative overflow-visible`}
                  >
                    {/* Floating elements in header */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 right-6 sm:top-8 sm:right-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-4 sm:h-4 bg-white/25 rounded-full animate-pulse delay-150"></div>
                    
                    {/* Icon */}
                    <div className="absolute -bottom-4 sm:-bottom-6 left-4 sm:left-8 z-10">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-b-3xl shadow-xl hover:shadow-2xl transition-all duration-500 pt-10 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 group-hover:bg-gray-50/50">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center space-x-2 group/feature"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover/feature:scale-125 transition-transform duration-200`}></div>
                          <span className="text-gray-700 text-xs sm:text-sm font-medium group-hover/feature:text-gray-900 transition-colors duration-200">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-16 sm:py-20 px-3 sm:px-4 lg:px-8 bg-gradient-to-br from-blue-50/50 to-gray-50/50 relative"
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2 sm:px-0"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              See how we've helped brands achieve extraordinary growth
            </motion.p>
          </motion.div>

          <motion.div
            className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="md:col-span-2 lg:col-span-1 first:md:col-span-1 last:md:col-span-2 last:md:col-start-1 lg:last:col-span-1 lg:last:col-start-auto"
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white group">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="flex items-center mb-4 sm:mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 sm:mb-8 italic leading-relaxed text-base sm:text-lg font-medium">
                      "{testimonial.content}"
                    </p>

                    <div className="border-t pt-4 sm:pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-gray-900 text-base sm:text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 text-xs sm:text-sm">
                            {testimonial.designation}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent font-bold text-xs sm:text-sm">
                            GROWTH
                          </div>
                          <div className="text-blue-600 text-xs sm:text-sm font-semibold">
                            {testimonial.growth}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA Section */}
      <section className="py-16 sm:py-20 px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Instagram className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 sm:mb-8 text-gray-600" />
            
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Follow Our Journey
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0">
              Get daily marketing tips, behind-the-scenes content, and success stories
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 hover:from-gray-800 hover:via-blue-800 hover:to-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full xs:w-auto max-w-xs"
                asChild
              >
                <a
                  href="https://www.instagram.com/growupmedia_7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  @growupmedia_7
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer
        id="contact"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 sm:py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
          <motion.div
            className="grid gap-8 lg:gap-12 lg:grid-cols-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Brand & CTA */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Image
                  src="/growup-logo.png"
                  alt="GROWUP Logo"
                  width={60}
                  height={60}
                  className="object-contain sm:w-20 sm:h-20"
                  priority
                />
              </div>

              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-4 sm:mb-6 leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Digital Presence?
              </h3>
              
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                Join hundreds of successful businesses that have accelerated their growth with our proven Instagram marketing, video editing, and digital advertising strategies.
              </p>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-blue-400">Get In Touch</h4>
                <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-4 xs:space-y-0 xs:space-x-6">
                  <motion.a
                    href="tel:9701171787"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Call Us</div>
                      <span className="font-semibold text-sm sm:text-base">+91 9701171787</span>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.instagram.com/growupmedia_7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-gray-400">Follow Us</div>
                      <span className="font-semibold text-sm sm:text-base">@growupmedia_7</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-400">Our Services</h4>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-gray-300 text-sm sm:text-base">Instagram Growth</div>
                  <div className="text-gray-300 text-sm sm:text-base">Video Editing</div>
                  <div className="text-gray-300 text-sm sm:text-base">Digital Advertising</div>
                  <div className="text-gray-300 text-sm sm:text-base">Content Strategy</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
