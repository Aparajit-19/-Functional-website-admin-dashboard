import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes";
import heroBannerRoutes from "./routes/heroBannerRoutes";
import contactDetailsRoutes from "./routes/contactDetailsRoutes";

const app = express();


app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api", heroBannerRoutes);
app.use("/api", contactDetailsRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;
