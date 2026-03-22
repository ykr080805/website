import { Link, useLocation } from 'react-router-dom';
import { Home, Heart, ListChecks, Image as ImageIcon, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Dashboard', icon: Home },
  { path: '/qualities', label: '100 Reasons', icon: Heart },
  { path: '/review', label: 'The Verdict', icon: ListChecks },
  { path: '/gallery', label: 'Memories', icon: ImageIcon },
  { path: '/surprise', label: 'For You', icon: Gift },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen sticky left-0 top-0 bg-white/80 backdrop-blur-xl border-r border-rose-100 hidden md:flex flex-col px-6 py-10 shadow-sm z-50">
      <div className="mb-14 px-2">
        <h2 className="text-2xl font-serif font-bold text-slate-800 tracking-tight">
          My <span className="text-rose-500 italic">Love</span>
        </h2>
        <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-2">Gift Portal v2.0</p>
      </div>

      <nav className="flex-1 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link key={item.path} to={item.path} className="block relative group">
              {isActive && (
                <motion.div
                  layoutId="activeSidebarTab"
                  className="absolute inset-0 bg-rose-50 border border-rose-100 rounded-2xl"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <div className={`relative px-4 py-3.5 flex items-center space-x-4 rounded-2xl transition-colors duration-200 z-10 ${isActive ? 'text-rose-600 font-semibold' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/80 font-medium'}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5px] text-rose-500' : 'stroke-[2px] group-hover:text-rose-400 transition-colors'}`} />
                <span className="tracking-wide">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-100 to-pink-50 flex items-center justify-center mx-auto mb-4 shadow-sm border border-rose-100/50">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
        </div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Made with love</p>
      </div>
    </aside>
  );
};
export default Sidebar;
