"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // ✅ import router

const UploadProduct = () => {
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

  const [mainImages, setMainImages] = useState<File[]>([]);
  const [productImages, setProductImages] = useState<File[]>([]);
  const [benefits, setBenefits] = useState([{ title: "", description: "" }]);
  const [testimonials, setTestimonials] = useState([
    { clientName: "", companyName: "", description: "" },
  ]);

  const [loading, setLoading] = useState(false);

  const router = useRouter(); // ✅ create router instance

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "main" | "product"
  ) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    if (type === "main") setMainImages(files);
    else setProductImages(files);
  };

  // benefits
  const handleBenefitChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updated = [...benefits];
    updated[i][e.target.name as keyof typeof updated[0]] = e.target.value;
    setBenefits(updated);
  };
  const addBenefit = () =>
    setBenefits([...benefits, { title: "", description: "" }]);
  const removeBenefit = (i: number) =>
    setBenefits(benefits.filter((_, idx) => idx !== i));

  // testimonials
  const handleTestimonialChange = (
    i: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const updated = [...testimonials];
    updated[i][e.target.name as keyof typeof updated[0]] = e.target.value;
    setTestimonials(updated);
  };
  const addTestimonial = () =>
    setTestimonials([
      ...testimonials,
      { clientName: "", companyName: "", description: "" },
    ]);
  const removeTestimonial = (i: number) =>
    setTestimonials(testimonials.filter((_, idx) => idx !== i));

  // submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([k, v]) => data.append(k, v));

      mainImages.forEach((file) => data.append("mainImage", file));
      productImages.forEach((file) => data.append("productImage", file));

      data.append("benefits", JSON.stringify(benefits));
      data.append("customerTestimonials", JSON.stringify(testimonials));

      const res = await axios.post("/api/products", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product uploaded successfully!");
      console.log(res.data);

      // ✅ redirect to admin page after success
      router.push("/admin");

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Upload New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            {[
              "productName",
              "productPath",
              "productLink",
              "calendlyUrl",
              "category",
            ].map((field) => (
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

          <div>
            <label className="block font-semibold mb-1">Main Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(e, "main")}
            />
            <div className="flex gap-3 mt-2 flex-wrap">
              {mainImages.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Product Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(e, "product")}
            />
            <div className="flex gap-3 mt-2 flex-wrap">
              {productImages.map((file, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Benefits</h2>
            {benefits.map((b, i) => (
              <div
                key={i}
                className="border p-3 mb-3 rounded-lg space-y-2 bg-gray-50"
              >
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
                <button
                  type="button"
                  onClick={() => removeBenefit(i)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addBenefit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Benefit
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-2">Customer Testimonials</h2>
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="border p-3 mb-3 rounded-lg space-y-2 bg-gray-50"
              >
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
                <button
                  type="button"
                  onClick={() => removeTestimonial(i)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addTestimonial}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Testimonial
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white px-6 py-2 rounded font-semibold disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
