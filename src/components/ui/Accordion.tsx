"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  items: {
    title: string;
    content: string[];
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className={cn(
              "group rounded-[32px] transition-all duration-500 overflow-hidden",
              isOpen ? "bg-white shadow-premium ring-1 ring-pink/10" : "bg-transparent border border-black/5"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-8 text-left transition-all"
            >
              <div className="flex items-center gap-6">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500",
                  isOpen ? "bg-primary-gradient text-white rotate-12" : "bg-white shadow-sm text-text-dark border border-black/5"
                )}>
                  {index + 1}
                </div>
                <span className={cn(
                  "text-lg font-black tracking-tight transition-colors",
                  isOpen ? "text-text-dark" : "text-text-mid"
                )}>{item.title}</span>
              </div>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                isOpen ? "bg-text-dark text-white rotate-180" : "bg-white text-text-light border border-black/5"
              )}>
                <ChevronDown size={20} />
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="p-10 pt-0 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {item.content.map((point, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 group/item"
                      >
                        <div className="mt-1 w-5 h-5 rounded-md bg-green-50 flex items-center justify-center text-green-500 group-hover/item:bg-green-500 group-hover/item:text-white transition-all">
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className="text-base text-text-mid font-medium leading-relaxed">{point}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
