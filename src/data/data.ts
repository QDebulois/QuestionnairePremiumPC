import {
  ComponentPc,
  ComponentCategories,
  FormQuestionSelect,
  FormQuestionSwitch,
  FormSettings,
  ConfigPc,
  CardConfingPc,
  FormAnswers,
} from "@/data/types";

/**
 * COMPONNENTS
 */

export const CPU: ComponentPc[] = [
  // { name: "PentiumG6400", score: 5 },
  { name: "i3-10100F", score: 5 },
  { name: "i5-10400F", score: 6 },
  // { name: "i5-11400F", score: 3 },
  { name: "i5-11600KF", score: 6 },
  // { name: "i5-12600KF", score: 3 },
  // { name: "i5-13600KF", score: 3 },
  { name: "i7-11700KF", score: 7 },
  { name: "i7-12700KF", score: 7 },
  { name: "i7-13700KF", score: 7 },
  // { name: "i9-12900KF", score: 8 },
  { name: "i9-13900KF", score: 8 },
];

export const RAM: ComponentPc[] = [
  //{ name: "8Go", score: 6 },
  { name: "16Go", score: 6 },
  { name: "32Go", score: 8 },
  { name: "64Go", score: 10 },
];

export const GPU: ComponentPc[] = [
  { name: "Vidéo intégrée", score: 4 },
  { name: "GTX-1650", score: 5 },
  { name: "GTX-1660super", score: 7 },
  { name: "RTX-3050", score: 7 },
  { name: "RTX-3060", score: 9 },
  // { name: "RTX-3060ti", score: 9 },
  { name: "RTX-3070", score: 11 },
  { name: "RTX-3070ti", score: 12 },
  { name: "RTX-4070", score: 12 },
  { name: "RTX-4070ti", score: 13 },
  { name: "RTX-4080", score: 15 },
  { name: "RTX-4090", score: 17 },
];

export const initialComponentsSettings: ComponentCategories = {
  CPU: CPU,
  RAM: RAM,
  GPU: GPU,
};

/**
 * FORM SETTINGS
 */

export const jeux: FormQuestionSelect = {
  id: "jeux",
  label: "Type de jeux",
  description:
    "Catégorie de jeux auquel on souhaite jouer, des petits jeux comme League of Legends ou des gros jeux triple A comme Flight Simulator.",
  choices: [
    { id: "Petit", scoreCPU: 1, scoreRAM: 1, scoreGPU: 1 },
    // { id: "Moyen", scoreCPU: 1, scoreRAM: 2, scoreGPU: 3 },
    { id: "Gros", scoreCPU: 1, scoreRAM: 2, scoreGPU: 3 },
  ],
};

export const resolution: FormQuestionSelect = {
  id: "resolution",
  label: "Résolution de l'écran",
  description:
    "Nombre de pixel en hauteur et largeur de l'écran, les résolutions les plus connues sont 1920x1080 pixels, aussi appelé le 1080p ou le FullHD, ou encore 3840x2160 pixels qui est le 4K.",
  choices: [
    { id: "FullHD", scoreCPU: 1, scoreRAM: 1, scoreGPU: 1 },
    { id: "2K", scoreCPU: 1, scoreRAM: 1, scoreGPU: 3 },
    { id: "4K", scoreCPU: 1, scoreRAM: 2, scoreGPU: 5 },
  ],
};

export const framerate: FormQuestionSelect = {
  id: "framerate",
  label: "Framerate visé",
  description:
    "Nombre d'images par seconde en jeux souhaités, un écran classique délivre au maximum 60 images par seconde, on considère un jeux comme assez fluide à partir de 30 images par secondes, certains écrans peuvent aller jusqu'a 144 images par seconde pour plus de confort.",
  choices: [
    { id: "30 fps", scoreCPU: 1, scoreRAM: 1, scoreGPU: 1 },
    { id: "60 fps", scoreCPU: 2, scoreRAM: 1, scoreGPU: 2 },
    { id: "144 fps", scoreCPU: 3, scoreRAM: 2, scoreGPU: 4 },
  ],
};

