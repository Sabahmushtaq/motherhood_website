"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    text: "The doctors made my pregnancy journey stress-free. The level of care and attention I received was extraordinary. I felt safe and supported every single day.",
    author: "Priya Ramachandran",
    meta: "New Mother · Alwarpet, Chennai",
    avatar: "👩",
    color: "from-pink/20 to-lavender/20"
  },
  {
    text: "From the first consultation to my delivery, the entire team was professional, warm, and caring. The facilities were excellent and my baby is healthy and happy.",
    author: "Deepika Subramaniam",
    meta: "Mother of Twins · Chennai",
    avatar: "🤱",
    color: "from-peach/40 to-pink/10"
  },
  {
    text: "The ₹10,000 package was worth every bit. The photoshoot, gift hamper, and complimentary scan made everything so special. I recommend Motherhood to everyone.",
    author: "Anitha Krishnaswamy",
    meta: "First-time Mother · Chennai",
    avatar: "🌸",
    color: "from-lavender/20 to-peach/20"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-[#fafafa]">
      <div className="container mx-auto">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-black/5">
            <Heart size={14} className="text-pink fill-pink" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-light">Real Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">Voices of Motherhood</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} rounded-[48px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
              <div className="relative h-full bg-white p-12 rounded-[48px] shadow-premium hover:shadow-hover border border-black/5 transition-all duration-500 flex flex-col">
                <Quote className="text-pink/20 mb-8" size={48} />
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-text-mid text-lg font-medium leading-relaxed italic mb-10 flex-grow">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-black/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary-gradient flex items-center justify-center text-3xl shadow-lg shadow-pink/20 group-hover:rotate-6 transition-transform">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-base font-black text-text-dark leading-tight">{t.author}</div>
                    <div className="text-[10px] text-text-light font-black uppercase tracking-widest mt-1">{t.meta}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
