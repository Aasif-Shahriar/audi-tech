import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SectionTwo() {
  return (
    <section className="w-full py-10">
      <Link href={'/products'}><div className="w-full h-[400px]">
        <Image src='https://res.cloudinary.com/dnh9rdh01/image/upload/v1756136386/bannera-3_henqzy.png' alt="section-two image" width={500} height={500} className="w-full h-full object-cover"  />
      </div></Link>
    </section>
  );
}
