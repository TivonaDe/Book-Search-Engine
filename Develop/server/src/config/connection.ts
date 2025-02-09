import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://devonacanada1:Password@cluster0.ye3ew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

export default mongoose.connection
