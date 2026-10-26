import express from "express";
import Notification from "../models/Notification.js";

const router = express.Router();

// GET: Retrieve all notifications
router.get("/", async (req, res) => {
  try {
    const notifications = await Notification.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// POST: Create a notification
router.post("/", async (req, res) => {
  try {
    const { title, message, platform, category, priority } = req.body;

    const notification = await Notification.create({
      title,
      message,
      platform,
      category,
      priority,
    });

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
