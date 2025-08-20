"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/ProductDetailPage/FAQSection";
import ProductImages from "@/components/ProductDetailPage/ProductImages";
import CustomerTestimonial from "@/components/ProductDetailPage/CustomerTestimonial";
import Hero from "@/components/ProductDetailPage/Hero";
import WhoNeedThis from "@/components/ProductDetailPage/WhoNeedThis";
import WhyChoose from "@/components/ProductDetailPage/WhyChoose";
import Features from "@/components/ProductDetailPage/Features";
import Whatis from "@/components/ProductDetailPage/Whatis";
import ResultsSection from "@/components/ProductDetailPage/ResultsSection";
import DemoCard from "@/components/ProductDetailPage/DemoCard";

interface Product {
  _id: string;
  productName: string;
  productLink?: string;
  calendlyUrl?: string;
  productPath: string;
  description?: string;
  category?: string;
  why_choose_des?: string;
  who_need_des?: string;
  mainImage: string[];
  productImage: string[];
  whatis?: { title: string; description?: string }[];
  benefits?: { title: string; description?: string }[];
  FAQ?: { question: string; answer?: string }[];
  Result?: { title: string; description?: string }[];
  customerTestimonials?: {
    clientName: string;
    companyName?: string;
    description: string;
  }[];
}

