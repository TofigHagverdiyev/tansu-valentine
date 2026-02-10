import { motion } from "framer-motion";

const reasons = [
  "Your beautiful smile lights up every room ✨",
  "The way you laugh makes everything better 🌸",
  "Every moment with you feels like magic 🦋",
  "You make ordinary days extraordinary 🌹",
];

const LoveLetterSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center gap-8 max-w-xl mx-auto"
    >
      <h3 className="text-2xl md:text-3xl font-script text-gold">
        Why you're special...
      </h3>
      <div className="flex flex-col gap-4 w-full">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-card/60 backdrop-blur-sm border border-primary/10 rounded-lg p-5 text-center text-foreground/80 text-lg"
          >
            {reason}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default LoveLetterSection;
