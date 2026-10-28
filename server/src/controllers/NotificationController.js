import Notification from "../models/Notification.js";
import analyzeNotification from "../services/aiService.js";

// GET all notifications
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve notifications.",
    });
  }
};

// POST create notification
export const createNotification = async (req, res) => {
  try {
    const { title, message, platform } = req.body;

    if (
      typeof title !== "string" ||
      !title.trim() ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Title and message are required.",
      });
    }

    if (title.trim().length > 150 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        message: "Title or message exceeds the allowed length.",
      });
    }

    const validPlatforms = [
      "Facebook",
      "Instagram",
      "Telegram",
      "TikTok",
      "Other",
    ];

    const safePlatform = validPlatforms.includes(platform) ? platform : "Other";

    let analysis = null;

    try {
      analysis = await analyzeNotification({
        title: title.trim(),
        message: message.trim(),
        platform: safePlatform,
      });
    } catch (aiError) {
      // Log the failure on the server without exposing API details.
      console.error("AI analysis failed:", aiError.message);
    }

    const notification = await Notification.create({
      title: title.trim(),
      message: message.trim(),
      platform: safePlatform,

      // Use AI suggestions if available.
      // Otherwise use safe defaults or valid user-provided values.
      category: analysis?.category || "Other",
      priority: analysis?.priority || "Medium",
      aiSummary: analysis?.summary || "",
      aiProcessed: Boolean(analysis),

      isRead: false,
    });

    return res.status(201).json({
      success: true,
      message: "Notification created successfully.",
      data: notification,
    });
  } catch (error) {
    console.error("Create notification failed:", error.message);

    return res.status(500).json({
      success: false,
      message: "Failed to create notification.",
    });
  }
};

// PATCH mark notification as read
export const markNotificationAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true, runValidators: true },
    );

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: notification,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not update notification.",
    });
  }
};

// DELETE notification
export const deleteNotification = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndDelete(req.params.id);

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Notification deleted successfully.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Could not delete notification.",
    });
  }
};
