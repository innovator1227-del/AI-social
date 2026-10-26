import { Bell, Menu, Search } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Notification Center
          </h2>

          <p className="hidden text-xs text-slate-500 sm:block">
            Manage your digital notifications
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="hidden w-full max-w-sm items-center gap-3 rounded-xl border border-slate-200 px-4 py-2 md:flex">
        <Search size={18} className="text-slate-400" />

        <input
          type="text"
          placeholder="Search notifications..."
          className="w-full bg-transparent text-sm outline-none"
        />
      </div>

      {/* Right side */}
      <button
        className="relative rounded-xl p-3 text-slate-600 hover:bg-slate-100"
        aria-label="Notifications"
      >
        <Bell size={21} />

        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600" />
      </button>
    </header>
  );
};

export default Header;
