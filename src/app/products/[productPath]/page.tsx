import ProductPageClient from "./ProductPageClient";
import { getProductByPath } from "@/lib/api";
import type { Metadata } from "next";

interface Props {
  params: { productPath: string };
}

interface Product {
  productName: string;
  description?: string;
  mainImage?: string[];
}

// Dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = await getProductByPath(params.productPath);

  let product: Product | null = null;
  if (Array.isArray(result)) {
    const first = result[0];
    if (first) {
      product = {
        productName: first.productName || "",
        description: first.description || "",
        mainImage: first.mainImage || [],
      };
    }
  } else if (result) {
    product = {
      productName: result.productName || "",
      description: result.description || "",
      mainImage: result.mainImage || [],
    };
  }

  if (!product) {
    return {
      title: "Unicorn (Bangalore) Pvt. Ltd",
      description: "Unicorn (Bangalore) Pvt. Ltd",
    };
  }

  return {
    title: `${product.productName} | Unicorn (Bangalore) Pvt. Ltd`,
    description: product.description || "Discover our product features and benefits.",
    openGraph: {
      title: product.productName,
      description: product.description || "",
      images: product.mainImage?.[0] ? [{ url: product.mainImage[0] }] : [],
      type: "website",
    },
  };
}

const ProductPage = async ({ params }: Props) => {
  return <ProductPageClient productPath={params.productPath} />;
};

export default ProductPage;
