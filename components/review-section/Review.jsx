import dbConnect, { collectionLists } from "@/lib/dbConnect";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import Ratings from "../Ratings";

export default async function Review() {
  const reviewsCollection = dbConnect(collectionLists.reviewsCollection);
  const reviews = await reviewsCollection.find({}).toArray();

  const reviewsData = reviews.map((rev) => ({
    ...rev,
    _id: rev._id.toString(),
  }));

  return (
    <section className="max-w-[1560px] mx-auto px-4 lg:px-0 py-16">
      <h2 className="text-4xl text-center font-bold mb-4 ">Customer Reviews</h2>
      <p className="text-gray-600 mb-6 text-center">Hear what our customers have to say about their experience</p>


      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        {reviewsData.map((rev) => (
          <div
            key={rev._id}
            className="bg-white border border-gray-200 shadow-md rounded-lg flex-shrink-0 w-72 h-72 m-2 p-4 flex flex-col items-center justify-center text-center"
          >
            <div className="mb-3">
              <Image
                src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1756074255/mahdi-chaghari-heMQHX6uvjg-unsplash_aap2pt.jpg"
                alt={rev.userName}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-lg">{rev.userName}</h3>
            <div className="flex items-center gap-2 my-2">
              <Ratings value={rev.rating} />
              <span>({rev.rating})</span>
            </div>
            <p className="text-sm text-gray-700 line-clamp-3">{rev.comment}</p>
            <p className="text-xs text-gray-400 mt-2">{rev.date}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
