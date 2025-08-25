"use client";

import { useState } from "react";
import Image from "next/image";
import Ratings from "./Ratings";

export default function ProductDetailsCard({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const [quantity, setQuantity] = useState(1);

  const {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="md:w-1/2">
          <div className="sticky top-4">
            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
              <Image
                src={selectedImage}
                alt={name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Additional image thumbnails would go here */}
            <div className="flex gap-2">
              <button
                className="w-16 h-16 rounded-md overflow-hidden border-2 border-blue-500"
                onClick={() => setSelectedImage(thumbnail)}
              >
                <Image
                  src={thumbnail}
                  alt={name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
              {/* Additional thumbnails would be mapped here */}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <div>
            <nav className="text-sm text-gray-500 mb-4">
              <span>{category}</span> / <span>{brand}</span>
            </nav>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>

            <div className="flex items-center mb-4">
              <Ratings value={rating}></Ratings>
              <span className="text-sm text-gray-600">({rating})</span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-gray-900">
                {currency} {price}
              </span>
              <span
                className={`ml-3 text-sm font-semibold ${
                  inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <p className="text-gray-700 mb-8">
              High-quality product with excellent features and durability.
              Designed for those who appreciate premium quality and performance.
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 text-gray-700">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inStock}
              >
                Add to Cart
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Add to Wishlist
              </button>
            </div>

            {/* Features List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Specifications</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
              {Object.entries(specifications).map(([key, value], index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                    {key}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
