import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-300 flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
        className="text-2xl"
      >
        Hello World
      </motion.div>
    </div>
  );
};

export default App;
