import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

// GET all products
export async function GET() {
  try {
    await dbConnect();
    const products = await Product.find().sort({ uploadedAt: -1 });

    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

//create
export async function POST(req: Request) {
  try {
    await dbConnect();

    const formData = await req.formData();

    const productName = formData.get("productName") as string;
    const productPath = formData.get("productPath") as string;

    if (!productName || !productPath) {
      return NextResponse.json(
        { success: false, message: "Product name and product path are required" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

  
    const mainImage: string[] = [];
    for (const file of formData.getAll("mainImage")) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);
        await writeFile(filePath, buffer);
        mainImage.push(`/uploads/${fileName}`);
      }
    }

    const productImage: string[] = [];
    for (const file of formData.getAll("productImage")) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);
        await writeFile(filePath, buffer);
        productImage.push(`/uploads/${fileName}`);
      }
    }

    let benefits = [];
    let customerTestimonials = [];
    try {
      benefits = JSON.parse((formData.get("benefits") as string) || "[]");
    } catch {}
    try {
      customerTestimonials = JSON.parse(
        (formData.get("customerTestimonials") as string) || "[]"
      );
    } catch {}

    const product = new Product({
      productName,
      productPath,
      productLink: (formData.get("productLink") as string) || "",
      calendlyUrl: (formData.get("calendlyUrl") as string) || "",
      description: (formData.get("description") as string) || "",
      why_choose_des: (formData.get("why_choose_des") as string) || "",
      who_need_des: (formData.get("who_need_des") as string) || "",
      category: (formData.get("category") as string) || "",
      mainImage,
      productImage,
      benefits,
      customerTestimonials,
    });

    await product.save();

    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to save product" },
      { status: 500 }
    );
  }
}
