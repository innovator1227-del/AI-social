import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    platform: {
      type: String,
      enum: ["Facebook", "Instagram", "Telegram", "TikTok", "Slack", "Other"],
      default: "Other",
    },
    category: {
      type: String,
      enum: ["Work", "Important", "Social", "Promotions", "Other"],
      default: "Other",
    },
    priority: {
      type: String,
      enum: ["High", "Medium", "Low"],
      default: "Medium",
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const notification = mongoose.model("notification", notificationSchema);

export default notification;
