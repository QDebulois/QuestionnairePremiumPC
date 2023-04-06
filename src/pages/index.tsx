import Head from "next/head";
import { useState, useEffect, useCallback } from "react";
import Title from "@/components/title";
import Form from "@/components/form";
import Card from "@/components/Card/Card";
import Settings from "@/components/settings";
import {
  initialFormSettings,
  initialComponentsSettings,
  initialConfigsPc,
  isFormQuestionSwitch,
  isFormQuestionSelect,
  ConfigPc,
  FormSettings,
  ComponentCategories,
  CardConfingPc,
  initialCardConfigPc,
} from "@/data/data";

function Home() {
  const [componentsPc, setComponentsPc] = useState<ComponentCategories>(
    initialComponentsSettings
  );
  const [formSettings, setFormSettings] =
    useState<FormSettings>(initialFormSettings);
  const [configsPc, setConfigsPc] = useState<ConfigPc[]>(initialConfigsPc);
  const [cardConfigPc, setCardConfigPc] =
    useState<CardConfingPc>(initialCardConfigPc);

  const calculateScore = useCallback(() => {
    let newScoreCPU = 0;
    let newScoreRAM = 0;
    let newScoreGPU = 0;

    Object.keys(formSettings).forEach((elem) => {
      const question = formSettings[elem];
      if (isFormQuestionSelect(question)) {
        const choix = question.choices.find(
          (e) => e.id === formSettings[elem].answer
        );
        if (choix) {
          newScoreCPU += choix.scoreCPU;
          newScoreRAM += choix.scoreRAM;
          newScoreGPU += choix.scoreGPU;
        }
      } else if (isFormQuestionSwitch(question) && elem === "avenir") {
        if (question.answer) {
          newScoreCPU += 1;
          newScoreRAM += 1;
          newScoreGPU += 1;
        }
      }
    });

    componentsPc.GPU.forEach((gpu) => {
      if (newScoreGPU >= gpu.score) {
        let adaptedConfig = configsPc.find((configPc) => {
          if (configPc.GPU.name === gpu.name) {
            return configPc;
          }
        });
        if (adaptedConfig) {
          setCardConfigPc({
            scoreCPU: newScoreCPU,
            scoreRAM: newScoreRAM,
            scoreGPU: newScoreGPU,
            configPc: adaptedConfig,
          });
          return;
        }
      }
    });
  }, [formSettings, componentsPc, configsPc]);

  useEffect(() => {
    calculateScore();
  }, [calculateScore]);

  return (
    <>
      <Head>
        <title>Test Questionnaire</title>
        <meta name="description" content="Questionnaire Premium-PC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-around gap-6 p-6 lg:px-24">
        <Title>Premium-PC</Title>

        <section className="flex flex-wrap justify-evenly gap-8">
          <Form formSettings={formSettings} setFormSettings={setFormSettings} />

          <Card
            cardConfigPc={cardConfigPc}
            image={<Card.CardImage />}
            body={
              <Card.CardBody>
                <Card.CardScore />
                <Card.CardInfos />
                <Card.CardButton />
              </Card.CardBody>
            }
          />
        </section>

        <Settings
          formSettings={formSettings}
          setFormSettings={setFormSettings}
          componentsPc={componentsPc}
          setComponentsPc={setComponentsPc}
          configsPc={configsPc}
          setConfigsPc={setConfigsPc}
        />
      </main>
    </>
  );
}

export default Home;
