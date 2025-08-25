"use client";

import React from "react";
import Lottie from "lottie-react";
import squareAnimation from "../public/loading.json";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center">
      <Lottie animationData={squareAnimation} className="w-24 h-24" loop={true} />
    </div>
  );
}
