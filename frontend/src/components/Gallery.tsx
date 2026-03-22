import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Gallery = ({ content }: { content: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedImage]);

  return (
    <section className="w-full max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800">
          Captured <span className="text-pink-500 italic font-medium">Moments</span>
        </h2>
      </motion.div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {content.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
            className="break-inside-avoid relative cursor-pointer overflow-hidden rounded-[2rem] group border border-slate-200/50 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/5 transition-colors duration-300 z-10 block" />
            <img 
              src={src} 
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 block"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 p-6 md:p-12 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          >
             <button 
               className="absolute top-8 right-8 text-slate-500 hover:text-slate-900 p-4 rounded-full bg-white hover:bg-slate-50 transition-colors z-[60] shadow-sm border border-slate-200"
               onClick={() => setSelectedImage(null)}
             >
                <X strokeWidth={2} className="w-6 h-6" />
             </button>
             
             <motion.img
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] relative z-[51] border border-white"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Gallery;
