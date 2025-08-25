"use client";

import { useState } from "react";

interface ProductImagesProps {
  productImage: string[];
}

const ProductImages = ({ productImage }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(
    productImage?.[0] || ""
  );

  if (!productImage || productImage.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-2 md:px-10 bg-white">
      <h1 className="text-center text-orange-700 mb-10 text-2xl md:text-4xl font-extrabold">Product Preview</h1>

      <div className="flex gap-2 md:gap-8">
        <div className="flex flex-col gap-4">
          {productImage.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`product-${i}`}
              onClick={() => setSelectedImage(img)}
              className={`w-24 h-24  rounded-lg border cursor-pointer transition-transform duration-300 
                hover:scale-105 ${
                  selectedImage === img ? "ring-2 ring-orange-500" : ""
                }`}
            />
          ))}
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={selectedImage}
            alt="Selected Product"
            className="w-full max-w-3xl md:h-[500px]  rounded-lg border shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
