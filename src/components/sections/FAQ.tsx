"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What is included in the ₹10,000 offer?",
    a: "The ₹10,000 benefits include free consultations with multiple specialists, complimentary scans, nutrition counseling, baby vaccination discounts, two photoshoots, a baby massage, gift hamper, and a cake-cutting ceremony. Additionally, you receive a flat ₹10,000 discount on your final maternity bill."
  },
  {
    q: "Is this offer available for both normal and C-section deliveries?",
    a: "Yes, this offer is applicable for both normal and cesarean deliveries. Our experienced team handles all types of pregnancies including high-risk cases. Please consult our team for specific terms and conditions."
  },
  {
    q: "How do I book my first free consultation?",
    a: "Simply fill out the form on this page or call us at 080 695 49251. Our care coordinator will schedule your appointment and guide you through the next steps. The first consultation with our Obstetrician is completely free."
  },
  {
    q: "What makes Motherhood Hospital different from others?",
    a: "We offer NABH-certified care, Level III NICU, 24/7 emergency services, and a team of 15+ specialists dedicated to maternity care. Our patient-centric approach and personalized birthing plans set us apart."
  },
  {
    q: "Is there a time limit to avail this offer?",
    a: "Yes, this is a limited-time Chennai exclusive offer. We recommend booking your consultation as early as possible to secure your benefits."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-lavender/10 px-4 py-1.5 rounded-full">
            <HelpCircle size={14} className="text-lavender" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-light">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">Support & Clarity</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="group">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={cn(
                    "w-full flex items-center justify-between p-8 text-left rounded-3xl transition-all duration-500",
                    isOpen ? "bg-white shadow-premium ring-1 ring-black/5" : "bg-[#fafafa] hover:bg-white hover:shadow-sm"
                  )}
                >
                  <span className={cn(
                    "font-bold text-base md:text-lg tracking-tight transition-colors",
                    isOpen ? "text-deep-pink" : "text-text-dark"
                  )}>{faq.q}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500",
                    isOpen ? "bg-deep-pink text-white rotate-180" : "bg-black/5 text-text-light"
                  )}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "circOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 pt-4">
                        <p className="text-text-mid text-base md:text-lg font-medium leading-relaxed max-w-3xl">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
