"use client";

import { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [features, setFeatures] = useState([""]);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    currency: "USD",
    inStock: true,
    rating: "",
    specifications: {
      type: "",
      connectivity: "",
      batteryLife: "",
      weight: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("specifications.")) {
      const specField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        specifications: {
          ...prev.specifications,
          [specField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...features];
    newFeatures[index] = value;
    setFeatures(newFeatures);
  };

  const addFeature = () => {
    setFeatures([...features, ""]);
  };

  const removeFeature = (index) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Show loading toast
    const loadingToast = toast.loading("Adding product...");

    try {
      const productData = {
        ...formData,
        price: parseFloat(formData.price),
        rating: formData.rating ? parseFloat(formData.rating) : 0,
        thumbnail: images[0]?.secure_url || "",
        images: images.map((img) => img.secure_url),
        features: features.filter((feature) => feature.trim() !== ""),
      };

      const response = await fetch("/api/dashboard/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        toast.success("Product added successfully!", { id: loadingToast });
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Error adding product. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <fieldset className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <legend className="card-title text-xl">Basic Information</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand * </span>
                </label>
                <br />
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category *</span>
                </label>
                <br />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Headphones">Headphones</option>
                  <option value="Speakers">Speakers</option>
                  <option value="Earphones">Earphones</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price *</span>
                </label>

                <div className="flex flex-col md:flex-row gap-2">
                  <select
                    name="currency"
                    value={formData.currency}
                    onChange={handleInputChange}
                    className="select select-bordered md:w-1/4"
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">BDT</option>
                  </select>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0"
                    className="input input-bordered flex-1"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <br />
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleInputChange}
                  step="0.1"
                  min="0"
                  max="5"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control flex flex-row items-center mt-6">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleInputChange}
                    className="checkbox"
                  />
                  <span className="label-text">In Stock</span>
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        {/* Image Upload */}
        <fieldset className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <legend className="card-title text-xl">Product Images</legend>

            <p className="text-sm text-gray-500 mb-4">
              Upload product images. The first image will be used as thumbnail.
            </p>

            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              options={{
                sources: ["local", "camera"],
                multiple: true,
                maxFiles: 5,
                styles: {
                  fonts: {
                    default: null,
                  },
                },
              }}
              onSuccess={(result) => {
                setImages((prev) => [...prev, result.info]);
                toast.success("Image uploaded successfully!");
              }}
              onError={(error) => {
                console.error("Upload error:", error);
                toast.error("Image upload failed. Please try again.");
              }}
            >
              {({ open }) => (
                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={() => open()}
                    className="btn btn-primary w-full"
                  >
                    📸 Upload Images
                  </button>

                  {images.length === 0 && (
                    <div className="text-center text-sm text-gray-400">
                      No images uploaded yet. Click above to upload product
                      images.
                    </div>
                  )}
                </div>
              )}
            </CldUploadWidget>

            {images.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-3">
                  Uploaded Images ({images.length})
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <div key={image.public_id} className="relative group">
                      <CldImage
                        width="150"
                        height="150"
                        src={image.public_id}
                        alt={`Product image ${index + 1}`}
                        className="rounded-lg object-cover w-full h-32"
                      />

                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => {
                          setImages(images.filter((_, i) => i !== index));
                          toast.success("Image removed");
                        }}
                        className="absolute top-1 right-1 btn btn-sm btn-circle btn-error opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Remove image"
                      >
                        ✕
                      </button>

                      {/* Thumbnail indicator */}
                      {index === 0 && (
                        <div className="absolute top-1 left-1 badge badge-sm badge-primary">
                          Thumbnail
                        </div>
                      )}

                      {/* Drag handle (optional) */}
                      <div className="absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded px-1 text-xs">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reorder instructions */}
                {images.length > 1 && (
                  <p className="text-xs text-gray-500 mt-2">
                    💡 The first image will be used as the main thumbnail. You
                    can reorder by removing and uploading in desired order.
                  </p>
                )}
              </div>
            )}
          </div>
        </fieldset>

        {/* Specifications */}
        <fieldset className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <legend className="card-title text-xl">Specifications</legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <br />
                <input
                  type="text"
                  name="specifications.type"
                  value={formData.specifications.type}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Connectivity</span>
                </label>
                <br />
                <input
                  type="text"
                  name="specifications.connectivity"
                  value={formData.specifications.connectivity}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Battery Life</span>
                </label>
                <br />
                <input
                  type="text"
                  name="specifications.batteryLife"
                  value={formData.specifications.batteryLife}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Weight</span>
                </label>
                <br />
                <input
                  type="text"
                  name="specifications.weight"
                  value={formData.specifications.weight}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>
        </fieldset>

        {/* Features */}
        <fieldset className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <legend className="card-title text-xl">Features</legend>

            {features.map((feature, index) => (
              <div key={index} className="form-control mb-3">
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                    className="input input-bordered flex-1"
                    placeholder="Enter a feature"
                  />
                  {features.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="btn btn-error md:w-1/4"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addFeature}
              className="btn btn-outline btn-sm mt-2"
            >
              + Add Feature
            </button>
          </div>
        </fieldset>

        {/* Submit Button */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="btn btn-ghost"
            disabled={loading}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? (
              <>
                <span className="loading loading-spinner"></span>
                Adding Product...
              </>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
