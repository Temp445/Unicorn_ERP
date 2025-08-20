import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { writeFile, mkdir, unlink } from "fs/promises";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import fs from "fs";


// Get product by ID
// export async function GET( req: NextRequest,  { params }: { params: Record<string, string> } ) {
//   try {
//     await dbConnect();
//     const { id } = params;

//     const product = await Product.findById(id);
//     if (!product) {
//       return NextResponse.json(
//         { success: false, message: "Product not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(product, { status: 200 });
//   } catch (err: any) {
//     console.error("Fetch error:", err);
//     return NextResponse.json(
//       { success: false, message: err.message || "Failed to fetch product" },
//       { status: 500 }
//     );
//   }
// }


export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const url = new URL(req.url);
    const pathname = url.pathname; 
    const parts = pathname.split('/');
    const id = parts[parts.length - 1];

    if (!id) {
      return NextResponse.json({ success: false, message: "Product ID required" }, { status: 400 });
    }

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product, { status: 200 });
  } catch (err: any) {
    console.error("Fetch error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to fetch product" },
      { status: 500 }
    );
  }
}


//update
export async function PUT(req: NextRequest) {
  try {
    await dbConnect();
    const formData = await req.formData();
    const url = new URL(req.url);
    const parts = url.pathname.split('/');
    const id = parts[parts.length - 1];

    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    product.productName = (formData.get("productName") as string) || product.productName;
    product.productPath = (formData.get("productPath") as string) || product.productPath;
    product.productLink = (formData.get("productLink") as string) || product.productLink;
    product.calendlyUrl = (formData.get("calendlyUrl") as string) || product.calendlyUrl;
    product.description = (formData.get("description") as string) || product.description;
    product.why_choose_des =
      (formData.get("why_choose_des") as string) || product.why_choose_des;
    product.who_need_des =
      (formData.get("who_need_des") as string) || product.who_need_des;
    product.category = (formData.get("category") as string) || product.category;

    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    const newMainImages: string[] = [];
    for (const file of formData.getAll("mainImage")) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);
        await writeFile(filePath, buffer);
        newMainImages.push(`/uploads/${fileName}`);
      }
    }
    if (newMainImages.length > 0) {
      if (product.mainImage && Array.isArray(product.mainImage)) {
        for (const oldPath of product.mainImage) {
          const localPath = path.join(process.cwd(), "public", oldPath);
          try {
            await unlink(localPath);
          } catch (err) {
            console.warn(err);
          }
        }
      }
      product.mainImage = newMainImages;
    }
    const newProductImages: string[] = [];
    for (const file of formData.getAll("productImage")) {
      if (file instanceof File) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadDir, fileName);
        await writeFile(filePath, buffer);
        newProductImages.push(`/uploads/${fileName}`);
      }
    }
    if (newProductImages.length > 0) {
      if (product.productImage && Array.isArray(product.productImage)) {
        for (const oldPath of product.productImage) {
          const localPath = path.join(process.cwd(), "public", oldPath);
          try {
            await unlink(localPath);
          } catch (err) {
            console.warn(err);
          }
        }
      }
      product.productImage = newProductImages;
    }

      try {
      product.whatis = JSON.parse((formData.get("whatis") as string) || "[]");
    } catch {
      product.whatis = product.whatis || [];
    }

    try {
      product.benefits = JSON.parse((formData.get("benefits") as string) || "[]");
    } catch {
      product.benefits = product.benefits || [];
    }
    try {
      product.FAQ = JSON.parse((formData.get("FAQ") as string) || "[]");
    } catch {
      product.FAQ = product.FAQ || [];
    }
    try {
      product.Result = JSON.parse((formData.get("Result") as string) || "[]");
    } catch {
      product.Result = product.Result || [];
    }

    try {
      product.customerTestimonials = JSON.parse(
        (formData.get("customerTestimonials") as string) || "[]"
      );
    } catch {
      product.customerTestimonials = product.customerTestimonials || [];
    }

    await product.save();

    return NextResponse.json({ success: true, data: product }, { status: 200 });
  } catch (err: any) {
    console.error("Update error:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Failed to update product" },
      { status: 500 }
    );
  }
}


export async function DELETE( req: NextRequest) {
  try {
    await dbConnect();
      const url = new URL(req.url);
    const parts = url.pathname.split('/');
    const id = parts[parts.length - 1];


    if (!id) {
      return NextResponse.json(
        { success: false, message: "Product ID is required" },
        { status: 400 }
      );
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    const deleteFile = (filePath: string) => {
      if (!filePath) return;

      const fullPath = path.join(process.cwd(), "public", filePath);

      fs.unlink(fullPath, (err) => {
        if (err && err.code !== "ENOENT") {
          console.error(`Failed to delete file ${filePath}:`, err);
        }
      });
    };
    if (Array.isArray(product.mainImage)) {
      product.mainImage.forEach(deleteFile);
    } else {
      deleteFile(product.mainImage);
    }

    if (Array.isArray(product.productImage)) {
      product.productImage.forEach(deleteFile);
    } else {
      deleteFile(product.productImage);
    }

    return NextResponse.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error: any) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

