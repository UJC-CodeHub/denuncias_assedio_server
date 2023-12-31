import express, { Request, Response } from "express";
import { router as AuthRoutes } from "../routes/AuthRoutes";

const app = express();
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API is health!",
  });
});
app.use("/api/auth", AuthRoutes);

export { app };
