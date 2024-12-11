import { motion } from "framer-motion";
import { PC_PARTS } from "../constants";

export function MeetTheParts() {
  return (
    <div className="py-10 px-4">
      {PC_PARTS.map((part, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className={`${part.background} p-6 rounded-lg shadow-md mb-6`}
        >
          <h2 className="font-bold text-xl mb-4">{part.name}</h2>
          <div className="flex items-center">
            <img src={part.img} alt={part.name} className="w-20 h-20 mr-4" />
            <p>{part.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
