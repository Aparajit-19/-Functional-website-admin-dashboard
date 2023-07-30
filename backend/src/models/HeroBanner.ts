import mongoose, { Document } from "mongoose";

export interface HeroBannerContent {
  title: string;
  description: string;
  image: string;
}

export interface HeroBannerDocument extends Document, HeroBannerContent {}

const heroBannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const HeroBanner = mongoose.model<HeroBannerDocument>("HeroBanner", heroBannerSchema);
export default HeroBanner;
