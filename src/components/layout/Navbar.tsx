"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Benefits", href: "#packages" },
    { name: "Expert Doctors", href: "#doctors" },
    { name: "Our Location", href: "#location" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      <div className={cn(
        "container mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 py-3",
        isScrolled ? "glass-morphism shadow-premium" : "bg-transparent"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-gradient rounded-xl flex items-center justify-center text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            🌸
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "text-[12px] md:text-sm font-bold tracking-tight leading-none transition-colors",
              isScrolled ? "text-text-dark" : "text-white md:text-text-dark"
            )}>
              Motherhood
            </span>
            <span className={cn(
              "text-[9px] md:text-[10px] font-medium opacity-60",
              isScrolled ? "text-text-light" : "text-white/80 md:text-text-light"
            )}>
              Chennai
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={cn(
                "text-sm font-semibold transition-all hover:text-deep-pink relative group",
                isScrolled ? "text-text-mid" : "text-white/90 md:text-text-mid"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-deep-pink transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="tel:08069549251"
            className={cn(
              "hidden lg:flex items-center gap-2 text-sm font-bold transition-colors",
              isScrolled ? "text-deep-pink" : "text-white md:text-deep-pink"
            )}
          >
            <Phone size={16} strokeWidth={2.5} />
            080 695 49251
          </Link>
          
          <Link
            href="#booking"
            className="bg-primary-gradient text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[11px] md:text-sm font-bold whitespace-nowrap shadow-lg hover:shadow-deep-pink/30 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Book Free Consult
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={cn(
              "md:hidden transition-colors",
              isScrolled ? "text-text-dark" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass-morphism rounded-3xl p-8 shadow-2xl md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-text-dark hover:text-deep-pink transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
              <Link href="tel:08069549251" className="flex items-center gap-3 text-deep-pink font-bold text-lg">
                <Phone size={20} />
                080 695 49251
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
