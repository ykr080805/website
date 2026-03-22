import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BucketList = ({ content }: { content: any[] }) => {
  return (
    <section className="w-full max-w-5xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800">
          Our <span className="text-pink-500 italic font-medium">Future</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {content.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
            className="glass-card p-6 md:p-8 flex items-center space-x-6 group hover:shadow-[0_20px_40px_rgba(244,114,182,0.05)] hover:-translate-y-1 transition-all cursor-pointer bg-white/60"
          >
            <div className={`w-8 h-8 rounded-full border-2 flex shrink-0 items-center justify-center transition-all duration-300 ${item.done ? 'bg-pink-400 border-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.4)]' : 'border-slate-300 group-hover:border-pink-300 bg-transparent'}`}>
              <Check className={`w-4 h-4 text-white transition-opacity duration-300 ${item.done ? 'opacity-100' : 'opacity-0 group-hover:opacity-40 group-hover:text-pink-400'}`} strokeWidth={3} />
            </div>
            <h3 className={`text-xl font-serif tracking-wide transition-colors duration-300 ${item.done ? 'text-slate-400 line-through' : 'text-slate-700 font-bold group-hover:text-pink-600'}`}>
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16 text-slate-400 italic text-sm tracking-wide"
      >
        ...and still continues — even now, we are still getting to know each other. There is no such thing as knowing everything. ♡
      </motion.p>
    </section>
  );
};
export default BucketList;
