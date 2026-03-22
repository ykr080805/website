import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[99999] bg-[#FDFBF7] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="relative w-20 h-20 mx-auto mb-10">
              <div className="absolute inset-0 border-t-[3px] border-rose-400 rounded-full animate-spin opacity-80" style={{ animationDuration: '1.5s' }} />
              <div className="absolute inset-2 border-r-[3px] border-rose-200 rounded-full animate-spin opacity-60" style={{ animationDuration: '2.5s', animationDirection: 'reverse' }} />
            </div>
            <h2 className="text-xl md:text-2xl font-serif text-slate-800 tracking-[0.3em] uppercase mb-4">Loading</h2>
            <p className="text-slate-500 font-light tracking-widest text-xs uppercase">Please wait</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Loading;
