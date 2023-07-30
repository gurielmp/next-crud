import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/product";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {nama, stock} = await request.json();
  await connectMongoDB();
  await Product.create({nama, stock});
  return NextResponse.json({message: "Product Created"}, {status:201})
}