"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, ArrowRight, Heart } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#1A0A2E] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-lavender/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto relative z-10 max-w-5xl text-center space-y-10">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center text-pink">
              <Heart size={32} fill="currentColor" />
            </div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black text-white leading-[1] tracking-tighter"
          >
            Your Journey to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink via-peach to-lavender">Motherhood</span> Begins
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Join 50,000+ happy mothers who chose Motherhood Hospital for their most precious moments. Expert care, modern facilities, and a team that truly cares.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-8"
        >
          <a 
            href="#booking" 
            className="bg-primary-gradient text-white px-12 py-6 rounded-3xl font-black text-xl shadow-[0_20px_50px_rgba(233,30,140,0.4)] hover:shadow-[0_30px_70px_rgba(233,30,140,0.6)] hover:-translate-y-2 transition-all flex items-center gap-4 group"
          >
            <Calendar size={28} />
            Book My Appointment
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            href="tel:08069549251" 
            className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-white/10 transition-all flex items-center gap-4"
          >
            <Phone size={28} />
            Talk to Expert
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-12 opacity-40 grayscale brightness-200"
        >
          {/* Trust badges placeholders */}
          <div className="text-white font-black text-xl tracking-tighter italic">NABH CERTIFIED</div>
          <div className="text-white font-black text-xl tracking-tighter italic">ISO 9001:2015</div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
