import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";
import { Params } from "next/dist/server/request/params";

export async function GET(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  try {
    await dbConnect();

      const productpath = params.productpath as string;

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
