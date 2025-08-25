import dbConnect, { collectionLists } from "@/lib/dbConnect";
import ProductsClient from "./components/ProductsClient";

// Fetch products from your database
async function getProducts() {
  const productsCollection = dbConnect(collectionLists.productsCollection);
  const products = await productsCollection.find({}).toArray();
  return products.map((product) => ({
    ...product,
    _id: product._id.toString(),
  }));
}

// Extract categories from products
function extractCategories(products) {
  const categoryMap = {};

  products.forEach((product) => {
    if (product.category) {
      if (!categoryMap[product.category]) {
        categoryMap[product.category] = {
          name: product.category,
          icon: getCategoryIcon(product.category),
          count: 1,
        };
      } else {
        categoryMap[product.category].count++;
      }
    }
  });

  return Object.values(categoryMap);
}

// Helper function to assign icons based on category
function getCategoryIcon(category) {
  const iconMap = {
    Headphones: "🎧",
    Speakers: "🔊",
    Earbuds: "📱",
    Microphones: "🎤",
    Accessories: "🔌",
  };

  return iconMap[category] || "📦";
}

export default async function ProductsPage() {
  const products = await getProducts();
  const categories = extractCategories(products);

  return <ProductsClient categories={categories} products={products} />;
}