export const qualite: FormQuestionSelect = {
  id: "qualite",
  label: "Qualité souhaitée",
  description:
    "Qualité graphique attendu en jeux, la qualité graphique va impacter le rendu final de vos jeux, les élements liés à la qualitée graphique sont la qualité des textures, des ombres ainsi que des effets visuels.",
  choices: [
    { id: "Low", scoreCPU: 1, scoreRAM: 1, scoreGPU: 1 },
    // { id: "Medium", scoreCPU: 1, scoreRAM: 1, scoreGPU: 3 },
    { id: "High", scoreCPU: 1, scoreRAM: 1, scoreGPU: 3 },
  ],
};

export const stream: FormQuestionSelect = {
  id: "stream",
  label: "Utilité de l'ordinateur",
  description: "Le streaming et le montage vidéo sont des activitées nécessitant une puissance CPU plus importante.",
  choices: [
    { id: "Only Gaming", scoreCPU: 1, scoreRAM: 1, scoreGPU: 0 },
    { id: "W/ Streaming", scoreCPU: 2, scoreRAM: 2, scoreGPU: 0 },
  ],
};

export const avenir: FormQuestionSwitch = {
  id: "avenir",
  label: "Boost prévisionnel",
  description: "Booster le CPU et la RAM pour anticper les jeux et logiciels a venir.",
};

export const initialFormSettings: FormSettings = {
  jeux: jeux,
  resolution: resolution,
  framerate: framerate,
  qualite: qualite,
  stream: stream,
  avenir: avenir,
};

/**
 * FORM ANSWERS
 */

export const initialFormAnswers: FormAnswers = {
  [jeux.id]: jeux.choices[0].id,
  [resolution.id]: resolution.choices[0].id,
  [framerate.id]: framerate.choices[0].id,
  [qualite.id]: qualite.choices[0].id,
  [stream.id]: stream.choices[0].id,
  [avenir.id]: false,
};

/**
 * PC CONFIG
 */

export const initialConfigsPc: ConfigPc[] = [
  {
    id: "0",
    name: "PC Essentiel 00",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find((component) => component.name === "i3-10100F") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "Vidéo intégrée") || GPU[0],
  },
  {
    id: "1",
    name: "PC Essentiel 01",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find((component) => component.name === "i3-10100F") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "GTX-1650") || GPU[0],
  },
  {
    id: "2",
    name: "PC Essentiel 02",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find((component) => component.name === "i3-10100F") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "GTX-1660super") || GPU[0],
  },
  {
    id: "3",
    name: "PC Essentiel 03",
    photoUrl: "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i5-11600KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3050") || GPU[0],
  },
  {
    id: "4",
    name: "PC Essentiel 04",
    photoUrl: "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i5-11600KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3060") || GPU[0],
  },
  {
    id: "5",
    name: "PC Essentiel 07",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-11700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3070") || GPU[0],
  },
  {
    id: "6",
    name: "PC Essentiel 08",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-11700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3070ti") || GPU[0],
  },
  {
    id: "7",
    name: "PC Silence RGB 06",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-12700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4070") || GPU[0],
  },
  {
    id: "8",
    name: "PC Silence RGB 07",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-12700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4070ti") || GPU[0],
  },
  {
    id: "9",
    name: "PC Silence 4080",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-13700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4080") || GPU[0],
  },
  {
    id: "10",
    name: "PC Silence 4080 i9",
    photoUrl: "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i9-13900KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "64Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4090") || GPU[0],
  },
];

/**
 * CARD
 */

export const initialCardConfigPc: CardConfingPc = {
  scoreCPU: 0,
  scoreGPU: 0,
  scoreRAM: 0,
  configPc: initialConfigsPc[0],
};
