import ProductDetailsCard from "@/components/ProductDetailsCard";
import dbConnect, { collectionLists } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export default async function ProductDetails({ params }) {
  const id = params.id;
  const productsCollection = dbConnect(collectionLists.productsCollection);
  const product = await productsCollection.findOne({ _id: new ObjectId(id) });

  const productData = {
    ...product,
    _id: product._id.toString(),
  };

  return <ProductDetailsCard product={productData} />;
}
