import mongoose, { Document } from "mongoose";

export interface ContactDetailsContent {
  address: string;
  email: string;
  phone: string;
}

export interface ContactDetailsDocument extends Document, ContactDetailsContent {}

const contactDetailsSchema = new mongoose.Schema({
  address: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

const ContactDetails = mongoose.model<ContactDetailsDocument>("ContactDetails", contactDetailsSchema);
export default ContactDetails;
