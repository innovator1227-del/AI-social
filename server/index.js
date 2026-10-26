import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "dotenv/config";
import notificationRoutes from "./routes/notificationRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/telegram", (req, res) => {
  res.json({
    success: true,
    message: "Social Notification AI API is running!",
  });
});

app.use("/api/notifications", notificationRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