const ProductPage = () => {
  const { productPath } = useParams<{ productPath: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/product/${productPath}`);
        const result = await res.json();
        setProduct(result.data || null);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productPath) fetchProduct();
  }, [productPath]);



  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent border-b-transparent rounded-full animate-spin"></div>
    </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-slate-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      
  <div className="min-h-screen bg-slate-50 container mx-auto">

<Hero
  product={{
    productName: product.productName,
    description: product.description || "",
    productLink: product.productLink,
    calendlyUrl: product.calendlyUrl,
    mainImage: product.mainImage,
  }}
/>
<Whatis product = {{
 whatis: product.whatis,
 calendlyUrl: product.calendlyUrl,
 }}/>

<WhyChoose product = {{
    productName: product.productName,
    why_choose_des: product.why_choose_des || ""
}}/>
<WhoNeedThis WhoNeed= {product.who_need_des ?? ""} />

<Features product={{
    benefits: product.benefits,
    mainImage: product.mainImage,
    productName: product.productName,
}}/>


        {/* {product.why_choose_des && (
          <section className="pt-24 relative">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 -mt-32 relative z-10">
                {product.why_choose_des && (
                  <div className="bg-white p-12 rounded-xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-blue-100 rounded-xl">
                        <Shield className="w-10 h-10 text-orange-500" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-slate-900">What is</h2>
                        <div className="w-16 h-1 bg-orange-500 mt-2 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-loose text-lg">
                      {product.why_choose_des}
                    </p>
                  </div>
                )}
                
              </div>
            </div>


    card
  <div className="flex justify-end items-end px-6 pt-16">
  <div className="absolute max-w-lg w-full top-5">
 
    <div className="relative bg-[#2A629A] p-10 rounded shadow-3xl hover:shadow-4xl transition-all duration-500
                    [clip-path:polygon(0_0,95%_0,100%_10%,100%_100%,5%_100%,0_90%)]">
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="p-3 bg-white rounded-full">
          <FileText className="w-8 h-8 text-gray-900" />
        </div>
        <div>
          <h2 className="text-2xl font-black text-white">Book A Free Demo</h2>
          <div className="w-12 h-1 bg-white/70 mt-1 rounded"></div>
        </div>
      </div>

      <p className="text-white/90 leading-relaxed text-lg relative z-10">
        Demo content goes here. Highlight key features, benefits, or instructions about your product in a concise, readable format.
      </p>

      <div className="mt-6 relative z-10">
        <button className="px-5 py-2 bg-white text-gray-900 text-sm font-bold rounded shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
          Book Demo
        </button>
      </div>
    </div>
  </div>
</div>
  </section>
        )} */}

        {/* <div className="p-5">
         {product.who_need_des && (
           <div className="bg-white p-12 rounded shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500">
             <div className="flex items-center gap-4 mb-8">
               <div className="p-4 bg-orange-100 rounded-2xl">
                 <Target className="w-10 h-10 text-orange-600" />
               </div>
               <div>
                 <h2 className="text-3xl font-black text-slate-900">Why Choose Us</h2>
                 <div className="w-24 h-1 bg-orange-500 mt-2 rounded-full"></div>
               </div>
             </div>
           <div className="text-slate-600 leading-loose text-lg">
  {product.who_need_des?.split('.').map((point, index) => 
    point.trim() ? <p key={index} className="mb-2 flex gap-2"><ArrowBigRightDash className="mt-1.5 text-orange-500" /> {point.trim()}</p> : null
  )}
</div>
</div>
)}
</div> */}


{/* 
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
          Best Suited For
        </h2>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
          Everything you need to succeed, crafted with care to make your experience seamless.
        </p>
      </div>

      <div className="grid  gap-6 text-slate-700 text-lg">
  {product.who_need_des?.split('.').map((point, index) =>
    point.trim() ? (
      <div
        key={index}
        className="flex items-start gap-3 p-4 rounded-2xl bg-orange-50 shadow-sm hover:shadow-md transition"
      >
        <div className="w-1 h-1/2 bg-orange-500 rounded-full mt-2"></div>
        <p>{point.trim()}</p>
      </div>
    ) : null
  )}
</div>



    </div>
  </section> */}


{/* 
<section className="py-24 bg-white">
  <div className="container mx-auto px-6 relative">
    <div className="grid lg:grid-cols-5 gap-16">
      
      <div className="lg:col-span-3 space-y-12">
        <div>
          <h2 className="text-4xl font-black text-slate-900 mb-8">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Our product is crafted with precision and designed for performance. 
            Every detail has been carefully considered to deliver the best possible experience.
          </p>
        </div>

        <div className="grid gap-6">
          {product.benefits?.slice(0, 7).map((benefit, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
              <div className="flex-shrink-0 p-3 bg-green-500 rounded-xl">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-2">
        {currentImage && (
          <div className="sticky top-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-200 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-2 bg-orange-200 rounded-3xl transform -rotate-2"></div>
              <img
                src={currentImage}
                alt={product.productName}
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96 transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
</section> */}



<ProductImages productImage={product.productImage}/>

<ResultsSection product={{ 
Result: product.Result,
productName: product.productName}}/>

<DemoCard calendlyUrl={product.calendlyUrl || ""}/>

<CustomerTestimonial customerTestimonials={product.customerTestimonials} />


{/* <section className="py-24 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
        The Results You Can Expect
      </h2>
      <p className="text-xl text-slate-500 max-w-3xl mx-auto">
        Real value, proven impact — discover how our ERP transforms businesses.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      <div className="p-8 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
        <h3 className="text-5xl font-bold text-orange-600 mb-2">40%</h3>
        <p className="text-slate-700">Faster Production Cycles</p>
      </div>
      <div className="p-8 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
        <h3 className="text-5xl font-bold text-orange-600 mb-2">30%</h3>
        <p className="text-slate-700">Reduced Operational Costs</p>
      </div>
      <div className="p-8 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
        <h3 className="text-5xl font-bold text-orange-600 mb-2">2X</h3>
        <p className="text-slate-700">Improved Inventory Accuracy</p>
      </div>
      <div className="p-8 rounded-2xl bg-orange-50 shadow hover:shadow-md transition">
        <h3 className="text-5xl font-bold text-orange-600 mb-2">500+</h3>
        <p className="text-slate-700">Businesses Trust Us</p>
      </div>
    </div>
  </div>
</section> */}

    {/* <section className="relative py-32 bg-white text-center overflow-hidden">
  <div className="container relative mx-auto px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
        Ready to Begin?
      </h2>
      <p className="text-xl md:text-2xl text-slate-600 mb-16 leading-relaxed">
        Take the next step towards transforming your business. 
        Our team is ready to help you succeed.
      </p>

      <div className="flex gap-6 justify-center flex-wrap">
    
        {product.calendlyUrl && (
          <a
            href={product.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-orange-500 text-orange-600 rounded-2xl font-bold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            💬 Talk to Expert
          </a>
        )}
      </div>
    </div>
  </div>
</section> */}


<FAQSection FAQ = {product.FAQ ?? []}/>

      </div>
      
      <Footer />
    </>
  );
};

export default ProductPage;