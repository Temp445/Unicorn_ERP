"use client";

import { useEffect, useState } from "react";

interface Product {
  _id: string;
  productName: string;
  productLink?: string;
  calendlyUrl?: string;
  productPath: string;
  description?: string;
  category?: string;
  mainImage: string[];
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const result = await res.json();
        const data: Product[] = result.data || [];
        await new Promise((resolve) => setTimeout(resolve, 500));
        setProducts(data);
        const uniqueCategories = Array.from(
          new Set(data.map((p) => p.category).filter(Boolean))
        );
        setCategories(uniqueCategories as string[]);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "all" || product.category === selectedCategory
  );

  if (loading) {
    return (
           <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
    </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white relative overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center py-20 px-6">
          <div className="mb-6">
            <h1 className="text-6xl md:text-5xl font-black text-white mb-4">
              Explore Our ERP Solutions
            </h1>
            <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
          </div>
          <p className="text-slate-300 mt-8 max-w-4xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
            Discover ERP solutions crafted to streamline your business and drive growth. 
          </p>
        </div>

      
{categories.length > 0 && (
  <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
    <button
      onClick={() => setSelectedCategory("all")}
      className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border ${
        selectedCategory === "all"
          ? "bg-orange-500 text-white border-transparent shadow-md"
          : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-gray-600 hover:text-white hover:shadow-sm"
      }`}
    >
      All Products
    </button>
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setSelectedCategory(cat)}
        className={`px-6 py-2 rounded-full font-semibold text-sm md:text-base transition-all duration-300 border ${
          selectedCategory === cat
            ? "bg-red-500 text-white border-transparent shadow-md"
            : "bg-gray-700 text-gray-300 border-gray-500 hover:bg-gray-600 hover:text-white hover:shadow-sm"
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
)}



        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-32">
              <div className="w-24 h-24 mx-auto mb-8 bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
              <p className="text-slate-400 text-2xl font-light">No products found</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product._id}
                  className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden h-64">
                    {product.mainImage?.[0] && (
                      <img
                        src={product.mainImage[0]}
                        alt={product.productName}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                      />
                    )}
                  </div>

                  {/* Product Content */}
                  <div className="relative p-8 space-y-4">
                    <h2 className="text-2xl font-bold transition-all duration-300">
                      {product.productName}
                    </h2>
                    <p className="text-slate-300 text-base leading-relaxed line-clamp-3">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-6">
                      {product.productLink && (
                        <a
                          href={product.productLink}
                          className="flex-1 px-6 py-3 bg-cyan-500 text-white rounded-xl text-center font-bold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                        >
                          Explore
                        </a>
                      )}
                      {product.calendlyUrl && (
                        <a
                          href={product.calendlyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-6 py-3 bg-blue-500 text-white rounded-xl text-center font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                        >
                          Book Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
