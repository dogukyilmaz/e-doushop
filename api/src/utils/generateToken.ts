import jwt, { Secret, SignOptions } from "jsonwebtoken";

// TODO: Access & Refresh token
const generateToken = (id: string) => {
  const secret: Secret = process.env.JWT_SECRET!;
  const options: SignOptions = {
    expiresIn: "7d",
  };
  return jwt.sign({ id }, secret, options);
};
export default generateToken;
