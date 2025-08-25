import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import ProductsHighlight from "@/components/project-highlights/ProductsHighlight";
import Review from "@/components/review-section/Review";
import SectionOne from "@/components/some-static-section/SectionOne";
import SectionThree from "@/components/some-static-section/SectionThree";
import SectionTwo from "@/components/some-static-section/SectionTwo";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionOne />
      <ProductsHighlight />
      <SectionTwo />
      <Review />
      <SectionThree />
      <FaqSection />
    </div>
  );
}
