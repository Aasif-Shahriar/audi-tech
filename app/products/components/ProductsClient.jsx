"use client";

import { useState, useEffect } from "react";
import HighlightCard from "@/components/project-highlights/HighlightCard";

export default function ProductsClient({ categories, products }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const productsPerPage = 8;

  // Filter and sort products
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (by id or name)
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, sortBy, searchQuery, products]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  return (
    <div className="max-w-[1560px] mx-auto px-4 lg:px-0 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-6">Filters</h2>

            {/* Search */}
            <div className="mb-6">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Search Products
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by name or brand..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
                      selectedCategory === "all"
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedCategory("all")}
                  >
                    <span className="flex items-center">
                      <span className="mr-2">📦</span>
                      All Products
                    </span>
                    <span className="text-sm text-gray-500">
                      {products.length}
                    </span>
                  </button>
                </li>
                {categories.map((category,idx) => {
                  const count = products.filter(
                    (p) => p.category === category.name
                  ).length;
                  return (
                    <li key={idx}>
                      <button
                        className={`flex items-center justify-between w-full px-3 py-2 rounded-md ${
                          selectedCategory === category.name
                            ? "bg-blue-100 text-blue-800"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <span className="flex items-center">
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                        <span className="text-sm text-gray-500">{count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Price Range Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Price Range</h3>
              <div className="space-y-2">
                <button
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    // Implement price filtering logic
                  }}
                >
                  Under $100
                </button>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    // Implement price filtering logic
                  }}
                >
                  $100 - $200
                </button>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    // Implement price filtering logic
                  }}
                >
                  $200 - $500
                </button>
                <button
                  className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => {
                    // Implement price filtering logic
                  }}
                >
                  Over $500
                </button>
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Availability</h3>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="in-stock"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  onChange={(e) => {
                    // Implement in-stock filtering logic
                  }}
                />
                <label
                  htmlFor="in-stock"
                  className="ml-2 text-sm text-gray-700"
                >
                  In Stock Only
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4">
          {/* Header with results and sorting */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "all" ? "All Products" : selectedCategory}
              </h1>
              <p className="text-gray-600 mt-1">
                Showing {startIndex + 1}-
                {Math.min(
                  startIndex + productsPerPage,
                  filteredProducts.length
                )}{" "}
                of {filteredProducts.length} products
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <label htmlFor="sort" className="sr-only">
                Sort by
              </label>
              <select
                id="sort"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default Sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <HighlightCard key={product._id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(1, prev - 1))
                      }
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 rounded-md ${
                            currentPage === page
                              ? "bg-blue-600 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </button>
                      )
                    )}

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">😢</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                  setSortBy("default");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
