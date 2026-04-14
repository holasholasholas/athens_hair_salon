"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingBookBtn from "@/components/FloatingBookBtn";
import MobileActionBar from "@/components/MobileActionBar";
import Preloader from "@/components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for all assets to load
    const handleLoad = () => {
      // Small artificial delay for premium feel
      setTimeout(() => setIsLoading(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Navbar />
            <HeroSection />
            <StorySection />
            <ServicesSection />
            <GallerySection />
            <BookingSection />
            <Footer />

            {/* Persistent UI elements */}
            <FloatingBookBtn />
            <MobileActionBar />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
