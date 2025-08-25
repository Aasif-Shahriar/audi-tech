"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Ratings from "../Ratings";

export default function HighlightCard({ product }) {
  const {
    _id,
    name,
    brand,
    category,
    thumbnail,
    price,
    currency,
    inStock,
    rating,
    specifications,
    features,
  } = product;
  return (
    <div className="bg-white border border-gray-300 p-4 relative group">
      {/* image */}
      <div className="h-[300px] flex items-center justify-center">
        <Image src={thumbnail} alt={brand} height={300} width={300} />
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold">{brand}</h2>
        <p>${price}</p>
        <div className="flex items-center gap-3">
          <Ratings value={rating} />
          <span>({rating})</span>
        </div>
        <Link href={`/products/${_id}`}><span className="text-orange-400 font-semibold tracking-widest hover:text-orange-600 transition-colors duration-200 uppercase text-sm">Read more</span></Link>
      </div>
    </div>
  );
}
