import { bearerAuth } from "hono/bearer-auth";
import verifyJWT from "../auth/verifyJWT";

export default function auth() {
    return bearerAuth({
        verifyToken: async (token, c) => {
            const payload = await verifyJWT(token);

            if (payload?.email) {
                c.set("userEmail", payload.email)
                return true
            }

            return false;
        },
    })
};
