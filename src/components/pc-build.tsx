import { useMemo, useState } from "react";
import { COMPONENTS, PARTS_IMAGES } from "../constants";
import { motion } from "framer-motion";
import { shuffleList } from "../utils/shuffle-list";

export function PCBuild() {
  const [activePart, setActivePart] = useState<string | null>(null);
  const [placedParts, setPlacedParts] = useState<{
    [key: string]: { part: string; isPlaced: boolean };
  }>({});
  const parts = useMemo(() => {
    return shuffleList(COMPONENTS);
  }, []);
  const slots = useMemo(() => {
    return shuffleList(COMPONENTS);
  }, []);

  const handleComponentClick = (part: string) => {
    setActivePart(part);
  };

  const handleSlotClick = (slot: string) => {
    if (activePart && !placedParts[slot]?.isPlaced && activePart === slot) {
      setPlacedParts((prev) => ({
        ...prev,
        [slot]: { part: activePart, isPlaced: true },
      }));
      setActivePart(null);
    }
  };

  return (
    <div id="pc_build" className="py-10 text-center bg-blue-200">
      <h2 className="mb-4 text-3xl font-bold">Build Your Dream PC!</h2>

      <div className="flex items-center justify-center gap-4 mb-6">
        {parts.map((part) => (
          <motion.img
            key={part.name}
            src={PARTS_IMAGES[part.name as keyof typeof PARTS_IMAGES]}
            alt={part.name}
            onClick={() => handleComponentClick(part.name)}
            className={`w-20 h-20 border rounded-md shadow-lg cursor-pointer ${
              activePart === part.name ? "ring-4 ring-blue-400" : ""
            }`}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>

      <div className="relative grid grid-cols-2 grid-rows-3 gap-2 p-4 mx-auto bg-gray-100 rounded-lg shadow-xl w-80 h-96">
        {slots.map((slot) => (
          <div
            key={slot.name}
            className={`rounded-md flex items-center justify-center border-2 ${
              placedParts[slot.name]?.isPlaced
                ? "bg-blue-300 border-blue-500"
                : "bg-gray-200 hover:bg-gray-300 border-gray-400"
            }`}
            onClick={() => handleSlotClick(slot.name)}
          >
            {placedParts[slot.name]?.isPlaced ? (
              <motion.img
                src={
                  PARTS_IMAGES[
                    placedParts[slot.name].part as keyof typeof PARTS_IMAGES
                  ]
                }
                alt={placedParts[slot.name].part}
                className="size-16"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              />
            ) : (
              <p className="text-sm text-gray-600">{slot.name} Slot</p>
            )}
          </div>
        ))}
      </div>

      {Object.keys(placedParts).length === COMPONENTS.length && (
        <motion.div
          className="mt-6 text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Your PC is Ready! Great Job!
        </motion.div>
      )}
    </div>
  );
}
