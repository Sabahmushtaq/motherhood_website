import React from "react";
import Link from "next/link";
import { Phone, MapPin, Mail, Heart, Star, Smile } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-10 px-6 border-t border-black/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-primary-gradient rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                🌸
              </div>
              <span className="text-xl font-black tracking-tight text-text-dark">Motherhood</span>
            </Link>
            <p className="text-text-mid font-medium leading-relaxed">
              Providing world-class maternity and pediatric care with compassion and expertise. Your journey to motherhood, supported by excellence.
            </p>
            <div className="flex gap-4">
              {[Heart, Star, Smile].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-[#fafafa] flex items-center justify-center text-text-light hover:bg-primary-gradient hover:text-white transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text-light">Hospital</h4>
            <ul className="space-y-4">
              {["Our Doctors", "Maternity Packages", "Birthing Suites", "NICU Facilities"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-text-mid font-bold hover:text-deep-pink transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text-light">Resources</h4>
            <ul className="space-y-4">
              {["Patient Stories", "Health Blogs", "Virtual Tour", "Contact Support"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-text-mid font-bold hover:text-deep-pink transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-text-light">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-peach/30 flex items-center justify-center text-deep-pink flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-light/60">Phone</div>
                  <div className="text-text-dark font-black">080 695 49251</div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-peach/30 flex items-center justify-center text-deep-pink flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-text-light/60">Location</div>
                  <div className="text-text-dark font-black">Alwarpet, Chennai</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-text-light uppercase tracking-widest">
            © 2026 Motherhood Hospitals Chennai. All rights reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-text-light uppercase tracking-widest">
            <Link href="#" className="hover:text-deep-pink">Privacy Policy</Link>
            <Link href="#" className="hover:text-deep-pink">Terms of Service</Link>
            <Link href="#" className="hover:text-deep-pink">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
