import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import categoryRoutes from './routes/categoryRoutes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/categorydb');

app.listen(5000, () => console.log('Server running'));


export default app;