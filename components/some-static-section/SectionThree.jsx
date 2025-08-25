"use client";

import Image from "next/image";
import React from "react";

export default function SectionThree() {
  return (
    <section className="min-w-full py-10">
      <div className="relative w-full h-[400px]">
        <Image
          src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1756134423/discount-banner-1_io1agy.jpg"
          alt="Discount Banner"
          fill
          className="object-left object-cover "
          priority
        />
        {/* overlay */}
        <div
          className="absolute top-0 w-full h-full flex items-center justify-center"
        >
          {/* overllay content */}
          <div className="text-center space-y-5">
            <h2 className="text-4xl font-bold">
              Get <span className="text-amber-500">20%</span> Discount Coupon{" "}
            </h2>
            <p className="text-gray-500">By Subscripe Our Newsletter</p>

            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="EMAIL ADDRESS" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-warning join-item">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
