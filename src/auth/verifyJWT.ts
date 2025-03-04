import { jwtVerify } from "jose";
import { signatureAlgorithm } from "../constants/auth";

export default async function verifyJWT(token: string) {
  try {
    const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
    const { payload } = await jwtVerify(token, secret,
      { algorithms: [signatureAlgorithm] }
    );
    return payload;
  } catch {
    return null;
  }
}
