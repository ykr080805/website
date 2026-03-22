import { motion } from 'framer-motion';
import { Smile, Heart, Star, Laugh, ShieldCheck, Sparkles, Target, Sun, Anchor, Zap, Coffee, Flame, Flower } from 'lucide-react';
import React from 'react';

const iconMap: Record<string, React.ElementType> = {
  smile: Smile, heart: Heart, star: Star, laugh: Laugh,
  'shield-check': ShieldCheck, sparkles: Sparkles, target: Target, sun: Sun,
  anchor: Anchor, zap: Zap, coffee: Coffee, flame: Flame, flower: Flower,
};

const GlowCard = ({ item, index }: { item: any; index: number }) => {
  const Icon = item.icon ? iconMap[item.icon] : Smile;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-10 group hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-1 cursor-pointer flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-full bg-pink-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-pink-500 shadow-sm border border-pink-100/50">
        <Icon strokeWidth={2} />
      </div>
      <h3 className="text-xl font-serif font-bold text-slate-800 mb-3 tracking-wide">{item.title}</h3>
      <p className="text-slate-500 font-light leading-relaxed tracking-wide mb-6">{item.description}</p>

      {item.memory && (
        <div className="mt-auto pt-5 border-t border-pink-100/60 flex items-start gap-3">
          <Heart className="w-4 h-4 text-pink-300 mt-1 shrink-0" fill="currentColor" />
          <p className="text-sm text-pink-600/90 italic font-medium leading-relaxed tracking-wide">
            "{item.memory}"
          </p>
        </div>
      )}
    </motion.div>
  );
};

export const Qualities = ({ content }: { content: any[] }) => {
  return (
    <section className="py-24 relative overflow-hidden backdrop-blur-sm bg-white/30">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4 tracking-tight">
            Why I Love You
          </h2>
          <p className="text-lg text-slate-600 font-light tracking-wide">
            Just a few of the million reasons you have my heart
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item, index) => (
            <GlowCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-slate-400 italic text-sm tracking-wide"
        >
          Wantedly kept Responsibility & Accountability at last... iykyk 👀
        </motion.p>
      </div>
    </section>
  );
};

export default Qualities;
