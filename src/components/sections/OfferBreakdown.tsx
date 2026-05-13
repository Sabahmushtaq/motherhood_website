"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

const offers = [
  { icon: "🩺", title: "Free Consultation", desc: "1st consultation with senior Obstetrician absolutely free", value: "Worth ₹1,500", color: "bg-pink/10" },
  { icon: "🔬", title: "Free Scans", desc: "Complimentary NT / Anomaly / Internal Growth Scan (pick one)", value: "Worth ₹2,500", color: "bg-lavender/10" },
  { icon: "🥗", title: "Nutrition Counseling", desc: "Personalized diet plan from expert Dietician", value: "Complimentary", color: "bg-peach/30" },
  { icon: "💉", title: "Vaccination Benefits", desc: "5% discount on baby vaccinations, valid for 6 months", value: "Included", color: "bg-blue-50" },
  { icon: "📸", title: "2 Photoshoots", desc: "Pre-delivery + newborn photoshoot included", value: "Worth ₹3,000", color: "bg-yellow-50" },
  { icon: "🎁", title: "Gift Hamper + Cake", desc: "Welcome baby gift hamper + cake-cutting ceremony", value: "Complimentary", color: "bg-green-50" },
];

const OfferBreakdown = () => {
  return (
    <section id="packages" className="section-padding bg-[#fafafa]">
      <div className="container mx-auto">
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-black/5">
            <Sparkle size={14} className="text-deep-pink" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-light">Package Inclusions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">₹10,000 Exclusive Benefits</h2>
          <p className="text-text-mid max-w-2xl mx-auto text-lg font-medium">
            Everything you need for a joyful journey, wrapped in one premium package.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-10 rounded-[40px] shadow-premium hover:shadow-hover transition-all duration-500 group relative border border-transparent hover:border-pink/10 overflow-hidden"
            >
              <div className={`w-16 h-16 ${offer.color} rounded-3xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {offer.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-text-dark tracking-tight">{offer.title}</h3>
                <p className="text-text-mid text-sm font-medium leading-relaxed">{offer.desc}</p>
                <div className="pt-4">
                  <span className="inline-block bg-text-dark text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest group-hover:bg-primary-gradient transition-colors">
                    {offer.value}
                  </span>
                </div>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-peach opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferBreakdown;
