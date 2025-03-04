import { Hono } from 'hono'
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';

const app = new Hono().basePath('/api');

app.route("/auth", authRoutes);
app.route("/users", usersRoutes);

export default app;