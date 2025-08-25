import FaqSection from "@/components/FaqSection";
import Hero from "@/components/Hero";
import ProductsHighlight from "@/components/project-highlights/ProductsHighlight";
import Review from "@/components/review-section/Review";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsHighlight />
      <Review />
      <FaqSection />
    </div>
  );
}
