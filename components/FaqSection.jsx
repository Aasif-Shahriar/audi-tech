import dbConnect, { collectionLists } from "@/lib/dbConnect";
import React from "react";

export default async function FaqSection() {
  const faqsCollection = dbConnect(collectionLists.faqsCollection);
  const faqs = await faqsCollection.find({}).toArray();

  const faqsData = faqs.map((faq) => ({
    ...faq,
    _id: faq._id.toString(),
  }));

  return (
    <section className="max-w-4xl mx-auto px-4 lg:px-0 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about our products and services.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqsData.map((item, index) => (
          <div
            key={item._id}
            className="group rounded-xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg"
          >
            <input
              type="checkbox"
              id={`faq-${index}`}
              className="hidden peer"
            />
            <label
              htmlFor={`faq-${index}`}
              className="flex justify-between items-center p-6 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0 ml-2">
                <svg
                  className="w-5 h-5 text-gray-500 transition-transform duration-300 group-peer-checked:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </label>

            <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-96">
              <div className="p-6 pt-0 text-gray-600">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Support CTA */}
      <div className="mt-12 text-center p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Still have questions?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Can't find the answer you're looking for? Please reach out to our
          friendly team.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
          Contact Support
        </button>
      </div>
    </section>
  );
}
