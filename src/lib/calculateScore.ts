import {
  isFormQuestionSelect,
  isFormQuestionSwitch,
  ComponentCategories,
  ConfigPc,
  FormSettings,
  CardConfingPc,
  FormAnswers,
} from "@/data/types";

import { inspect } from "util";

interface IGetAdaptedConfig {
  formAnswers: FormAnswers;
  formSettings: FormSettings;
  componentsPc: ComponentCategories;
  configsPc: ConfigPc[];
}

function getAdaptedConfig({ formAnswers, formSettings, componentsPc, configsPc }: IGetAdaptedConfig): CardConfingPc {
  let newCardConfigPc: CardConfingPc = {
    scoreCPU: 0,
    scoreRAM: 0,
    scoreGPU: 0,
    configPc: configsPc[0],
  };

  Object.keys(formSettings).forEach((formKey) => {
    const formQuestion = formSettings[formKey];
    if (isFormQuestionSelect(formQuestion)) {
      const choix = formQuestion.choices.find((e) => e.id === formAnswers[formKey]);
      if (choix) {
        newCardConfigPc.scoreCPU += choix.scoreCPU;
        newCardConfigPc.scoreRAM += choix.scoreRAM;
        newCardConfigPc.scoreGPU += choix.scoreGPU;
      }
    } else if (isFormQuestionSwitch(formQuestion) && formKey === "avenir") {
      if (formAnswers[formKey]) {
        newCardConfigPc.scoreCPU += 1;
        newCardConfigPc.scoreRAM += 1;
        newCardConfigPc.scoreGPU += 1;
      }
    }
  });

  componentsPc.GPU.forEach((gpu) => {
    if (newCardConfigPc.scoreGPU >= gpu.score) {
      let adaptedConfig = configsPc.find((configPc) => {
        if (configPc.GPU.name === gpu.name) {
          return configPc;
        }
      });
      if (adaptedConfig) {
        newCardConfigPc.configPc = adaptedConfig;
        return;
      }
    }
  });

  return newCardConfigPc;
}

export default getAdaptedConfig;
