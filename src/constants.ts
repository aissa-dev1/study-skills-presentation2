export const PARTS_IMAGES = {
  CPU: "https://w7.pngwing.com/pngs/606/289/png-transparent-intel-core-xeon-cpu-socket-land-grid-array-intel-text-rectangle-trademark-thumbnail.png",
  RAM: "https://w7.pngwing.com/pngs/584/739/png-transparent-dimm-ddr4-sdram-computer-memory-registered-memory-ecc-memory-sequential-access-transfer-ram-electronic-device-thumbnail.png",
  GPU: "https://i.pinimg.com/originals/82/21/cd/8221cd404d0605500e5321151b8589ff.png",
  MotherBoard:
    "https://w7.pngwing.com/pngs/558/11/png-transparent-mainboard-asus-rog-zenith-extreme-pc-base-amd-tr4-form-factor-e-asus-rog-zenith-extreme-motherboard-extended-atx-socket-tr4-amd-x399-socket-tr4-others-electronics-electronic-thumbnail.png",
};

export const PC_PARTS = [
  {
    name: "CPU",
    img: PARTS_IMAGES.CPU,
    background: "bg-purple-100",
    description:
      "I’m the brain of your PC, processing all the data and making things happen!",
  },
  {
    name: "RAM",
    img: PARTS_IMAGES.RAM,
    background: "bg-pink-100",
    description:
      "I store and quickly access your data to keep your computer running smoothly!",
  },
  {
    name: "GPU",
    img: PARTS_IMAGES.GPU,
    background: "bg-blue-100",
    description:
      "I make your games and videos look awesome by rendering images fast!",
  },
  {
    name: "Motherboard",
    img: PARTS_IMAGES.MotherBoard,
    background: "bg-green-100",
    description:
      "I connect all your components together and ensure they communicate effectively!",
  },
];

export const COMPONENTS = [
  { name: "CPU", position: "cpu-slot" },
  { name: "RAM", position: "ram-slot" },
  { name: "GPU", position: "gpu-slot" },
  { name: "MotherBoard", position: "motherboard-slot" },
];
