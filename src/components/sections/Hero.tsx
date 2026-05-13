"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, ShieldCheck, Sparkles, Heart, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 px-6 overflow-hidden flex items-center bg-[#fff]">
      {/* Background with Premium Treatment */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] scale-105 hover:scale-100"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=1600&q=85')" 
          }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Modern Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {[
          { icon: <Heart className="text-pink fill-pink/20" size={32} />, top: "20%", left: "10%", delay: 0 },
          { icon: <Sparkles className="text-lavender" size={28} />, top: "65%", left: "8%", delay: 1.5 },
          { icon: <Activity className="text-pink/60" size={36} />, top: "25%", right: "40%", delay: 0.5 },
        ].map((item, i) => (
          <motion.div 
            key={i}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            style={{ position: 'absolute', top: item.top, left: item.left, right: item.right }}
            className="opacity-40 drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-xl border border-white/30 px-5 py-2 rounded-full shadow-2xl"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="w-6 h-6 rounded-full border-2 border-pink bg-peach flex items-center justify-center text-[8px] font-bold">👩</div>
              ))}
            </div>
            <span className="text-[11px] font-black text-white uppercase tracking-widest">
              Trusted by 50,000+ Chennai Mothers
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1] tracking-tight"
            >
              Every Journey is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink via-peach to-lavender animate-gradient-x">Beautiful.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/80 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              Experience world-class maternity care with ₹10,000 exclusive benefits. Designed for comfort, safety, and joy.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
          >
            <a 
              href="#booking" 
              className="bg-primary-gradient text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:shadow-deep-pink/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
            >
              <Calendar size={22} className="group-hover:rotate-12 transition-transform" />
              Book Appointment
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#packages" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-bold hover:bg-white/20 transition-all text-center"
            >
              View Benefits
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start opacity-70"
          >
            {["Expert Gynaecologists", "24/7 NICU Support", "Personalized Care"].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-tighter">
                <div className="w-1.5 h-1.5 bg-pink rounded-full" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-5"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink to-lavender rounded-[40px] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            <div id="booking" className="relative glass-morphism p-10 rounded-[40px] shadow-premium border border-white/50 space-y-8">
              <div className="text-center">
                <span className="inline-block bg-deep-pink/10 text-deep-pink text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
                  ✨ Limited Time Chennai Offer
                </span>
                <h2 className="text-3xl font-black text-text-dark tracking-tight">Your Care Starts Here</h2>
                <p className="text-sm text-text-light mt-2 font-medium">Register for ₹10,000 benefits & free consult</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Success!'); }}>
                <div className="space-y-4">
                  {[
                    { placeholder: "Your Full Name", type: "text" },
                    { placeholder: "Phone Number", type: "tel" },
                    { placeholder: "Current Location", type: "text" }
                  ].map((field, i) => (
                    <input 
                      key={i}
                      type={field.type} 
                      placeholder={field.placeholder} 
                      className="w-full px-6 py-4 bg-white/50 border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink/10 focus:border-pink transition-all font-medium text-text-dark placeholder:text-text-light/60"
                      required
                    />
                  ))}
                  <div className="relative">
                    <select className="w-full px-6 py-4 bg-white/50 border border-black/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-pink/10 focus:border-pink transition-all font-medium text-text-dark appearance-none cursor-pointer">
                      <option value="">Preferred Language</option>
                      <option>English</option>
                      <option>Tamil</option>
                      <option>Hindi</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ChevronRight className="rotate-90" size={18} />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-text-dark text-white py-5 rounded-2xl font-black text-lg shadow-2xl hover:bg-black transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
                >
                  <span className="relative z-10">Start My Journey</span>
                  <ChevronRight size={22} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-primary-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-text-light uppercase tracking-widest pt-2">
                  <ShieldCheck size={14} className="text-green-500" />
                  GDPR Compliant & 100% Secure
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
