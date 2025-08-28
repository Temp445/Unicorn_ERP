import React from "react";
import { Target, ArrowBigRightDash } from "lucide-react";

interface ProductProps {
  product: {
    productName: string;
    why_choose_des?: string;
  };
}

const WhyChoose = ({ product }: ProductProps) => {
  return (
    <section className="pt-10 pb-10 md:pb-20 container mx-auto">
      <div className="container mx-auto px-2 md:px-6">
        {product.why_choose_des && (
          <div className="bg-white rounded md:rounded-3xl md:shadow-xl border border-orange-200 overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8 md:py-5 bg-gradient-to-r from-orange-100 to-orange-50">
              <div className="p-4 bg-orange-200 rounded-full hidden lg:block">
                <Target className="w-10 h-10 text-orange-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl font-extrabold text-orange-700 mb-3">
                  Why Choose {product.productName}?
                </h2>
                <div className="w-52 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            <div className="p-4 md:p-12 space-y-4 text-slate-700 text-base md:text-xl">
              {product.why_choose_des
                ?.split(".")
                .map((point, index) =>
                  point.trim() ? (
                    <div
                      key={index}
                      className="flex items-start gap-4 hover:bg-orange-50 p-3 rounded-lg transition-colors duration-300"
                    >
                      <ArrowBigRightDash className="mt-1 text-orange-500 w-6 h-6 flex-shrink-0" />
                      <p>{point.trim()}.</p>
                    </div>
                  ) : null
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChoose;
