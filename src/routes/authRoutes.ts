import { Hono } from "hono";

const authRoutes = new Hono();

authRoutes.post(
    '/sign-in',
    (c) => c.body("sign in route")
);

authRoutes.post(
    '/sign-up',
    (c) => c.body("sign up route")
);

export default authRoutes