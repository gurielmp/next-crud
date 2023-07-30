import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    nama: {type : String},
    stock: {type : Number},
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model("Product", productSchema)

export default Product;