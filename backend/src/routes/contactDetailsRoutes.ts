import { Router, Request, Response } from "express";
import ContactDetails from "../models/ContactDetails";

const router = Router();

router.get("/contact-details", async (req: Request, res: Response) => {
  try {
    const contactDetails = await ContactDetails.findOne();
    return res.json(contactDetails);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving Contact Details" });
  }
});

router.put("/contact-details", async (req: Request, res: Response) => {
  const { address, email, phone } = req.body;

  try {
    await ContactDetails.findOneAndUpdate({}, { address, email, phone });
    return res.json({ message: "Contact Details updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating Contact Details" });
  }
});

export default router;
