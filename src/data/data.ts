/**
 * COMPONNENTS
 */

export type ComponentPc = {
  [key: string]: string | number;
  name: string;
  score: number;
};

export type ComponentCategories = {
  [key: string]: ComponentPc[];
  CPU: ComponentPc[];
  RAM: ComponentPc[];
  GPU: ComponentPc[];
};

export const CPU: ComponentPc[] = [
  { name: "PentiumG6400", score: 1 },
  { name: "i3-10100F", score: 2 },
  { name: "i5-10400F", score: 3 },
  // { name: "i5-11400F", score: 3 },
  { name: "i5-11600KF", score: 3 },
  // { name: "i5-12600KF", score: 3 },
  // { name: "i5-13600KF", score: 3 },
  { name: "i7-11700KF", score: 4 },
  { name: "i7-12700KF", score: 4 },
  { name: "i7-13700KF", score: 4 },
  { name: "i9-12900KF", score: 5 },
  { name: "i9-13900KF", score: 5 },
];

export const RAM: ComponentPc[] = [
  { name: "8Go", score: 1 },
  { name: "16Go", score: 2 },
  { name: "32Go", score: 3 },
  { name: "64Go", score: 4 },
];

export const GPU: ComponentPc[] = [
  { name: "Vidéo intégrée", score: 16 },
  // { name: "GTX-1650", score: 25 },
  { name: "GTX-1660super", score: 24 },
  { name: "RTX-3060", score: 40 },
  { name: "RTX-3060ti", score: 60 },
  { name: "RTX-3070", score: 100 },
  { name: "RTX-3070ti", score: 110 },
  { name: "RTX-4070ti", score: 150 },
  { name: "RTX-4080", score: 220 },
];

export const initialComponentsSettings: ComponentCategories = {
  CPU: CPU,
  RAM: RAM,
  GPU: GPU,
};

/**
 * FORM SETTINGS
 */

export type FormChoices = {
  [key: string]: string | number;
  id: string;
  scoreCPU: number;
  scoreRAM: number;
  scoreGPU: number;
};

export function isFormChoices(x: any): x is FormChoices {
  const expectedKeys = ["id", "scoreCPU", "scoreRAM", "scoreGPU"];
  for (let key in x) {
      if (!expectedKeys.includes(key)) return false;
      if (key === "id" && typeof x[key] !== "string") return false;
      if (key === "scoreCPU" && typeof x[key] !== "number") return false;
      if (key === "scoreRAM" && typeof x[key] !== "number") return false;
      if (key === "scoreGPU" && typeof x[key] !== "number") return false;
  }
  return true;
}

export function isFormChoicesArray(x: any): x is FormChoices[] {
  return Array.isArray(x) && x.every(isFormChoices);
}

export type FormQuestionSelect = {
  [key: string]: string | FormChoices[];
  id: string;
  label: string;
  description: string;
  choices: FormChoices[];
  answer: string;
};

export function isFormQuestionSelect(x: any): x is FormQuestionSelect {
  const expectedKeys = ["id", "label", "description", "choices", "answer"];
  for (let key in x) {
      if (!expectedKeys.includes(key)) return false;
      if (key === "id" && typeof x[key] !== "string") return false;
      if (key === "label" && typeof x[key] !== "string") return false;
      if (key === "description" && typeof x[key] !== "string") return false;
      if (key === "choices" && !isFormChoicesArray(x[key])) return false;
      if (key === "answer" && typeof x[key] !== "string") return false;
  }
  return true;
}

export type FormQuestionSwitch = {
  [key: string]: string | boolean;
  id: string;
  label: string;
  description: string;
  answer: boolean;
};

export function isFormQuestionSwitch(x: any): x is FormQuestionSwitch {
  const expectedKeys = ["id", "label", "description", "choices", "answer"];
  for (let key in x) {
      if (!expectedKeys.includes(key)) return false;
      if (key === "id" && typeof x[key] !== "string") return false;
      if (key === "label" && typeof x[key] !== "string") return false;
      if (key === "description" && typeof x[key] !== "string") return false;
      if (key === "answer" && typeof x[key] !== "boolean") return false;
  }
  return true;
}

export type FormSettings = {
  [key: string]: FormQuestionSelect | FormQuestionSwitch;
  jeux: FormQuestionSelect,
  resolution: FormQuestionSelect,
  framerate: FormQuestionSelect,
  qualite: FormQuestionSelect,
  stream: FormQuestionSelect,
  avenir: FormQuestionSwitch,
};

export const jeux: FormQuestionSelect = {
  id: "jeux",
  label: "Type de jeux",
  description:
    "Catégorie de jeux auquel on souhaite jouer, des petits jeux comme League of Legends ou des gros jeux triple A comme Flight Simulator.",
  choices: [
    { id: "Petit", scoreCPU: 0, scoreRAM: 0, scoreGPU: 2 },
    { id: "Gros", scoreCPU: 0, scoreRAM: 0, scoreGPU: 3 },
  ],
  answer: "Petit",
};

