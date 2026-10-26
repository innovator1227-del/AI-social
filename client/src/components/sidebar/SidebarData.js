import {
  LayoutDashboard,
  Inbox,
  CheckCheck,
  Clock3,
  Tag,
  Settings,
  ShieldCheck,
} from "lucide-react";

export const sidebarData = [
  {
    title: "MAIN MENU",
    items: [
      {
        label: "Dashboard",
        path: "/",
        icon: LayoutDashboard,
      },
      {
        label: "All Notifications",
        path: "/notifications",
        icon: Inbox,
      },
      {
        label: "Important",
        path: "/important",
        icon: ShieldCheck,
      },
      {
        label: "Read",
        path: "/read",
        icon: CheckCheck,
      },
      {
        label: "Unread",
        path: "/unread",
        icon: Clock3,
      },
    ],
  },
  {
    title: "PREFERENCES",
    items: [
      {
        label: "Categories",
        path: "/categories",
        icon: Tag,
      },
      {
        label: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];
