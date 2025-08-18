"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

const ProductUpdate = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    productName: "",
    productLink: "",
    calendlyUrl: "",
    productPath: "",
    description: "",
    why_choose_des: "",
    who_need_des: "",
    category: "",
  });

  const [mainImage, setMainImage] = useState<File | undefined>(undefined);
  const [productImage, setProductImage] = useState<File[]>([]);

  const [existingMainImage, setExistingMainImage] = useState<string | undefined>(undefined);
  const [existingProductImage, setExistingProductImage] = useState<string[]>([]);

  const [benefits, setBenefits] = useState([{ title: "", description: "" }]);
  const [testimonials, setTestimonials] = useState([
    { clientName: "", companyName: "", description: "" },
  ]);

  const [loading, setLoading] = useState(false);
  const mainInputRef = useRef<HTMLInputElement | null>(null);
  const productInputRef = useRef<HTMLInputElement | null>(null);

  // Fetch product by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/api/products/${id}`);
        const product = res.data;

        setFormData({
          productName: product.productName || "",
          productLink: product.productLink || "",
          calendlyUrl: product.calendlyUrl || "",
          productPath: product.productPath || "",
          description: product.description || "",
          why_choose_des: product.why_choose_des || "",
          who_need_des: product.who_need_des || "",
          category: product.category || "",
        });

        setBenefits(product.benefits?.length ? product.benefits : [{ title: "", description: "" }]);
        setTestimonials(
          product.customerTestimonials?.length
            ? product.customerTestimonials
            : [{ clientName: "", companyName: "", description: "" }]
        );

        setExistingMainImage(product.mainImage?.[0] || null);
        setExistingProductImage(product.productImage || []);
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };
    fetchProduct();
  }, [id]);

  // Input change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // File input handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "main" | "product") => {
    if (!e.target.files) return;
    if (type === "main") {
      const file = e.target.files[0];
      setMainImage(file);
      setExistingMainImage(URL.createObjectURL(file));
    } else {
      const files = Array.from(e.target.files);
      setProductImage(files);
      setExistingProductImage(files.map((f) => URL.createObjectURL(f)));
    }
  };

  // Benefits
  const handleBenefitChange = (i: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updated = [...benefits];
    updated[i][e.target.name as keyof typeof updated[0]] = e.target.value;
    setBenefits(updated);
  };
  const addBenefit = () => setBenefits([...benefits, { title: "", description: "" }]);
  const removeBenefit = (i: number) => setBenefits(benefits.filter((_, idx) => idx !== i));

  // Testimonials
  const handleTestimonialChange = (i: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updated = [...testimonials];
    updated[i][e.target.name as keyof typeof updated[0]] = e.target.value;
    setTestimonials(updated);
  };
  const addTestimonial = () =>
    setTestimonials([...testimonials, { clientName: "", companyName: "", description: "" }]);
  const removeTestimonial = (i: number) => setTestimonials(testimonials.filter((_, idx) => idx !== i));

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));

      if (mainImage) data.append("mainImage", mainImage);
      productImage.forEach((file) => data.append("productImage", file));

      data.append("benefits", JSON.stringify(benefits));
      data.append("customerTestimonials", JSON.stringify(testimonials));

      await axios.put(`/api/products/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Product updated successfully!");
      router.push("/products");
    } catch (err) {
      console.error(err);
      alert("❌ Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6">Update Product</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Fields */}
        <div className="grid grid-cols-2 gap-4">
          {["productName", "productPath", "productLink", "calendlyUrl", "category"].map((field) => (
            <div key={field}>
              <label className="block font-semibold capitalize mb-1">
                {field}
                {(field === "productName" || field === "productPath") && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required={field === "productName" || field === "productPath"}
              />
            </div>
          ))}
        </div>

        {/* Textareas */}
        {["description", "why_choose_des", "who_need_des"].map((field) => (
          <div key={field}>
            <label className="block font-semibold capitalize mb-1">
              {field.replace(/_/g, " ")}
            </label>
            <textarea
              name={field}
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        ))}

        {/* Images */}
        <div>
          <label className="block font-semibold mb-2">Main Image</label>
    
            <img
              src={existingMainImage}
              alt="main"
              className="w-32 h-32 object-cover rounded border cursor-pointer"
              onClick={() => mainInputRef.current?.click()}
            />
        
          <input
            type="file"
            accept="image/*"
            ref={mainInputRef}
            className="hidden"
            onChange={(e) => handleFileChange(e, "main")}
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Product Images</label>
          <div className="flex flex-wrap gap-3">
            {existingProductImage.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`product-${i}`}
                className="w-32 h-32 object-cover rounded border cursor-pointer"
              />
            ))}
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            ref={productInputRef}
            className="mt-2"
            onChange={(e) => handleFileChange(e, "product")}
          />
        </div>

        {/* Benefits */}
        <div>
          <h2 className="text-xl font-bold mb-2">Benefits</h2>
          {benefits.map((b, i) => (
            <div key={i} className="border p-3 mb-3 rounded-lg space-y-2 bg-gray-50">
              <input
                type="text"
                name="title"
                value={b.title}
                placeholder="Title"
                onChange={(e) => handleBenefitChange(i, e)}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                value={b.description}
                placeholder="Description"
                onChange={(e) => handleBenefitChange(i, e)}
                className="w-full border p-2 rounded"
              />
              <button type="button" onClick={() => removeBenefit(i)} className="text-red-600 text-sm">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addBenefit} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Benefit
          </button>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-xl font-bold mb-2">Customer Testimonials</h2>
          {testimonials.map((t, i) => (
            <div key={i} className="border p-3 mb-3 rounded-lg space-y-2 bg-gray-50">
              <input
                type="text"
                name="clientName"
                value={t.clientName}
                placeholder="Client Name"
                onChange={(e) => handleTestimonialChange(i, e)}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="companyName"
                value={t.companyName}
                placeholder="Company"
                onChange={(e) => handleTestimonialChange(i, e)}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="description"
                value={t.description}
                placeholder="Feedback"
                onChange={(e) => handleTestimonialChange(i, e)}
                className="w-full border p-2 rounded"
              />
              <button type="button" onClick={() => removeTestimonial(i)} className="text-red-600 text-sm">
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={addTestimonial} className="bg-blue-500 text-white px-4 py-2 rounded">
            + Add Testimonial
          </button>
        </div>

  
        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
}

export default ProductUpdate