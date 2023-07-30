import { Router, Request, Response } from "express";
import HeroBanner from "../models/HeroBanner";

const router = Router();

router.get("/hero-banner", async (req: Request, res: Response) => {
  try {
    const heroBannerContent = await HeroBanner.findOne();
    return res.json(heroBannerContent);
  } catch (error) {
    return res.status(500).json({ message: "Error retrieving Hero Banner content" });
  }
});

router.put("/hero-banner", async (req: Request, res: Response) => {
  const { title, description, image } = req.body;

  try {
    await HeroBanner.findOneAndUpdate({}, { title, description, image });
    return res.json({ message: "Hero Banner content updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error updating Hero Banner content" });
  }
});

export default router;
