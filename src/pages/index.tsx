import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Title from "@/components/title";
import Form from "@/components/form";
import Card from "@/components/Card";
import Settings from "@/components/settings";
import {
  initialFormSettings,
  initialComponentsSettings,
  initialConfigsPc,
  isFormQuestionSelect,
  isFormQuestionSwitch,
} from "@/data/data";

function Home() {
  const [componentsPc, setComponentsPc] = useState(initialComponentsSettings);
  const [formSettings, setFormSettings] = useState(initialFormSettings);
  const [configsPc, setConfigsPc] = useState(initialConfigsPc);
  const [cardConfigPc, setValidConfig] = useState(configsPc[0]);

  const [scoreCPU, setScoreCPU] = useState(0);
  const [scoreRAM, setScoreRAM] = useState(0);
  const [scoreGPU, setScoreGPU] = useState(1);

  const calculateGpuScore = useCallback(() => {
    let gpu = 1;
    Object.keys(formSettings).forEach((key) => {
      const formQuestion = formSettings[key]
      if (isFormQuestionSelect(formQuestion)) {
        const choice = formQuestion.choices.find(
          (choice) => choice.id === formQuestion.answer
        );
        if (choice) {
          gpu = gpu * choice.scoreGPU;
        }
      }
    });
    setScoreGPU(gpu);
  }, [formSettings]);

  const calculateCpuScore = useCallback(() => {
    let cpu = 0;
    if (scoreGPU <= 19) {
      cpu += 1;
    } else if (scoreGPU <= 39) {
      cpu += 2;
    } else if (scoreGPU <= 99) {
      cpu += 3;
    } else if (scoreGPU <= 159) {
      cpu += 4;
    } else {
      cpu += 5;
    }
    Object.keys(formSettings).forEach((key) => {
      const formQuestion = formSettings[key]
      if (isFormQuestionSelect(formQuestion)) {
        const choice = formQuestion.choices.find(
          (choice) => choice.id === formQuestion.answer
        );
        if (choice) {
          cpu += choice.scoreCPU;
        }
      } else if (isFormQuestionSwitch(formQuestion) && key === "avenir") {
        if (formQuestion.answer) cpu += 1
      }
    });
    setScoreCPU(cpu);
  }, [scoreGPU, formSettings]);

  const calculateRamScore = useCallback(() => {
    let ram = 0;
    if (scoreCPU <= 1) {
      ram += 1;
    } else if (scoreCPU <= 3) {
      ram += 2;
    } else if (scoreCPU === 4) {
      ram += 3;
    } else {
      ram += 4;
    }
    Object.keys(formSettings).forEach((key) => {
      const formQuestion = formSettings[key]
      if (isFormQuestionSelect(formQuestion)) {
        const choice = formQuestion.choices.find(
          (choice) => choice.id === formQuestion.answer
        );
        if (choice) {
          ram += choice.scoreRAM;
        }
      }
    });
    setScoreRAM(ram);
  }, [scoreCPU, formSettings]);

  const findAdaptedConfig = useCallback(() => {
    componentsPc.GPU.forEach((gpu) => {
      if (scoreGPU >= gpu.score) {
        let configIdx = 0;
        let adaptedConfig = configsPc.find(
          (configPc, idx) => {
            if (configPc.GPU.name === gpu.name) {
              configIdx = idx
              return configPc
            }
          }
        );
        if (adaptedConfig) {
          while (adaptedConfig.CPU.score < scoreCPU) {
            configIdx++
            if (configIdx == configsPc.length ) break
            adaptedConfig = configsPc[configIdx]
          }
          setValidConfig(adaptedConfig);
        }
        return;
      }
    });
  }, [componentsPc, configsPc, scoreGPU, scoreCPU]);

  useEffect(() => {
    calculateCpuScore();
    calculateRamScore();
    calculateGpuScore();
    findAdaptedConfig();
  }, [
    calculateCpuScore,
    calculateRamScore,
    calculateGpuScore,
    findAdaptedConfig,
  ]);

  return (
    <>
      <Head>
        <title>Test Questionnaire</title>
        <meta name="description" content="Questionnaire Premium-PC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-around gap-6 p-6 lg:px-24">
        <Title text={"Premium-PC"} />
        <section className="flex flex-wrap justify-evenly gap-8">
          <Form formSettings={formSettings} setFormSettings={setFormSettings} />
          <Card
            scoreCPU={scoreCPU}
            scoreRAM={scoreRAM}
            scoreGPU={scoreGPU}
            configPc={cardConfigPc}
          />
        </section>
        <Settings
          formSettings={formSettings}
          setFormSettings={setFormSettings}
          componentsPc={componentsPc}
          setComponentsPc={setComponentsPc}
          configsPc={configsPc}
          setConfigsPc={setConfigsPc}
        ></Settings>
      </main>
    </>
  );
}

export default Home;
