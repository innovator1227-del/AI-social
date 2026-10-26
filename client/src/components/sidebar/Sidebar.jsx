import { Bell, Sparkles } from "lucide-react";
import { sidebarData } from "./SidebarData.js";
import SidebarItem from "./SidebarItem.jsx";

const Sidebar = ({ collapsed = false }) => {
  return (
    <aside
      className={`flex h-screen flex-col border-r border-slate-200
      bg-white transition-all duration-300
      ${collapsed ? "w-20" : "w-64"}`}
    >
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Bell size={22} />
        </div>

        {!collapsed && (
          <div>
            <h1 className="text-lg font-bold text-slate-900">NotifyAI</h1>

            <p className="text-xs text-slate-500">Smart notification center</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-6 overflow-y-auto p-4">
        {sidebarData.map((section) => (
          <div key={section.title}>
            {!collapsed && (
              <h2 className="mb-3 px-3 text-xs font-semibold tracking-wider text-slate-400">
                {section.title}
              </h2>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.label}
                  item={item}
                  collapsed={collapsed}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* AI information */}
      {!collapsed && (
        <div className="m-4 rounded-2xl bg-blue-50 p-4">
          <Sparkles size={20} className="mb-2 text-blue-600" />

          <h3 className="text-sm font-semibold text-slate-900">AI Assistant</h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Smarter notification organization is coming.
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
