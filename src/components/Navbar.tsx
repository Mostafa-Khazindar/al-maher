"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import { Phone, MessageCircle, Menu, X, Globe, Calendar } from "lucide-react";

export default function Navbar() {
  const { locale, toggleLocale } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", labelAr: "من نحن", labelEn: "About Us" },
    { href: "#services", labelAr: "خدماتنا", labelEn: "Services" },
    { href: "#materials", labelAr: "المواد والتقنية", labelEn: "Materials" },
    { href: "#portfolio", labelAr: "أعمالنا والسيارات", labelEn: "Portfolio" },
    { href: "#process", labelAr: "مراحل الإصلاح", labelEn: "Process" },
    { href: "#location", labelAr: "الموقع", labelEn: "Location" },
    { href: "#appointment", labelAr: "احجز موعد", labelEn: "Book" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Official Clean Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div className="h-12 w-auto max-w-[200px] sm:max-w-[240px] flex items-center justify-center">
                <img
                  src="/workshop/official-logo-transparent.png"
                  alt="الماهر العالمي - الشعار الرسمي"
                  className="h-11 sm:h-12 w-auto object-contain hover:scale-105 transition-transform"
                />
              </div>
            </a>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-blue-600 after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {locale === "ar" ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Language Switch */}
          <div className="hidden md:flex items-center gap-3">
            {/* Lang Switch */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 transition-all cursor-pointer"
              title="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-blue-600" />
              <span>{locale === "ar" ? "EN" : "عربي"}</span>
            </button>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/966544792646?text=${encodeURIComponent(
                locale === "ar"
                  ? "السلام عليكم، أود الاستفسار عن فحص وسمكرة سيارة في مركز الماهر العالمي."
                  : "Hello, I would like to inquire about car body repair at Al-Maher Al-Alami."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>{locale === "ar" ? "واتساب" : "WhatsApp"}</span>
            </a>

            {/* Book Appointment CTA */}
            <a
              href="#appointment"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>{locale === "ar" ? "طلب حجز موعد" : "Book Request"}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLocale}
              className="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-blue-600 border border-slate-200"
            >
              {locale === "ar" ? "EN" : "عربي"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2">
            <a
              href={`https://wa.me/966544792646`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold bg-emerald-50 border border-emerald-300 text-emerald-700"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold bg-blue-600 text-white shadow"
            >
              <Calendar className="w-4 h-4" />
              {locale === "ar" ? "طلب موعد" : "Book Request"}
            </a>
          </div>
          <div className="border-t border-slate-100 pt-2 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {locale === "ar" ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
