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
  { name: "RTX-3060", score: 70 },
  { name: "RTX-3060ti", score: 100 },
  { name: "RTX-3070", score: 130 },
  { name: "RTX-3070ti", score: 160 },
  { name: "RTX-4070ti", score: 200 },
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
  score: number;
};

export type FormQuestion = {
  [key: string]: string | FormChoices[] ;
  id: string;
  label: string;
  description: string;
  choices: FormChoices[];
  answer: string
};

export type FormSettings = {
  [key: string]: FormQuestion;
  resolution: FormQuestion;
  framerate: FormQuestion;
  qualite: FormQuestion;
  jeux: FormQuestion;
};

export const jeux: FormQuestion = {
  id: "jeux",
  label: "Type de jeux",
  description:
    "Catégorie de jeux auquel on souhaite jouer, des petits jeux comme League of Legends ou des gros jeux triple A comme Flight Simulator.",
  choices: [
    { id: "Petit", score: 2 },
    { id: "Gros", score: 3 },
  ],
  answer: "Petit"
};

export const resolution: FormQuestion = {
  id: "resolution",
  label: "Résolution de l'écran",
  description:
    "Nombre de pixel en hauteur et largeur de l'écran, les résolutions les plus connues sont 1920x1080 pixels, aussi appelé le 1080p ou le FullHD, ou encore 3840x2160 pixels qui est le 4K.",
  choices: [
    { id: "FullHD", score: 2 },
    { id: "2K", score: 3.5 },
    { id: "4K", score: 5 },
  ],
  answer: "FullHD"
};

export const framerate: FormQuestion = {
  id: "framerate",
  label: "Framerate visé",
  description:
    "Nombre d'images par seconde en jeux souhaités, un écran classique délivre au maximum 60 images par seconde, on considère un jeux comme assez fluide à partir de 30 images par secondes, certains écrans peuvent aller jusqu'a 144 images par seconde pour plus de confort.",
  choices: [
    { id: "30 fps", score: 2 },
    { id: "60 fps", score: 3.5 },
    { id: "144 fps", score: 5 },
  ],
  answer: "30 fps"
};

export const qualite: FormQuestion = {
  id: "qualite",
  label: "Qualité souhaitée",
  description:
    "Qualité graphique attendu en jeux, la qualité graphique va impacter le rendu final de vos jeux, les élements liés à la qualitée graphique sont la qualité des textures, des ombres ainsi que des effets visuels.",
  choices: [
    { id: "Low", score: 2 },
    { id: "Medium", score: 2.5 },
    { id: "High", score: 3 },
  ],
  answer: "Low"
};

export const initialFormSettings: FormSettings = {
  jeux: jeux,
  resolution: resolution,
  framerate: framerate,
  qualite: qualite,
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
    CPU: CPU.find(component => component.name === "i5-10400F") || CPU[0],
    RAM: RAM.find(component => component.name === "8Go") || RAM[0],
    GPU: GPU.find(component => component.name === "Vidéo intégrée") || GPU[0],
  },
  {
    name: "PCGamerEssentiel02",
    photoUrl: "https://www.premium-pc.com/upload/category/3/bureautique.webp",
    CPU: CPU.find(component => component.name === "i5-10400F") || CPU[0],
    RAM: RAM.find(component => component.name === "16Go") || RAM[0],
    GPU: GPU.find(component => component.name === "GTX-1660super") || GPU[0],
  },
  {
    name: "PCGamerEssentiel04",
    photoUrl:
      "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
        CPU: CPU.find(component => component.name === "i5-11600KF") || CPU[0],
        RAM: RAM.find(component => component.name === "16Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-3060") || GPU[0],
  },
  {
    name: "PCGamerEssentiel06",
    photoUrl:
      "https://www.premium-pc.com/upload/category/5/101cbis_modif_800.webp",
        CPU: CPU.find(component => component.name === "i5-11600KF") || CPU[0],
        RAM: RAM.find(component => component.name === "16Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-3060ti") || GPU[0],
  },
  {
    name: "PCGamerEssentiel07",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
        CPU: CPU.find(component => component.name === "i7-11700KF") || CPU[0],
        RAM: RAM.find(component => component.name === "32Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-3070") || GPU[0],
  },
  {
    name: "PCGamerEssentiel08",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
        CPU: CPU.find(component => component.name === "i7-11700KF") || CPU[0],
        RAM: RAM.find(component => component.name === "32Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-3070ti") || GPU[0],
  },
  {
    name: "PCGamerSilenceRGB07",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
        CPU: CPU.find(component => component.name === "i7-12700KF") || CPU[0],
        RAM: RAM.find(component => component.name === "32Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-4070ti") || GPU[0],
  },
  {
    name: "PCGamerSilence4080-intel",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
        CPU: CPU.find(component => component.name === "i7-13700KF") || CPU[0],
        RAM: RAM.find(component => component.name === "32Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-4080") || GPU[0],
  },
  {
    name: "PCGamerSilence4080-intel",
    photoUrl:
      "https://www.premium-pc.com/upload/category/1/boitier01_modif_800.webp",
        CPU: CPU.find(component => component.name === "i9-13900KF") || CPU[0],
        RAM: RAM.find(component => component.name === "64Go") || RAM[0],
        GPU: GPU.find(component => component.name === "RTX-4080") || GPU[0],
  },
];
