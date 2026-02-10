import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import bfhlRoutes from "./routes/bfhl.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(helmet());

app.use("/", bfhlRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({
    is_success: false,
    official_email: process.env.OFFICIAL_EMAIL,
    error: "Internal Server Error"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
