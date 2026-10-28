import express from "express";
import {
  createNotification,
  deleteNotification,
  getNotifications,
  markNotificationAsRead,
} from "../controllers/NotificationController.js";

const router = express.Router();

router.get("/", getNotifications);
router.post("/", createNotification);
router.patch("/:id/read", markNotificationAsRead);

router.delete("/:id", deleteNotification);

export default router;
