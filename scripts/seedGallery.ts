import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import GalleryImage from "../models/GalleryImageId";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" }); 

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!);

  const result = await cloudinary.search
    .expression("folder:CIFSE")
    .sort_by("created_at", "desc")
    .max_results(100)
    .execute();

  const docs = result.resources.map((img: any) => ({
    public_id: img.public_id,
    title: img.filename,
    
    date: img.created_at,
  }));

  await GalleryImage.insertMany(docs);
  console.log(`✓ Seeded ${docs.length} images`);
  await mongoose.disconnect();
}

seed();