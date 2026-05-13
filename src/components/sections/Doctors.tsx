"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Star } from "lucide-react";

const doctors = [
  {
    name: "Dr. Kavya Krishna Kumar",
    qual: "MBBS, FMAS, MS",
    role: "Consultant Obstetrician & Gynaecologist",
    loc: "Alwarpet, Chennai",
    img: "https://www.motherhoodindia.com/wp-content/uploads/2021/09/Dr.-Kavya-Krishna-Kumar-1.png"
  },
  {
    name: "Dr. Premalatha Balachandran",
    qual: "MBBS, MRCOG (UK), DGO",
    role: "Consultant Obstetrician & Gynaecologist",
    loc: "Alwarpet, Chennai",
    img: "https://www.motherhoodindia.com/wp-content/uploads/2021/09/Dr.-Premlatha-Balachandran-web.jpg"
  },
  {
    name: "Dr. Deepa Thiagarajamurthy",
    qual: "MBBS, DGO, MRCOG, FRCOG",
    role: "Consultant Obstetrician & Gynaecologist",
    loc: "Alwarpet, Chennai",
    img: "https://www.motherhoodindia.com/chennai-10K-offer/img/Deepa.jpg"
  },
  {
    name: "Dr. Karpagambal Sairam",
    qual: "Obstetrics & Laparoscopic Surgery",
    role: "Specialist Gynaecologist",
    loc: "Alwarpet, Chennai",
    img: "" 
  },
  {
    name: "Dr. Meenakshi Balasubramanian",
    qual: "MBBS, DGO",
    role: "Consultant Obstetrician & Gynaecologist",
    loc: "Alwarpet, Chennai",
    img: "https://www.motherhoodindia.com/wp-content/uploads/2021/09/Chennai-Dr.-Meenakshi-Balasubramanian.gif"
  }
];

const Doctors = () => {
  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-peach/30 px-4 py-1.5 rounded-full">
              <Star size={14} className="text-deep-pink fill-deep-pink" />
              <span className="text-[10px] font-black uppercase tracking-widest text-deep-pink">Expert Panel</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark tracking-tight">World-Class Specialists</h2>
            <p className="text-text-mid text-lg font-medium leading-relaxed">
              Our team of highly experienced gynecologists and obstetricians are dedicated to your care at every step.
            </p>
          </div>
          <motion.a 
            href="#booking"
            whileHover={{ scale: 1.05 }}
            className="hidden lg:flex items-center gap-3 text-deep-pink font-bold text-lg hover:underline underline-offset-8"
          >
            View All Doctors <ChevronRight size={20} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden bg-peach/10 border border-black/5 shadow-premium group-hover:shadow-hover transition-all duration-500">
                {doc.img ? (
                  <Image 
                    src={doc.img} 
                    alt={doc.name} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">👩‍⚕️</div>
                )}
                
                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-base leading-tight">{doc.name}</h3>
                    <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest">{doc.qual}</p>
                  </div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="pt-4 flex justify-between items-center"
                  >
                    <span className="text-pink text-[10px] font-black uppercase tracking-widest">{doc.loc}</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <ChevronRight size={16} />
                    </div>
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-6 space-y-2 lg:hidden">
                <h3 className="text-text-dark font-black text-lg">{doc.name}</h3>
                <p className="text-text-light text-sm font-medium">{doc.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
