import express from "express";
import peopleRoutes from './routes/peopleRouter';
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

//API CONFIG
app.use(express.json());

//ROUTING
app.use('/api/people', peopleRoutes);

//Global error handler
app.use(errorHandler);

export default app;