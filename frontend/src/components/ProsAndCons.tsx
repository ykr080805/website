import { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ pro, con, index }: { pro: string; con: string; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full aspect-square md:aspect-[4/5] cursor-pointer group"
      style={{ perspective: '2000px' }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
      >
        <motion.div
           className="w-full h-full relative"
           animate={{ rotateY: isFlipped ? 180 : 0 }}
           transition={{ duration: 0.6, type: "spring", stiffness: 60, damping: 15 }}
           style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front */}
          <motion.div 
            className="absolute inset-0 w-full h-full glass-card p-10 flex flex-col justify-center items-center text-center bg-white/60"
            animate={{ opacity: isFlipped ? 0 : 1 }}
            transition={{ duration: 0.1, delay: isFlipped ? 0 : 0.15 }}
          >
            <div className="text-emerald-500 text-sm tracking-[0.2em] uppercase mb-6 font-semibold">Pro</div>
            <p className="text-2xl md:text-3xl text-slate-700 font-serif leading-relaxed italic border-l-2 border-emerald-200 pl-6 drop-shadow-sm">"{pro}"</p>
          </motion.div>

          {/* Back */}
          <motion.div 
            className="absolute inset-0 w-full h-full glass-card p-10 flex flex-col justify-center items-center text-center bg-slate-50/60 shadow-inner"
            style={{ rotateY: 180 }}
            animate={{ opacity: isFlipped ? 1 : 0 }}
            transition={{ duration: 0.1, delay: isFlipped ? 0.15 : 0 }}
          >
            <div className="text-rose-400 text-sm tracking-[0.2em] uppercase mb-6 font-semibold">Con</div>
            <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-serif leading-relaxed italic border-l-2 border-rose-300 pl-6 drop-shadow-sm">"{con}"</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ProsAndCons = ({ content }: { content: any[] }) => {
  return (
    <section className="w-full max-w-5xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800">
          Pros <span className="text-pink-400 italic font-medium">&</span> Cons
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {content.map((item, index) => (
          <FlipCard key={index} pro={item.pro} con={item.con} index={index} />
        ))}
      </div>
    </section>
  );
};
export default ProsAndCons;
