import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Lock, User, Eye, EyeOff } from 'lucide-react';

const VALID_USERNAME = 'Kovitha';
const VALID_PASSWORD = '22082025445';

const Login = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setError('');
      onLogin();
    } else {
      setError('Wrong credentials. Try again 💔');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-rose-50 via-white to-emerald-50 relative overflow-hidden px-4">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 60 }}
        className="w-full max-w-md"
      >
        {/* Logo / Header */}
        <div className="text-center mb-10">
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 shadow-lg shadow-pink-200 mb-5"
          >
            <Heart className="w-7 h-7 text-white" fill="currentColor" />
          </motion.div>
          <h1 className="text-3xl font-serif font-bold text-slate-800 tracking-tight">
            Just for you
          </h1>
          <p className="text-slate-500 mt-2 font-light tracking-wide text-sm">
            This little corner of the internet is yours ♡
          </p>
        </div>

        {/* Card */}
        <motion.div
          animate={shaking ? { x: [-8, 8, -6, 6, -4, 4, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-xl border border-white/60"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={username}
                  onChange={e => { setUsername(e.target.value); setError(''); }}
                  placeholder="Who are you?"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white/70 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs font-semibold tracking-widest uppercase text-slate-500">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => { setPassword(e.target.value); setError(''); }}
                  placeholder="iykyk 👀"
                  className="w-full pl-11 pr-11 py-3.5 rounded-xl border border-slate-200 bg-white/70 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-rose-500 text-sm text-center font-medium"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Submit */}
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-400 to-rose-500 text-white font-semibold tracking-wide shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 transition-all duration-300 text-sm mt-2"
            >
              Enter ♡
            </motion.button>
          </form>
        </motion.div>

        <p className="text-center mt-6 text-xs text-slate-400 italic tracking-wide">
          hint: the date you remember most 🌟
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
