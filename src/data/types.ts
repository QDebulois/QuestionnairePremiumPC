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
  const actualKeys = Object.keys(x);
  if (actualKeys.length !== expectedKeys.length) return false;
  for (let key of actualKeys) {
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
};

export function isFormQuestionSelect(x: any): x is FormQuestionSelect {
  const expectedKeys = ["id", "label", "description", "choices"];
  const actualKeys = Object.keys(x);
  if (actualKeys.length !== expectedKeys.length) return false;
  for (let key of actualKeys) {
    if (!expectedKeys.includes(key)) return false;
    if (key === "id" && typeof x[key] !== "string") return false;
    if (key === "label" && typeof x[key] !== "string") return false;
    if (key === "description" && typeof x[key] !== "string") return false;
    if (key === "choices" && !isFormChoicesArray(x[key])) return false;
  }
  return true;
}

export type FormQuestionSwitch = {
  [key: string]: string;
  id: string;
  label: string;
  description: string;
};

export function isFormQuestionSwitch(x: any): x is FormQuestionSwitch {
  const expectedKeys = ["id", "label", "description"];
  const actualKeys = Object.keys(x);
  if (actualKeys.length !== expectedKeys.length) return false;
  for (let key of actualKeys) {
    if (!expectedKeys.includes(key)) return false;
    if (key === "id" && typeof x[key] !== "string") return false;
    if (key === "label" && typeof x[key] !== "string") return false;
    if (key === "description" && typeof x[key] !== "string") return false;
  }
  return true;
}

export type FormSettings = {
  [key: string]: FormQuestionSelect | FormQuestionSwitch;
  jeux: FormQuestionSelect;
  resolution: FormQuestionSelect;
  framerate: FormQuestionSelect;
  qualite: FormQuestionSelect;
  stream: FormQuestionSelect;
  avenir: FormQuestionSwitch;
};

/**
 * FORM ANSWERS
 */

export type FormAnswers = {
  [key: string]: string | boolean;
};

/**
 * PC CONFIG
 */

export type ConfigPc = {
  [key: string]: string | ComponentPc;
  id: string;
  name: string;
  photoUrl: string;
  CPU: ComponentPc;
  RAM: ComponentPc;
  GPU: ComponentPc;
};

/**
 * CARD
 */

export type CardConfingPc = {
  [key: string]: number | ConfigPc;
  scoreCPU: number;
  scoreRAM: number;
  scoreGPU: number;
  configPc: ConfigPc;
};
