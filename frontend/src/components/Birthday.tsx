import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Gift } from 'lucide-react';

const Birthday = ({ content }: { content: any }) => {
  const [revealed, setRevealed] = useState(false);

  // Split message into words for a cinematic stagger effect
  const words = content.message ? content.message.split(" ") : ["Happy", "Birthday,", "Manvitha.", "I", "love", "you."];

  const triggerReveal = () => {
    setRevealed(true);
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#059669', '#34d399', '#f43f5e'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#059669', '#34d399', '#f43f5e'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="w-full max-w-5xl mx-auto py-8 lg:py-20 flex flex-col items-center justify-center min-h-[70vh]">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="invitation"
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full px-6 flex justify-center"
          >
             <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={triggerReveal}
              className="glass-card max-w-md w-full p-12 md:p-16 flex flex-col items-center justify-center cursor-pointer group text-center bg-white/70 hover:bg-white border border-white/60 shadow-xl hover:shadow-[0_40px_80px_rgba(244,114,182,0.06)] transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center mb-8 border border-pink-100 group-hover:scale-110 group-hover:bg-pink-100 transition-all duration-500 shadow-sm relative">
                <div className="absolute inset-0 rounded-full bg-pink-400 opacity-20 animate-[ping_3s_ease-in-out_infinite]" />
                <Gift className="w-8 h-8 text-pink-500 relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-slate-800 mb-6 italic tracking-tight">For You</h3>
              <div className="w-8 h-[1px] bg-pink-200 mb-6" />
              <p className="text-slate-400 font-medium tracking-[0.2em] uppercase text-xs">Tap to unwrap</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center w-full max-w-4xl glass-card p-10 md:p-20 rounded-[3rem] bg-white/60"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5, duration: 1 }}
              className="mb-12 md:mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif text-slate-800 italic">
                Dearest <span className="text-pink-500 font-medium not-italic">Manvitha</span>,
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-6">
              {words.map((word: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 + i * 0.1, type: "spring", stiffness: 80, damping: 20 }}
                  className="text-2xl md:text-4xl lg:text-5xl font-serif text-slate-700 leading-relaxed font-light"
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + words.length * 0.1 + 1.5, duration: 3 }}
              className="mt-20 flex flex-col items-center"
            >
              <div className="w-[1px] h-24 bg-gradient-to-b from-emerald-200 to-transparent mb-8" />
              <p className="text-emerald-500 font-medium tracking-[0.3em] uppercase text-xs">With all my heart</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + words.length * 0.1 + 3.5, duration: 2 }}
              className="mt-8 text-pink-400 italic text-sm tracking-widest font-medium"
            >
              love you bubuuu ♡
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Birthday;
