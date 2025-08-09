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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative p-2 rounded-xl ">
                <Image
                  src="/growup-logo.png"
                  alt="GROWUP Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                GROWUP
              </div>
            </motion.div>

            <motion.div
              className="hidden md:flex items-center space-x-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="#services"
                className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-gray-900 hover:via-blue-900 hover:to-gray-900 hover:bg-clip-text transition-all duration-300 font-semibold py-3 px-4 rounded-xl group"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                Services
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.a
                href="#testimonials"
                className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-gray-900 hover:via-blue-900 hover:to-gray-900 hover:bg-clip-text transition-all duration-300 font-semibold py-3 px-4 rounded-xl group"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                Testimonials
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              <motion.a
                href="#contact"
                className="relative text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-gray-900 hover:via-blue-900 hover:to-gray-900 hover:bg-clip-text transition-all duration-300 font-semibold py-3 px-4 rounded-xl group"
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                Contact
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 group-hover:w-full transition-all duration-300"></div>
              </motion.a>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
               
              </motion.div>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                className="text-gray-700 hover:text-white p-3 rounded-xl bg-gradient-to-r hover:from-gray-900 hover:via-blue-900 hover:to-gray-900 transition-all duration-300 border border-gray-200 hover:border-transparent shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 pb-8 px-4 sm:px-6 lg:px-8 z-10"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 items-center h-full"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                  Transform Your Digital Presence
                </span>

                <br />
                <span className="text-gray-700 text-2xl md:text-3xl lg:text-4xl">
                  with
                </span>
                <br />
                <FlipWords
                  words={flipWords}
                  className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-3xl md:text-5xl lg:text-6xl font-bold"
                />
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl lg:mx-0 mx-auto leading-relaxed"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              >
                We specialize in creating compelling digital strategies for
                Businesses & Personal Brands. Transform your online presence
                with our proven expertise.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
                variants={itemVariants}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a href="tel:9701171787">
                      <Phone className="mr-2 w-5 h-5" />
                      Call: +91 9701171787
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-400 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold"
                    asChild
                  >
                    <a
                      href="https://www.instagram.com/growupmedia_7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 w-5 h-5" />
                      Follow Us
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0"
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
                    <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Circular Logo Design */}
            <motion.div
              className="flex justify-center lg:justify-end"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <div className="relative">
                {/* Circular Background with Gradient */}
                <motion.div
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gray-100 via-white to-blue-100 shadow-2xl flex items-center justify-center relative overflow-hidden"
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
                  <div className="absolute inset-3 rounded-full border border-blue-200/50"></div>
                  <div className="absolute inset-6 rounded-full border border-gray-200/50"></div>
                  <div className="absolute inset-9 rounded-full border border-gray-200/50"></div>

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
                      width={160}
                      height={107}
                      className="object-contain drop-shadow-xl"
                      priority
                    />
                  </motion.div>
                </motion.div>

                {/* Floating elements around the circle */}
                <motion.div
                  className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full"
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
                  className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500 rounded-full"
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
                  className="absolute top-1/2 -left-6 w-3 h-3 bg-blue-500 rounded-full"
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
        className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 "
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-blue-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>What We Offer</span>
            </motion.div>
            
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              Transform your digital presence with our comprehensive suite of marketing solutions, 
              designed to grow your brand and engage your audience.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
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
                className="group"
              >
                <div className="relative h-full">
                  {/* Gradient Header */}
                  <div
                    className={`h-24 bg-gradient-to-r ${service.gradient} rounded-t-3xl relative overflow-hidden`}
                  >
                    {/* Floating elements in header */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full animate-pulse"></div>
                    <div className="absolute top-8 right-8 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/25 rounded-full animate-pulse delay-150"></div>
                    
                    {/* Icon */}
                    <div className="absolute -bottom-8 left-8">
                      <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-b-3xl shadow-xl hover:shadow-2xl transition-all duration-500 pt-12 pb-8 px-8 group-hover:bg-gray-50/50">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center space-x-2 group/feature"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} group-hover/feature:scale-125 transition-transform duration-200`}></div>
                          <span className="text-gray-700 text-sm font-medium group-hover/feature:text-gray-900 transition-colors duration-200">
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
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 to-gray-50/50 relative"
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              See how we've helped brands achieve extraordinary growth
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              >
                <Card className="h-full bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-current"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-8 italic leading-relaxed text-lg font-medium">
                      "{testimonial.content}"
                    </p>

                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {testimonial.designation}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent font-bold text-sm">
                            GROWTH
                          </div>
                          <div className="text-blue-600 text-sm font-semibold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Floating Background Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                <Instagram className="w-4 h-4" />
                <span>Follow Our Journey</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join 10K+ Followers on{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Instagram
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get exclusive content, marketing insights, and behind-the-scenes access to our creative process
              </p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Instagram Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10K+</div>
                    <div className="text-blue-200 text-sm">Followers</div>
                  </div>
                </div>
                <p className="text-blue-100">
                  Growing community of entrepreneurs and creators
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-blue-200 text-sm">Posts</div>
                  </div>
                </div>
                <p className="text-blue-100">
                  Daily content featuring tips, tutorials, and insights
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">95%</div>
                    <div className="text-blue-200 text-sm">Engagement</div>
                  </div>
                </div>
                <p className="text-blue-100">
                  High-quality content that drives real engagement
                </p>
              </motion.div>
            </div>

            {/* Content Preview Grid */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-12"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                What You'll Get
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "📚", title: "Marketing Tips", desc: "Daily strategies & insights" },
                  { icon: "🎬", title: "BTS Content", desc: "Behind-the-scenes process" },
                  { icon: "📈", title: "Success Stories", desc: "Client results & wins" },
                  { icon: "🎯", title: "Free Resources", desc: "Templates & guides" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <div className="font-semibold text-white mb-2">{item.title}</div>
                    <div className="text-blue-200 text-sm">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-6xl mb-4">📱</div>
                <h3 className="text-3xl font-bold text-white mb-2">Ready to Join?</h3>
                <p className="text-blue-200">Follow us for daily inspiration and growth strategies</p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-blue-50 px-12 py-6 rounded-full text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/growupmedia_7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="mr-3 w-6 h-6" />
                    Follow @growupmedia_7
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer
        id="contact"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="grid lg:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Brand & CTA */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                
                  <Image
                    src="/growup-logo.png"
                    alt="GROWUP Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                    priority
                  />
                
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Transform
                </span>{" "}
                Your Digital Presence?
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-2xl">
                Join hundreds of successful businesses that have accelerated their growth with our proven Instagram marketing, video editing, and digital advertising strategies.
              </p>

              <div>
                <h4 className="text-xl font-semibold mb-6 text-blue-400">Get In Touch</h4>
                <div className=" flex items-center space-x-6">
                  <motion.a
                    href="tel:9701171787"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Call Us</div>
                      <span className="font-semibold">+91 9701171787</span>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.instagram.com/growupmedia_7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Follow Us</div>
                      <span className="font-semibold">@growupmedia_7</span>
                    </div>
                  </motion.a>
                </div>
              </div>



            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              

              <div>
                <h4 className="text-xl font-semibold mb-4 text-blue-400">Our Services</h4>
                <div className="space-y-2">
                  <div className="text-gray-300">Instagram Growth</div>
                  <div className="text-gray-300">Video Editing</div>
                  <div className="text-gray-300">Digital Advertising</div>
                  <div className="text-gray-300">Content Strategy</div>
                </div>
              </div>
            </div>
          </motion.div>

          
        </div>
      </footer>
    </div>
  );
}
