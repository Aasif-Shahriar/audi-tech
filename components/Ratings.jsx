"use client";

import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function Ratings({
  value = 0,
  max = 5,
  size = 20,
  className = "",
}) {
  const stars = [];

  for (let i = 1; i <= max; i++) {
    if (value >= i) {
      // full star
      stars.push(<FaStar key={i} size={size} className="text-yellow-400" />);
    } else if (value >= i - 0.5) {
      // half star
      stars.push(
        <FaStarHalfAlt key={i} size={size} className="text-yellow-400" />
      );
    } else {
      // empty star
      stars.push(<FaRegStar key={i} size={size} className="text-yellow-400" />);
    }
  }

  return <div className={`flex items-center gap-1 ${className}`}>{stars}</div>;
}
