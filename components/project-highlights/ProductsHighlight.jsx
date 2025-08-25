import dbConnect, { collectionLists } from "@/lib/dbConnect";
import React from "react";
import HighlightCard from "./HighlightCard";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default async function ProductsHighlight() {
  const productsCollection = dbConnect(collectionLists.productsCollection);
  const products = await productsCollection.find({}).limit(10).toArray();

  const productsData = products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));

  console.log(productsData);

  return (
    <section className="max-w-[1560px] mx-auto px-4 lg:px-0 py-16">
      {/* heading */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-5">
        <div>
          {" "}
          <h2 className="text-4xl font-bold">Products Highlight</h2>
          <p className="text-gray-600 mb-5">
            Discover our most popular and trending items
          </p>
        </div>
        <Link href={"/products"}>
          <button className="btn btn-warning">
            View More <GoArrowUpRight size={20} />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {productsData.map((product) => (
          <HighlightCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}
