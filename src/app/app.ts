import express, { Request, Response } from "express";

const app = express();

app.get("/api/health", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API is health!",
  });
});

export { app };
