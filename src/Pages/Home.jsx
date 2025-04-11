import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen bg-[#0F0F0F] text-white px-6 py-16 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6 relative"
        >
          I chase emotions like a <span className="text-[#FFA63D] relative inline-block">philosopher
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#FFA63D]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ transformOrigin: 'left' }}
            /></span>,<br />
          but I design like a <span className="text-[#B28DFF]">dictator</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto"
        >
          Pixels obey me. Layouts fear me. I don't design experiences, I craft obsessions.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 text-sm md:text-base leading-relaxed">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#FFA63D]">⚡ What I Do</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>UI/UX Tyranny:</strong> Interfaces so emotional they might ghost you.</li>
              <li><strong>AI Whispering:</strong> I talk to AI like it’s my intern. It listens.</li>
              <li><strong>Full-Stack Madness:</strong> React. Tailwind. Mongo. Poetry.</li>
              <li><strong>Emotional Engineering:</strong> I design feelings, not features.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-[#B28DFF]">🥵 What Makes Me... Me?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Probably cried over a button shadow once.</li>
              <li>Yelled at Tailwind more than I talk to people.</li>
              <li>Thinks a watermark’s placement is a *spiritual* decision.</li>
              <li>Ships late because the vibes weren’t aligned.</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-[#FF8350] font-semibold">
            I’m not here to disrupt — I’m here to build beautiful sh*t that makes people feel.
          </p>
          <p className="mt-8 text-sm text-gray-500 italic">
            — Built, overthought, and aggressively pixel-pushed by <span className="text-[#FFA63D] font-bold">Abhishek Aka <a target="_blank" href="https://instagram.com/capturingthecore" >@HEK</a></span>, the guy who probably screamed at a border-radius once.
          </p>
        </motion.div>
      </div>
    </section>
  );
}