import {
  CardConfingPc,
  ComponentCategories,
  ConfigPc,
  FormAnswers,
  FormSettings,
  isFormQuestionSelect,
  isFormQuestionSwitch,
} from "@/data/types";

interface IGetAdaptedConfig {
  formAnswers: FormAnswers;
  formSettings: FormSettings;
  componentsPc: ComponentCategories;
  configsPc: ConfigPc[];
}

function getAdaptedConfig({ formAnswers, formSettings, configsPc }: IGetAdaptedConfig): CardConfingPc {
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

  let configIdx = 0;
  while (newCardConfigPc.configPc.CPU.score < newCardConfigPc.scoreCPU) {
    configIdx++;
    if (configIdx == configsPc.length) break;
    newCardConfigPc.configPc = configsPc[configIdx];
  }
  while (newCardConfigPc.configPc.RAM.score < newCardConfigPc.scoreRAM) {
    configIdx++;
    if (configIdx == configsPc.length) break;
    newCardConfigPc.configPc = configsPc[configIdx];
  }
  while (newCardConfigPc.configPc.GPU.score < newCardConfigPc.scoreGPU) {
    configIdx++;
    if (configIdx == configsPc.length) break;
    newCardConfigPc.configPc = configsPc[configIdx];
  }

  return newCardConfigPc;
}

export default getAdaptedConfig;
