"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Quote, Star, Play, Shield, Zap, Target, ChevronLeft, ChevronRight, FileText,ArrowBigRightDash } from "lucide-react";

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
  benefits?: { title: string; description?: string }[];
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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


//   const nextTestimonial = () => {
//     if (product?.customerTestimonials) {
//       setCurrentTestimonialIndex((prev) => (prev + 1) % product.customerTestimonials.length);
//     }
//   };

//   const prevTestimonial = () => {
//     if (product?.customerTestimonials) {
//       setCurrentTestimonialIndex((prev) => (prev - 1 + product.customerTestimonials.length) % product.customerTestimonials.length);
//     }
//   };

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
        <div className="text-8xl mb-6">404</div>
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <p className="text-slate-400 text-lg">This product doesn't exist in our catalog.</p>
      </div>
    );
  }

  const allImages = [...(product.mainImage || []), ...(product.productImage || [])];
  const currentImage = allImages[currentImageIndex];

  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-slate-50 container mx-auto">
        
 <section className="relative h-fit flex items-center overflow-hidden">

  <div className="absolute inset-0 bg-orange-50"></div>

  <div className="relative z-10 w-full lg:w-1/2 p-12 lg:p-20">
    <div className="max-w-xl space-y-8">

      <h1 className="text-4xl  2xl:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
        {product.productName}
      </h1>

      <p className="text-lg 2xl:text-xl mb-8 text-gray-800">
        {product.description}
      </p>

      <div className="flex flex-wrap gap-4 pt-4 animate-fadeInUp delay-300">
        {product.productLink && (
          <a
            href={product.productLink}
          className="px-6 py-3 flex gap-2 bg-white border rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Play className="w-6 h-6" />
            <span>Watch Demo</span>
          </a>
        )}
        {product.calendlyUrl && (
          <a
            href={product.calendlyUrl}
          className="px-6 py-3 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule Demo
          </a>
        )}
      </div>

    </div>
  </div>
  
  {product.mainImage?.[0] && (
  <div className="relative w-full lg:w-1/2 h-[500px] 2xl:h-[600px] [clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)] shadow-2xl shadow-amber-500">
      <img
        src={product.mainImage[0]}
        alt={product.productName}
        className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-[2500ms] ease-out"
      />
   

    </div>
  )}
