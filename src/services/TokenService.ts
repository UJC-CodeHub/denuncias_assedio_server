const jwt = require("jsonwebtoken");

export function generateAccessToken(username: string) {
  return jwt.sign({ name: username }, process.env.TOKEN_SECRET, {
    expiresIn: "48h",
  });
}
