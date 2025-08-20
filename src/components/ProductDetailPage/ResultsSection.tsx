import React from "react";

interface ResultItem {
  title: string;
  description?: string;
}

interface ProductProps {
  product: {
    Result?: ResultItem[];
    productName: string;
  };
}

const defaultResults: ResultItem[] = [
  { title: "40%", description: "Faster Production Cycles" },
  { title: "30%", description: "Reduced Operational Costs" },
  { title: "2X", description: "Improved Inventory Accuracy" },
  { title: "500+", description: "Businesses Trust Us" },
];

const ResultsSection = ({ product }: ProductProps) => {
  const resultsToRender =
    product.Result && product.Result.length > 0 ? product.Result : defaultResults;

  return (
    <section className=" py-10 md:py-24 bg-gradient-to-r from-orange-50 to-orange-100 mt-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-700 mb-4">
          The Results You Can Expect
        </h2>
        <p className="text-base md:text-xl text-orange-900/80 max-w-3xl mx-auto mb-16">
          Real value, proven impact — discover how our{" "}
          <span className="font-semibold">{product.productName}</span> transforms businesses.
        </p>

        <div className="grid gap-10 justify-center auto-rows-auto grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {resultsToRender.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl md:text-4xl font-extrabold text-orange-600 mb-4">
                {item.title}
              </h3>

              {item.description && (
                <p className="text-slate-700 text-md md:text-lg">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
