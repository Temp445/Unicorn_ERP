import mongoose, { models, model } from 'mongoose';


const benefitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
});


const customerTestimonialSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  companyName: { type: String },
  description: { type: String },
});


const productSchema = new mongoose.Schema({
  mainImage: {
    type: [String],
    required: true,
  },
  productImage: {
    type: [String],
    default: [],
  },
  productName: {
    type: String,
    required: true,
  },
  productLink: {
    type: String,
  },
  calendlyUrl: {
    type: String,
  },
  productPath: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
  },
  description: { type: String },
  why_choose_des: { type: String },
  who_need_des: { type: String },
  category: { type: String },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
  benefits: [benefitSchema],
  customerTestimonials: [customerTestimonialSchema],
});

const Product =  models.Product || model("Product", productSchema);

export default Product;
