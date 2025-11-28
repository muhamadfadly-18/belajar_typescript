import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello, World!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
