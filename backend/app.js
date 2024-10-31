import express from "express";
import cors from "cors";
import db from "./database/db.js";
import routes from "./routes/routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/blogs", routes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});