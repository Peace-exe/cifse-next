import mongoose from "mongoose";

const GalleryImageIdSchema = new mongoose.Schema({
  public_id: { type: String, required: true },
  title: String,
  
  date: Date,
}, { timestamps: true });

const GalleryImageId = mongoose.models.GalleryImage ||
  mongoose.model("GalleryImage", GalleryImageIdSchema);

export default GalleryImageId;