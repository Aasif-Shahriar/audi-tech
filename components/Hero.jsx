"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  const [heroData, setHeroData] = useState([]);

  useEffect(() => {
    const fetchHero = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/hero.json`, {
        cache: "no-store",
      });
      const data = await res.json();
      setHeroData(data);
    };
    fetchHero();
  }, []);

  return (
    <section className="max-w-[1560px] mx-auto px-4 lg:px-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-2xl"
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-[700px] sm:h-[500px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-6 shadow-xl">
              <div className="flex flex-col items-center justify-center h-full sm:flex-row-reverse gap-6">
                <div className="flex-1 flex justify-center">
                  <Image
                    src={item.image}
                    height={350}
                    width={350}
                    className=" rounded-2xl shadow-2xl border-4 border-white/20"
                    alt={item.title}
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                    {item.title}
                  </h1>
                  <p className="py-6 text-white/90 text-lg font-medium">
                    {item.subtitle}
                  </p>
                  <button className="btn bg-white text-purple-700 border-0 hover:bg-gray-100 hover:text-purple-800 px-8 py-3 text-lg font-bold rounded-full shadow-xl transform hover:scale-105 transition-all duration-300">
                    {item.ctaText} →
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
