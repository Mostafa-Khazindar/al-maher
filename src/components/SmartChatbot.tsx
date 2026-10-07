"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SITE_CONFIG } from "@/data/siteData";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Phone,
} from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export default function SmartChatbot() {
  const { locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text:
        locale === "ar"
          ? "مرحباً بك في مركز الماهر العالمي لسمكرة ودهان السيارات! كيف أستطيع مساعدتك اليوم؟ يمكنك اختيار أحد الأسئلة السريعة أدناه أو كتابة استفسارك."
          : "Welcome to Al-Maher Al-Alami Body Shop! How can I assist you today? You can choose a quick question below or type your inquiry.",
      timestamp: "الآن",
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    {
      labelAr: "الخدمات المتاحة",
      labelEn: "Services",
      qAr: "ما هي الخدمات المتوفرة في ورشة الماهر العالمي؟",
      qEn: "What services are available at Al-Maher Al-Alami?",
    },
    {
      labelAr: "الموقع في عسفان",
      labelEn: "Location",
      qAr: "أين تقع الورشة وكيف أصل إليها؟",
      qEn: "Where is the workshop located?",
    },
    {
      labelAr: "حجز موعد كشف",
      labelEn: "Book Inspection",
      qAr: "كيف أحجز موعد كشف أو تقييم لسيارتي؟",
      qEn: "How do I book an inspection for my car?",
    },
    {
      labelAr: "دهانات Spies Hecker",
      labelEn: "Spies Hecker",
      qAr: "ما هي نوعية الدهانات والمواد المستخدمة؟",
      qEn: "What paint brands and materials do you use?",
    },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input.trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");

    setTimeout(() => {
      let botResponse = "";
      const lower = text.toLowerCase();

      if (lower.includes("خدم") || lower.includes("service") || lower.includes("سمكر") || lower.includes("رش") || lower.includes("body")) {
        botResponse =
          locale === "ar"
            ? "نحن متخصصون في سمكرة وهياكل ودهان السيارات، إصلاح الحوادث، سحب وتعديل الصاج، مطابقة الألوان الرقمية، الدهان بالفرن الحراري بأنظمة Spies Hecker الألمانية، وإصلاح الصدامات والتشطيب والتلميع."
            : "We specialize in collision body repair, precision sheet-metal pulling, digital color matching, thermal spray booth refinishing with Spies Hecker systems, bumper restoration, and high-gloss polishing.";
      } else if (lower.includes("موقع") || lower.includes("وين") || lower.includes("location") || lower.includes("عسفان") || lower.includes("where")) {
        botResponse =
          locale === "ar"
            ? `يقع مركز الماهر العالمي في: صناعية عسفان — بلوك 1102 / 1103، جدة، المملكة العربية السعودية. للتواصل المباشر: 0544792646.`
            : `Al-Maher Al-Alami is located at: Asfan Industrial Area — Block 1102 / 1103, Jeddah, Saudi Arabia. Direct contact: 0544792646.`;
      } else if (lower.includes("سعر") || lower.includes("تكلف") || lower.includes("price") || lower.includes("cost") || lower.includes("كم")) {
        botResponse =
          locale === "ar"
            ? "تختلف تكلفة الإصلاح باختلاف حجم الضرر ونوع الصاج والأجزاء الداخلية. لا نحدد أسعاراً جزافية دون فحص، وندعوك لحجز موعد كشف أو إرسال صور سيارتك عبر واتساب (0544792646) لتقييم أولي."
            : "Repair costs vary based on damage depth, sheet metal condition, and structural frame requirements. Please book an inspection or send photos via WhatsApp (0544792646).";
      } else if (lower.includes("صورة") || lower.includes("صور") || lower.includes("photo") || lower.includes("pic")) {
        botResponse =
          locale === "ar"
            ? "يبدو أن هناك ضرراً في هذه المنطقة، لكن التقييم النهائي يحتاج إلى فحص السيارة ميدانياً في الورشة للتحقق من سلامة الأجزاء الداخلية والشاسيه. يمكنك إرسال الصور عبر واتساب (0544792646) لتقدير أولي."
            : "Visible photos can indicate surface damage, however a definitive technical assessment requires on-site vehicle inspection. You can share pictures on WhatsApp (0544792646) for an initial overview.";
      } else if (lower.includes("مادة") || lower.includes("دهان") || lower.includes("spies") || lower.includes("paint") || lower.includes("material")) {
        botResponse =
          locale === "ar"
            ? "نستخدم أنظمة طلاء Spies Hecker الألمانية الأصلية (Permahyd & Permasolid) للدهانات وطبقات اللكر الشفافة عالية الصلابة والمقاومة للحرارة والأشعة فوق البنفسجية."
            : "We utilize world-certified German Spies Hecker systems (Permahyd & Permasolid) for OEM-spec color fidelity and heat/UV durability.";
      } else {
        botResponse =
          locale === "ar"
            ? "شكراً لتواصلك! للإجابة على استفسارك بدقة وتزويدك بكافة التفاصيل، يسعدنا تواصلك المباشر مع فريق ورشة الماهر العالمي عبر واتساب (0544792646)."
            : "Thank you for your inquiry! Please connect directly with our workshop team via WhatsApp (0544792646).";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 400);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 start-6 z-50 flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-2xl hover:scale-105 transition-transform flex items-center justify-center border-2 border-white cursor-pointer"
          aria-label="Open AI Assistant"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </button>

        {!isOpen && (
          <div className="hidden sm:flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-full text-xs font-semibold text-slate-700 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{locale === "ar" ? "مساعد الماهر العالمي الذكي" : "Al-Maher AI Assistant"}</span>
          </div>
        )}
      </div>

      {/* Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-24 start-6 z-50 w-[92vw] sm:w-[400px] h-[520px] rounded-3xl bg-white border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-blue-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <span>{locale === "ar" ? "مساعد الماهر العالمي" : "Al-Maher Assistant"}</span>
                </h4>
                <p className="text-[11px] text-blue-100">
                  {locale === "ar" ? "إجابات فورية واستشارات سمكرة ودهان" : "Instant answers & guidance"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white font-medium rounded-ee-none"
                      : "bg-white border border-slate-200 text-slate-800 rounded-es-none shadow-sm"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-end ${
                      msg.sender === "user" ? "text-blue-100" : "text-slate-400"
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Question Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-200 overflow-x-auto flex gap-1.5 no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(locale === "ar" ? q.qAr : q.qEn)}
                className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] text-slate-700 hover:bg-blue-50 hover:text-blue-700 whitespace-nowrap transition-colors shrink-0"
              >
                {locale === "ar" ? q.labelAr : q.labelEn}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={locale === "ar" ? "اكتب سؤالك هنا..." : "Ask a question..."}
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
