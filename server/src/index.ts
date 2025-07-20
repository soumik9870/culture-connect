import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

import userRoutes from './routes/userRoutes';
import cultureRoutes from './routes/cultureRoutes';
import eventRoutes from './routes/eventRoutes';
import contributionRoutes from './routes/contributionRoutes'
import messageRoutes from './routes/messageRoutes';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/cultures', cultureRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/contributions', contributionRoutes);
app.use('/api/messages', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server is running on port', PORT);
})