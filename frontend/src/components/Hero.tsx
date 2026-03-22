import { motion } from 'framer-motion';

const Hero = ({ content }: { content: any }) => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] w-full text-center relative overflow-hidden">
      
      <motion.div
        className="max-w-4xl"
        style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[7.5rem] font-serif font-bold text-slate-800 mb-8 leading-tight tracking-tight relative z-10"
        >
          {content.greeting.split(',')[0]}, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-emerald-300 italic font-medium">{content.greeting.split(',')[1]}</span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        className="mt-12 max-w-xl mx-auto relative z-10"
      >
        <p className="text-slate-500 text-lg md:text-2xl font-serif italic mb-8 leading-relaxed" style={{ WebkitFontSmoothing: 'antialiased', transform: 'translateZ(0)' }}>
          {content.subtitle}
        </p>
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          className="w-[1px] bg-gradient-to-b from-pink-300 to-transparent mx-auto mb-8 origin-top" 
        />
        <p className="text-slate-400 text-sm md:text-base leading-loose tracking-wide font-light">
          {content.description}
        </p>
      </motion.div>
    </section>
  );
};
export default Hero;
