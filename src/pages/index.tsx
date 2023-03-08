import Head from "next/head";
import { useState, useEffect } from "react";
import Title from "@/components/title/title";
import Form from "@/components/form/form";
import Card from "@/components/Card/card";
import Settings from "@/components/settings";
import {
  initialFormSettings,
  initialComponentsSettings,
  initialConfigsPc,
} from "@/data/data";

function Home() {
  const [componentsPc, setComponentsPc] = useState(initialComponentsSettings);
  const [formSettings, setFormSettings] = useState(initialFormSettings);
  const [configsPc, setConfigsPc] = useState(initialConfigsPc);
  const [cardConfigPc, setValidConfig] = useState(configsPc[0]);
  const [cardScore, setScore] = useState(0);

  useEffect(() => {
    let cardScore = 1;
    Object.keys(formSettings).forEach((key) => {
      const choice = formSettings[key].choices.find(
        (choice) => choice.id === formSettings[key].answer
      );
      if (choice) {
        cardScore = cardScore * choice.score;
      }
    });
    setScore(cardScore);
    componentsPc.GPU.forEach((gpu) => {
      if (cardScore >= gpu.score) {
        const adaptedConfig = configsPc.find(
          (configPc) => configPc.GPU.name === gpu.name
        );
        if (adaptedConfig) {
          setValidConfig(adaptedConfig);
        }
        return;
      }
    });
  }, [componentsPc, configsPc, formSettings]);

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
          <Card score={cardScore} configPc={cardConfigPc} />
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
