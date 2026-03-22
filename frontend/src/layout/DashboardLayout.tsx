import { Outlet, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

const FallingPetals = () => {
  const petals = useMemo(() => {
    return [...Array(35)].map((_, i) => {
      const size = Math.random() * 15 + 12; // 12px to 27px
      const isForeground = Math.random() > 0.8;
      const blur = isForeground ? 'blur-[2px]' : Math.random() > 0.6 ? 'blur-[1px]' : '';
      const opacityMax = isForeground ? 0.9 : 0.4 + Math.random() * 0.3;
      const startX = Math.random() * 100;
      const sway = (Math.random() - 0.5) * 20; // Sway left/right
      
      const colors = [
        'from-pink-300/70 to-rose-300/50',
        'from-pink-200/60 to-pink-300/40',
        'from-rose-400/60 to-pink-400/40',
        'from-white/80 to-pink-100/50' 
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      return {
        id: i,
        size,
        blur,
        opacityMax,
        startX,
        sway,
        color,
        duration: 12 + Math.random() * 18,
        delay: -(Math.random() * 25), // Negative delay for instant screen fill!
        rotationDuration: 5 + Math.random() * 8
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ perspective: "1000px" }}>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "-10vh", x: `${p.startX}vw`, opacity: 0 }}
          animate={{ 
            y: "110vh", 
            x: [`${p.startX}vw`, `${p.startX + p.sway}vw`, `${p.startX - p.sway}vw`, `${p.startX}vw`],
            opacity: [0, p.opacityMax, p.opacityMax, 0],
            rotateZ: [0, 180, 360],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360]
          }}
          transition={{ 
            y: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" },
            x: { duration: p.duration * 1.5, repeat: Infinity, delay: p.delay, ease: "easeInOut" },
            opacity: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" },
            rotateZ: { duration: p.rotationDuration, repeat: Infinity, delay: p.delay, ease: "linear" },
            rotateX: { duration: p.rotationDuration * 1.2, repeat: Infinity, delay: p.delay, ease: "linear" },
            rotateY: { duration: p.rotationDuration * 1.5, repeat: Infinity, delay: p.delay, ease: "linear" }
          }}
          className={`absolute top-0 rounded-tr-[25px] rounded-bl-[25px] bg-gradient-to-br ${p.color} ${p.blur} shadow-sm shadow-pink-200/20`}
          style={{ width: p.size, height: p.size }}
        />
      ))}
    </div>
  );
};

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/qualities', label: 'Reasons' },
  { path: '/review', label: 'Truths' },
  { path: '/journey', label: 'Journey' },
  { path: '/future', label: 'Future' },
  { path: '/surprise', label: 'Surprise' },
];

const Navigation = () => {
  const location = useLocation();
  
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-50 bg-white/70 backdrop-blur-3xl border border-white shadow-[0_8px_32px_rgba(244,114,182,0.08)] px-2 py-2 rounded-full flex items-center space-x-1 sm:space-x-2 max-w-[95vw] overflow-x-auto scrollbar-hide"
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} className="relative px-4 py-2 text-xs sm:text-sm font-medium transition-colors rounded-full whitespace-nowrap">
            {isActive && (
              <motion.div
                layoutId="navPill"
                className="absolute inset-0 bg-white shadow-sm border border-emerald-100 rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              />
            )}
            <span className={`relative z-10 tracking-wide ${isActive ? 'text-emerald-500 font-semibold' : 'text-slate-500 hover:text-slate-800'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </motion.nav>
  );
};

const DashboardLayout = () => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-slate-800 font-sans flex flex-col items-center selection:bg-pink-100 selection:text-pink-900">
      
      {/* Light Pastel Romantic Cinematic Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex justify-center items-center">
        <FallingPetals />
        <motion.div 
          animate={{ x: [0, 80, -80, 0], y: [0, -80, 80, 0], scale: [1, 1.15, 0.85, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] bg-pink-100/60 rounded-full blur-[120px] top-[-20%] left-[-10%]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 100, 0], y: [0, 100, -100, 0], scale: [1, 0.85, 1.15, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] bg-emerald-50/60 rounded-full blur-[140px] bottom-[-20%] right-[-10%]" 
        />
      </div>

      <Navigation />

      <main className="w-full relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="w-full max-w-5xl px-6 flex flex-col items-center"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
export default DashboardLayout;
