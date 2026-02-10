import { motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineQuestion from "@/components/ValentineQuestion";
import LoveLetterSection from "@/components/LoveLetterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingHearts />

      <div className="relative z-10 flex flex-col items-center gap-24 px-6 py-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 text-center pt-16"
        >
          <motion.div
            className="text-6xl"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💝
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient-rose">Tansu</span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-script"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I have something to ask you...
          </motion.p>

          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
        </motion.div>

        {/* Love Letter */}
        <LoveLetterSection />

        {/* The Question */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl mx-auto py-10"
        >
          <ValentineQuestion />
        </motion.div>

        {/* Footer */}
        <motion.p
          className="text-muted-foreground/50 text-sm font-script"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Made with 💖 just for you
        </motion.p>
      </div>
    </div>
  );
};

export default Index;
