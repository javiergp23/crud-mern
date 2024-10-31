import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.URL_DB;
mongoose.connect(url);

const db = mongoose.connection;
db.on('open', () => {console.log("Connected to MongoDB")});
db.on('error', (err) => {"Error connecting to MongoDB"})

export default db;