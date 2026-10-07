"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  FileText,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

export default function AppointmentForm() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carMake: "Cadillac",
    carModel: "ATS",
    modelYear: "2014",
    serviceType: "collision",
    preferredDate: "",
    preferredTime: "morning",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text =
      locale === "ar"
        ? `طلب موعد كشف في مركز الماهر العالمي:
• الاسم: ${formData.name || "-"}
• الجوال: ${formData.phone || "-"}
• نوع السيارة والموديل: ${formData.carMake} ${formData.carModel} (${formData.modelYear || "-"})
• نوع الخدمة: ${formData.serviceType}
• التاريخ المفضل: ${formData.preferredDate || "-"}
• الملاحظات: ${formData.notes || "-"}`
        : `Appointment Request at Al-Maher Al-Alami:
• Name: ${formData.name || "-"}
• Phone: ${formData.phone || "-"}
• Vehicle: ${formData.carMake} ${formData.carModel} (${formData.modelYear || "-"})
• Service: ${formData.serviceType}
• Preferred Date: ${formData.preferredDate || "-"}
• Notes: ${formData.notes || "-"}`;

    window.open(
      `https://wa.me/966544792646?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="appointment" className="py-24 bg-[#fbfaf6] border-t border-[#e8e4d8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wider uppercase">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>{locale === "ar" ? "طلب حجز ومعاينة" : "Appointment Request"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">
            {locale === "ar" ? (
              <>
                احجز موعد كشف <span className="blue-gradient-text">لسيارتك</span>
              </>
            ) : (
              <>
                Schedule a Vehicle <span className="blue-gradient-text">Inspection</span>
              </>
            )}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {locale === "ar"
              ? "املأ تفاصيل مركبتك وطبيعة الضرر، وسيقوم فريق الماهر العالمي بالتواصل معك فوراً لتأكيد الموعد المناسب."
              : "Submit your vehicle details and damage description for priority inspection scheduling."}
          </p>
        </div>

        {/* Appointment Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#f5f3ec] border border-[#e8e4d8] p-6 sm:p-10 shadow-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-300 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-900">
                  {locale === "ar" ? "تم استلام طلب الحجز بنجاح" : "Request Received Successfully"}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {locale === "ar"
                    ? "شكراً لتواصلك مع مركز الماهر العالمي. هذا طلب حجز أولي، وسيقوم فريقنا بمراجعة التفاصيل والتواصل معك لتأكيد الموعد."
                    : "Thank you for contacting Al-Maher Al-Alami. This is a preliminary booking request; our team will contact you shortly to confirm."}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === "ar" ? "إرسال البيانات عبر واتساب أيضاً" : "Send via WhatsApp too"}</span>
                </button>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-white border border-[#e8e4d8] hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all shadow-2xs"
                >
                  {locale === "ar" ? "تقديم طلب آخر" : "Submit Another Request"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-blue-600" />
                    <span>{locale === "ar" ? "الاسم الكريم *" : "Full Name *"}</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={locale === "ar" ? "أدخل اسمك" : "Enter your full name"}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>{locale === "ar" ? "رقم الجوال *" : "Mobile Number *"}</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Car Make & Model */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Car className="w-3.5 h-3.5 text-blue-600" />
                    <span>{locale === "ar" ? "نوع السيارة والموديل *" : "Vehicle Make & Model *"}</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={formData.carMake}
                      onChange={(e) => setFormData({ ...formData, carMake: e.target.value })}
                      placeholder="كاديلاك"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                    />
                    <input
                      type="text"
                      required
                      value={formData.carModel}
                      onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                      placeholder="ATS"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                    />
                  </div>
                </div>

                {/* Year */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{locale === "ar" ? "سنة الصنع" : "Manufacturing Year"}</span>
                  </label>
                  <input
                    type="text"
                    value={formData.modelYear}
                    onChange={(e) => setFormData({ ...formData, modelYear: e.target.value })}
                    placeholder="2014"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                  />
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700">
                    {locale === "ar" ? "نوع الخدمة المطلوبة *" : "Requested Service *"}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                  >
                    <option value="collision">{locale === "ar" ? "إصلاح حوادث وسمكرة شاملة" : "Accident / Collision Repair"}</option>
                    <option value="paint">{locale === "ar" ? "دهان ورش فرن حراري (Spies Hecker)" : "Thermal Bake Paint"}</option>
                    <option value="dent">{locale === "ar" ? "إصلاح انبعاجات وخدوش" : "Dent & Scratch Repair"}</option>
                    <option value="bumper">{locale === "ar" ? "إصلاح وتعديل صدام" : "Bumper Repair"}</option>
                    <option value="inspect">{locale === "ar" ? "فحص ومعاينة وتقدير ضرر" : "Inspection & Estimate"}</option>
                  </select>
                </div>

                {/* Date & Time */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{locale === "ar" ? "التاريخ والفترة المفضلة" : "Preferred Date & Time"}</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                    />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                    >
                      <option value="morning">{locale === "ar" ? "صباحاً" : "Morning"}</option>
                      <option value="evening">{locale === "ar" ? "مساءً" : "Evening"}</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-blue-600" />
                  <span>{locale === "ar" ? "وصف المشكلة والضرر" : "Description of Damage"}</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={locale === "ar" ? "وضح أماكن الصدمات، هل تحتاج سمكرة، رش، تغيير قطع..." : "Briefly describe the affected areas..."}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#e8e4d8] text-slate-900 text-sm focus:border-blue-600 focus:outline-none transition-colors shadow-2xs"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-500/20 transition-all cursor-pointer active:scale-95"
                >
                  {locale === "ar" ? "إرسال طلب الحجز" : "Submit Appointment Request"}
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:w-auto py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{locale === "ar" ? "حجز مباشر عبر واتساب" : "Book directly via WhatsApp"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
