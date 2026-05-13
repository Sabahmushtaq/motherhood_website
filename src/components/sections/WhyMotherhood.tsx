"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Heart, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Heart className="text-pink" size={40} />,
    title: "Personalized Care for Every Mother",
    subtitle: "Your Personal Journey",
    desc: "At Motherhood, we believe every pregnancy is unique. Our specialists craft individualized care plans for your comfort and safety throughout the journey.",
    benefits: [
      "Personalized birthing plans",
      "Dedicated care coordinator",
      "Antenatal classes every 2nd & 4th week",
      "Lactation counseling post-delivery"
    ],
    color: "bg-pink/5",
    reverse: false
  },
  {
    icon: <Shield className="text-lavender" size={40} />,
    title: "Advanced Technology & Expert Doctors",
    subtitle: "Safety First Facilities",
    desc: "Equipped with Level III NICU, advanced labor & delivery rooms, and a team of experienced gynecologists handling all kinds of pregnancies.",
    benefits: [
      "Level III NICU for critical care",
      "High-risk pregnancy specialists",
      "Advanced NICU for newborns",
      "Ventilator-enabled ambulances"
    ],
    color: "bg-lavender/5",
    reverse: true
  },
  {
    icon: <Zap className="text-deep-pink" size={40} />,
    title: "24/7 Care — Always Here for You",
    subtitle: "Round-the-Clock Support",
    desc: "From your first consultation to post-delivery recovery, our team is available round the clock to ensure you and your baby are always safe.",
    benefits: [
      "24/7 emergency care available",
      "24×7 pharmacy on-site",
      "Certified nurses round the clock",
      "Post-birth medical follow-up"
    ],
    color: "bg-peach/10",
    reverse: false
  }
];

const WhyMotherhood = () => {
  return (
    <section id="why" className="section-padding bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 bg-peach/30 px-4 py-1.5 rounded-full">
            <span className="text-[10px] font-black uppercase tracking-widest text-deep-pink">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">Why Mothers Trust Us</h2>
        </div>

        <div className="space-y-20">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center ${reason.reverse ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, x: reason.reverse ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "circOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`absolute -inset-10 ${reason.color} rounded-full blur-[100px] opacity-60`} />
                <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white rounded-[60px] p-12 shadow-premium border border-black/5 flex items-center justify-center overflow-hidden group">
                   <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                   <motion.div 
                    animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-6"
                   >
                     <div className="p-8 bg-white rounded-3xl shadow-2xl group-hover:shadow-hover transition-shadow">
                        {reason.icon}
                     </div>
                     <h4 className="text-2xl font-black text-text-dark tracking-tight">{reason.subtitle}</h4>
                   </motion.div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-black text-text-dark leading-[1.1] tracking-tight">{reason.title}</h3>
                  <p className="text-text-mid text-lg font-medium leading-relaxed">{reason.desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {reason.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-center gap-3 group">
                      <div className="w-6 h-6 rounded-lg bg-green-50 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-text-dark font-bold text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMotherhood;
