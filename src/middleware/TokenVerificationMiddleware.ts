import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export function authenticateToken(req: Request, res: Response, next: any) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null)
    return res.status(401).json({
      message: "Please provide the authorization token header!",
    });

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {
      if (err)
        return res.status(403).json({
          message: "The inserted token is not valid!",
        });
      // req.user = user;
      next();
    }
  );
}
