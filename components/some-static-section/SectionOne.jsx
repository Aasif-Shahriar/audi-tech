import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiArrowsClockwise } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaTrophy } from "react-icons/fa6";

export default function SectionOne() {
  const content = [
    {
      icon: <TbTruckDelivery size={30} />,
      title: "Free Shipping",
      sub: "Order over 100$ and get free shipping",
    },
    {
      icon: <PiArrowsClockwise size={30} />,
      title: "Easy Return",
      sub: "Get return within 3 working days",
    },
    {
      icon: <RiSecurePaymentLine size={30} />,
      title: "Secure Payment",
      sub: "100% secure online payment",
    },
    {
      icon: <FaTrophy size={30} />,
      title: "Best Quality",
      sub: "Get original product",
    },
  ];

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {content.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 flex flex-col items-center justify-center text-center shadow-md `}
          >
            <div className="mb-3">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm opacity-90">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
