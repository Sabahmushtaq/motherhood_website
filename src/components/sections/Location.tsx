"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ShieldCheck, Navigation } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 bg-pink/5 px-4 py-1.5 rounded-full border border-pink/10">
            <MapPin size={14} className="text-pink" />
            <span className="text-[10px] font-black uppercase tracking-widest text-text-light">Visit Our Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">Chennai Motherhood</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          {/* Map Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group h-[500px] lg:h-auto min-h-[400px]"
          >
            <div className="absolute inset-0 bg-primary-gradient rounded-[48px] rotate-1 scale-105 opacity-5 blur-2xl group-hover:rotate-0 group-hover:scale-100 transition-all duration-700" />
            <div className="relative h-full rounded-[48px] overflow-hidden border border-black/5 shadow-premium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0695211535754!2d80.24625654555298!3d13.031244780915749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b4336e6a1d%3A0xb46e591bbe7831e1!2sMotherhood%20Hospital%2C%20Chennai!5e0!3m2!1sen!2sin!4v1714034493607!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-12 bg-[#fafafa] p-12 lg:p-16 rounded-[48px] border border-black/5"
          >
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black text-text-dark tracking-tight">Alwarpet Branch</h3>
                <p className="text-text-mid font-medium text-lg leading-relaxed">
                  Located in the heart of Chennai, our facility offers world-class amenities for you and your baby.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { icon: <MapPin />, title: "Address", text: "Alwarpet, Chennai, Tamil Nadu" },
                  { icon: <Phone />, title: "Support", text: "080 695 49251" },
                  { icon: <Clock />, title: "Availability", text: "Open 24/7 for Emergencies" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group cursor-default">
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-deep-pink group-hover:bg-primary-gradient group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-text-light/60 mb-1">{item.title}</div>
                      <div className="text-text-dark font-bold text-base">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-black/5 flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                {["Level III NICU", "NABH Cert.", "24/7 Pharma"].map((tag, i) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border border-black/5 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a 
                  href="tel:08069549251" 
                  className="flex-grow flex items-center justify-center gap-3 bg-text-dark text-white px-8 py-5 rounded-2xl font-black shadow-xl hover:bg-black transition-all"
                >
                  <Phone size={20} />
                  Call Us
                </a>
                <a 
                  href="https://maps.google.com" 
                  target="_blank"
                  className="w-16 h-16 flex items-center justify-center bg-white text-text-dark border border-black/5 rounded-2xl shadow-sm hover:shadow-premium transition-all"
                >
                  <Navigation size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
