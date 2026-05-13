"use client";

import React from "react";
import Accordion from "@/components/ui/Accordion";

const packageItems = [
  {
    title: "Free Consultations Included",
    content: [
      "Obstetrician & Gynaecologist",
      "Dietician / Nutritionist",
      "Lactation Counsellor",
      "Physiotherapist",
      "Paediatrician",
      "Antenatal Class Access"
    ]
  },
  {
    title: "Diagnostic & Scans",
    content: [
      "1 Complimentary Scan (NT/Anomaly/Growth)",
      "In-house diagnostic lab",
      "Level III NICU access",
      "Advanced imaging facilities"
    ]
  },
  {
    title: "Post-Delivery Perks",
    content: [
      "Complimentary baby massage",
      "Cake-cutting ceremony",
      "Welcome gift hamper",
      "Pre-delivery photoshoot",
      "Newborn photoshoot",
      "5% off on baby vaccinations (6 months)"
    ]
  },
  {
    title: "Hospital Facilities",
    content: [
      "Well-equipped labour rooms",
      "Level III NICU",
      "Ventilator-enabled ambulances",
      "24×7 pharmacy",
      "Certified nursing staff",
      "Exclusive maternity suites"
    ]
  }
];

const PackageInclusions = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10 space-y-4">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-rose">📋 Package Details</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-dark">Everything in Your Package</h2>
          <p className="text-text-mid max-w-2xl mx-auto leading-relaxed">
            Tap to explore what's included in each part of your maternity journey.
          </p>
        </div>

        <Accordion items={packageItems} />
      </div>
    </section>
  );
};

export default PackageInclusions;