</section>


        {product.why_choose_des && (
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
                        <h2 className="text-3xl font-black text-slate-900">Why Choose Us</h2>
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


            {/* card */}
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
        )}


         <div className="p-5">
                {product.who_need_des && (
                  <div className="bg-white p-12 rounded shadow-2xl border border-slate-200 hover:shadow-3xl transition-all duration-500">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-4 bg-orange-100 rounded-2xl">
                        <Target className="w-10 h-10 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-black text-slate-900">Perfect For</h2>
                        <div className="w-16 h-1 bg-orange-500 mt-2 rounded-full"></div>
                      </div>
                    </div>
                  <div className="text-slate-600 leading-loose text-lg">
  {product.who_need_des?.split('.').map((point, index) => 
    point.trim() ? <p key={index} className="mb-2 flex gap-2"><ArrowBigRightDash className="mt-1.5 text-orange-500" /> {point.trim()}</p> : null
  )}
</div>
</div>
)}
</div>

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
</section>


        {/* Benefits - Bento Grid Layout */}
        {product.benefits && product.benefits.length > 0 && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-black text-slate-900 mb-6">
                  Powerful Features
                </h2>
                <p className="text-2xl text-slate-500 max-w-3xl mx-auto">
                  Everything you need to succeed, designed with your goals in mind
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`group p-10 rounded-3xl border-2 border-slate-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                      index % 3 === 0 ? 'bg-blue-50' : 
                      index % 3 === 1 ? 'bg-orange-50' : 'bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl ${
                        index % 3 === 0 ? 'bg-blue-500' : 
                        index % 3 === 1 ? 'bg-orange-500' : 'bg-slate-700'
                      }`}>
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials - Carousel Style */}
        {product.customerTestimonials && product.customerTestimonials.length > 0 && (
          <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-6xl font-black text-slate-900 mb-6">
                  Success Stories
                </h2>
                <p className="text-2xl text-slate-500 max-w-3xl mx-auto">
                  Real results from real customers who transformed their business
                </p>
              </div>
              
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white p-16 rounded-3xl shadow-2xl border border-slate-200">
                  <div className="text-center">
                    <Quote className="w-16 h-16 text-blue-500 mx-auto mb-8" />
                    
                    <p className="text-3xl text-slate-700 italic leading-relaxed mb-12 font-light">
                      "{product.customerTestimonials[currentTestimonialIndex].description}"
                    </p>
                    
                    <div className="flex items-center justify-center gap-6">
                      <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        {product.customerTestimonials[currentTestimonialIndex].clientName.charAt(0)}
                      </div>
                      <div className="text-left">
                        <p className="text-2xl font-bold text-slate-900">
                          {product.customerTestimonials[currentTestimonialIndex].clientName}
                        </p>
                        {product.customerTestimonials[currentTestimonialIndex].companyName && (
                          <p className="text-lg text-slate-500">
                            {product.customerTestimonials[currentTestimonialIndex].companyName}
                          </p>
                        )}
                        <div className="flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {product.customerTestimonials.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6 text-slate-600" />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6 text-slate-600" />
                    </button>
                    
                    <div className="flex justify-center gap-3 mt-8">
                      {product.customerTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentTestimonialIndex(index)}
                          className={`w-4 h-4 rounded-full transition-all ${
                            currentTestimonialIndex === index ? 'bg-blue-500' : 'bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Product Showcase - Side by Side */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              
              {/* Product Details */}
              <div className="lg:col-span-3 space-y-12">
                <div>
                  <h2 className="text-5xl font-black text-slate-900 mb-8">
                    Experience Excellence
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Our product is crafted with precision and designed for performance. 
                    Every detail has been carefully considered to deliver the best possible experience.
                  </p>
                </div>

                {/* Feature Highlights */}
                <div className="grid gap-6">
                  {product.benefits?.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-6 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-colors">
                      <div className="flex-shrink-0 p-3 bg-blue-500 rounded-xl">
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

              {/* Image Showcase */}
              <div className="lg:col-span-2">
                {currentImage && (
                  <div className="relative">
                    <div className="absolute -inset-4 bg-blue-200 rounded-3xl transform rotate-3"></div>
                    <div className="absolute -inset-2 bg-orange-200 rounded-3xl transform -rotate-2"></div>
                    <img
                      src={currentImage}
                      alt={product.productName}
                      className="relative rounded-3xl shadow-2xl w-full object-cover h-96 transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* All Benefits - Cards Layout */}
        {product.benefits && product.benefits.length > 3 && (
          <section className="py-24 bg-slate-100">
            <div className="container mx-auto px-6">
              <h2 className="text-5xl font-black text-center text-slate-900 mb-20">
                Complete Feature Set
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {product.benefits.slice(3).map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-slate-200"
                  >
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA - Full Width */}
        <section className="py-32 bg-slate-900 text-white text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-6xl font-black mb-8">
                Ready to Begin?
              </h2>
              <p className="text-2xl text-slate-300 mb-16 leading-relaxed">
                Take the next step towards transforming your business. 
                Our team is ready to help you succeed.
              </p>
              
              <div className="flex gap-8 justify-center flex-wrap">
                {product.productLink && (
                  <a
                    href={product.productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-16 py-6 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-2xl"
                  >
                    Get Started Today
                  </a>
                )}
                {product.calendlyUrl && (
                  <a
                    href={product.calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-16 py-6 border-2 border-white text-white rounded-2xl font-bold text-xl hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    Talk to Expert
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default ProductPage;