export const resolution: FormQuestionSelect = {
  id: "resolution",
  label: "Résolution de l'écran",
  description:
    "Nombre de pixel en hauteur et largeur de l'écran, les résolutions les plus connues sont 1920x1080 pixels, aussi appelé le 1080p ou le FullHD, ou encore 3840x2160 pixels qui est le 4K.",
  choices: [
    { id: "FullHD", scoreCPU: 0, scoreRAM: 0, scoreGPU: 2 },
    { id: "2K", scoreCPU: 0, scoreRAM: 0, scoreGPU: 3.5 },
    { id: "4K", scoreCPU: 0, scoreRAM: 0, scoreGPU: 5 },
  ],
  answer: "FullHD",
};

export const framerate: FormQuestionSelect = {
  id: "framerate",
  label: "Framerate visé",
  description:
    "Nombre d'images par seconde en jeux souhaités, un écran classique délivre au maximum 60 images par seconde, on considère un jeux comme assez fluide à partir de 30 images par secondes, certains écrans peuvent aller jusqu'a 144 images par seconde pour plus de confort.",
  choices: [
    { id: "30 fps", scoreCPU: 0, scoreRAM: 0, scoreGPU: 2 },
    { id: "60 fps", scoreCPU: 0, scoreRAM: 0, scoreGPU: 3.5 },
    { id: "144 fps", scoreCPU: 0, scoreRAM: 0, scoreGPU: 5 },
  ],
  answer: "30 fps",
};

export const qualite: FormQuestionSelect = {
  id: "qualite",
  label: "Qualité souhaitée",
  description:
    "Qualité graphique attendu en jeux, la qualité graphique va impacter le rendu final de vos jeux, les élements liés à la qualitée graphique sont la qualité des textures, des ombres ainsi que des effets visuels.",
  choices: [
    { id: "Low", scoreCPU: 0, scoreRAM: 0, scoreGPU: 2 },
    { id: "Medium", scoreCPU: 0, scoreRAM: 0, scoreGPU: 2.5 },
    { id: "High", scoreCPU: 0, scoreRAM: 0, scoreGPU: 3 },
  ],
  answer: "Low",
};

export const stream: FormQuestionSelect = {
  id: "stream",
  label: "Utilité de l'ordinateur",
  description:
    "Le streaming et le montage vidéo sont des activitées nécessitant une puissance CPU plus importante.",
  choices: [
    { id: "Only Gaming", scoreCPU: 0, scoreRAM: 0, scoreGPU: 1 },
    { id: "W/ Streaming", scoreCPU: 1, scoreRAM: 0, scoreGPU: 1 },
  ],
  answer: "Only Gaming",
};

export const avenir: FormQuestionSwitch = {
  id: "avenir",
  label: "Boost prévisionnel",
  description:
    "Booster le CPU et la RAM pour anticper les jeux et logiciels a venir.",
  answer: false,
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
 * PC CONFIG
 */

export type ConfigPc = {
  [key: string]: string | ComponentPc;
  name: string;
  photoUrl: string;
  CPU: ComponentPc;
  RAM: ComponentPc;
  GPU: ComponentPc;
};

export const initialConfigsPc: ConfigPc[] = [
  {
    name: "PCGamerEssentiel00",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find((component) => component.name === "PentiumG6400") || CPU[0],
    RAM: RAM.find((component) => component.name === "8Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "Vidéo intégrée") || GPU[0],
  },
  {
    name: "PCGamerEssentiel02",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find((component) => component.name === "i3-10100F") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "GTX-1660super") || GPU[0],
  },
  {
    name: "PCGamerEssentiel04",
    photoUrl:
      "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i5-11600KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3060") || GPU[0],
  },
  {
    name: "PCGamerEssentiel06",
    photoUrl:
      "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i5-11600KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "16Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3060ti") || GPU[0],
  },
  {
    name: "PCGamerEssentiel07",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-11700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3070") || GPU[0],
  },
  {
    name: "PCGamerEssentiel08",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-11700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-3070ti") || GPU[0],
  },
  {
    name: "PCGamerSilenceRGB07",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-12700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4070ti") || GPU[0],
  },
  {
    name: "PCGamerSilence4080-intel",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i7-13700KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "32Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4080") || GPU[0],
  },
  {
    name: "PCGamerSilence4080-intel",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
    CPU: CPU.find((component) => component.name === "i9-13900KF") || CPU[0],
    RAM: RAM.find((component) => component.name === "64Go") || RAM[0],
    GPU: GPU.find((component) => component.name === "RTX-4080") || GPU[0],
  },
];
