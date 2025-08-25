import { MongoClient, ServerApiVersion } from "mongodb";

// All database collection list in this object
export const collectionLists = {
  productsCollection: "products",
  reviewsCollection: "reviews",
  faqsCollection: "faqs",
  usersCollection: "users",
};

export default function dbConnect(collectionName) {
  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db(process.env.DB_NAME).collection(collectionName);
}
