import { Hono } from 'hono'
import authRoutes from './routes/authRoutes';
import usersRoutes from './routes/usersRoutes';
import auth from './middleware/auth';

const app = new Hono().basePath('/api');

app.route("/auth", authRoutes);
app.use(auth()); // protects all next routes below
app.route("/users", usersRoutes);

export default app;