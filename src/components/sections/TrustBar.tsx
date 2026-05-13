"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Stethoscope, Clock } from "lucide-react";

const stats = [
  { value: "50,000+", label: "Happy Mothers", icon: <Users size={20} /> },
  { value: "NABH", label: "Certified Care", icon: <Award size={20} /> },
  { value: "15+", label: "Top Specialists", icon: <Stethoscope size={20} /> },
  { value: "24/7", label: "Emergency Team", icon: <Clock size={20} /> },
];

const TrustBar = () => {
  return (
    <div className="bg-white border-y border-black/5 py-6 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 lg:justify-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-peach/30 flex items-center justify-center text-deep-pink group-hover:bg-primary-gradient group-hover:text-white transition-all duration-500 shadow-sm">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-text-dark tracking-tighter leading-none group-hover:text-deep-pink transition-colors">
                  {stat.value}
                </span>
                <span className="text-[10px] font-bold text-text-light uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
