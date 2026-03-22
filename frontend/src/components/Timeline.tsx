import { motion } from 'framer-motion';

const generalPhotos = [
  '/photos/memory1.jpeg',
  '/photos/memory2.jpeg',
  '/photos/memory3.jpeg',
];

const Timeline = ({ content }: { content: any[] }) => {
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-slate-800">
          The <span className="text-pink-500 italic font-medium">Journey</span>
        </h2>
        <p className="mt-4 text-slate-500 font-light tracking-wide text-lg">Every moment that brought us here</p>
      </motion.div>

      <div className="relative">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-emerald-200 to-transparent" />

        {content.map((item, index) => {
          const isLeft = index % 2 === 0;
          const hasImage = !!item.image;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`relative mb-16 md:mb-24 flex flex-col ${hasImage ? `md:flex-row ${isLeft ? 'md:flex-row-reverse' : ''}` : 'md:flex-row'} gap-6 md:gap-0 items-center`}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-white shadow-[0_0_16px_rgba(52,211,153,0.5)] z-10" />

              {hasImage ? (
                <>
                  {/* Photo side */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pl-16' : 'md:pr-16'}`}>
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60 bg-white/20">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Text side */}
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="glass-card p-8 bg-white/70 hover:shadow-[0_20px_40px_rgba(244,114,182,0.08)] transition-all">
                      <span className="text-pink-500 font-semibold tracking-widest text-xs mb-3 block uppercase">{item.date}</span>
                      <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 tracking-wide">{item.title}</h3>
                      <p className="text-slate-500 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                /* No image — full width card centred */
                <div className="w-full md:w-8/12 mx-auto relative z-10">
                  <div className="glass-card p-8 md:p-10 bg-white/80 hover:shadow-[0_20px_40px_rgba(244,114,182,0.1)] transition-all text-center">
                    <span className="text-pink-500 font-semibold tracking-widest text-xs mb-3 block uppercase">{item.date}</span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4 tracking-wide">{item.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center mt-16 text-slate-400 italic text-sm tracking-widest"
      >
        ♡ &nbsp; This is just the beginning... more to go &nbsp; ♡
      </motion.p>

      {/* ── Memories Section ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-28 text-center"
      >
        <h3 className="text-3xl md:text-4xl font-serif text-slate-800 mb-2">
          A few <span className="text-pink-500 italic font-medium">Memories</span>
        </h3>
        <p className="text-slate-400 font-light text-sm mb-4 tracking-wide">just us, captured ♡</p>
        <p className="text-slate-400/80 italic text-xs mb-10 tracking-wider font-medium">I couldn't find much photos, I broke my phone 😭....</p>


        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {generalPhotos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-md aspect-square border border-white/60"
            >
              <img
                src={src}
                alt={`Memory ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
