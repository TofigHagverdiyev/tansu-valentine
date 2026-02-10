import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ValentineQuestion = () => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);
  const [said, setSaid] = useState(false);
  const [noCount, setNoCount] = useState(0);

  const noTexts = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "You're breaking my heart 💔",
    "Please? 🥺",
    "Pretty please?",
    "I'll cry 😢",
  ];

  const moveNo = useCallback(() => {
    const x = (Math.random() - 0.5) * 300;
    const y = (Math.random() - 0.5) * 200;
    setNoPos({ x, y });
    setYesScale((s) => Math.min(s + 0.15, 2.5));
    setNoCount((c) => Math.min(c + 1, noTexts.length - 1));
  }, [noTexts.length]);

  return (
    <div className="relative flex flex-col items-center gap-10">
      <AnimatePresence mode="wait">
        {!said ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-center text-gradient-rose"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Will you be my Valentine? 💕
            </motion.h2>

            <div className="flex items-center gap-6 relative min-h-[80px]">
              <motion.button
                className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-xl glow-rose cursor-pointer"
                animate={{ scale: yesScale }}
                whileHover={{ scale: yesScale * 1.1 }}
                whileTap={{ scale: yesScale * 0.95 }}
                onClick={() => setSaid(true)}
              >
                Yes! 💖
              </motion.button>

              <motion.button
                className="px-8 py-3 rounded-full border border-muted-foreground/30 text-muted-foreground text-lg cursor-pointer"
                animate={{ x: noPos.x, y: noPos.y }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                onMouseEnter={moveNo}
                onTouchStart={moveNo}
                onClick={moveNo}
              >
                {noTexts[noCount]}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="yes"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <motion.div
              className="text-8xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              🥰
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient-rose">
              Yaaay! 🎉
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-script">
              I knew you'd say yes, Tansu! 💕
            </p>
            <motion.div
              className="text-6xl mt-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💐
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ValentineQuestion;
