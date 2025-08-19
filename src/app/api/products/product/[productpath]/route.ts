import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET( _req: NextRequest,{ params }: { params: { productpath: string } }) {
  try {
    await dbConnect();

    const { productpath } = params;

    if (!productpath || typeof productpath !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid product path" },
        { status: 400 }
      );
    }

    const product = await Product.findOne({ productPath: productpath });

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (err: any) {
    console.error("Error in getProductByPath:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
