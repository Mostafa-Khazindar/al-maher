"use client";

import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Materials from "@/components/Materials";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WorkshopGallery from "@/components/WorkshopGallery";
import RepairProcess from "@/components/RepairProcess";
import LocationSection from "@/components/LocationSection";
import AppointmentForm from "@/components/AppointmentForm";
import SmartChatbot from "@/components/SmartChatbot";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen bg-[#07090e] text-[#e2e8f0] relative">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <AboutUs />
          <Services />
          <Materials />
          <BeforeAfterSlider />
          <WorkshopGallery />
          <RepairProcess />
          <LocationSection />
          <AppointmentForm />
        </main>

        {/* Floating Smart AI Chatbot */}
        <SmartChatbot />

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
