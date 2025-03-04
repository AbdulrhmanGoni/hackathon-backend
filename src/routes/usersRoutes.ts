import { Hono } from "hono";

const usersRoutes = new Hono();

usersRoutes.get('/', (c) => c.body("user data"));

export default usersRoutes