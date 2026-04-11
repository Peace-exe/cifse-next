import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const GalleryImageSchema = new mongoose.Schema({
  public_id: { type: String, required: true },
  title: String,
  category: String,
  date: Date,
}, { timestamps: true });

const GalleryImage = mongoose.models.GalleryImage ||
  mongoose.model("GalleryImage", GalleryImageSchema);

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI!);

  // fetch all images from your cloudinary folder
  const result = await cloudinary.search
    .expression("folder:CIFSE")
    .sort_by("created_at", "desc")
    .max_results(100)
    .execute();

  const docs = result.resources.map((img: any) => ({
    public_id: img.public_id,
    title: img.filename,       // or customize
    category: "General",       // set default or parse from folder name
    date: img.created_at,
  }));

  await GalleryImage.insertMany(docs);
  console.log(`✓ Seeded ${docs.length} images`);
  await mongoose.disconnect();
}

seed();