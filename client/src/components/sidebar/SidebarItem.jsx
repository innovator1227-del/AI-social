import { NavLink } from "react-router-dom";

const SidebarItem = ({ item, collapsed = false }) => {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      title={collapsed ? item.label : undefined}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium
        transition-colors duration-200
        ${
          isActive
            ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      <Icon size={20} className="shrink-0" />

      {!collapsed && <span>{item.label}</span>}
    </NavLink>
  );
};

export default SidebarItem;
