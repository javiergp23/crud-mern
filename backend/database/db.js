import mongoose from "mongoose";
const url = 'mongodb://localhost:27017/mern';
mongoose.connect(url);

const db = mongoose.connection;
db.on('open', () => {console.log("Connected to MongoDB")});
db.on('error', (err) => {"Error connecting to MongoDB"})

export default db;