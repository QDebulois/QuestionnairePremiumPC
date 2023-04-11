import Head from "next/head";
import { useState, useEffect, useMemo } from "react";
import H1 from "@/components/Titles/H1";
import H2 from "@/components/Titles/H2";
import Form from "@/components/Form/Form";
import { Card, CardParts } from "@/components/Card/Card";
import Settings from "@/components/Settings/Settings";
import {
  initialFormSettings,
  initialComponentsSettings,
  initialConfigsPc,
  initialCardConfigPc,
  initialFormAnswers,
} from "@/data/data";
import { ConfigPc, FormSettings, ComponentCategories, CardConfingPc, FormAnswers } from "@/data/types";
import getAdaptedConfig from "@/lib/calculateScore";
import FormBody from "@/components/Form/FormBody";
import { useImmer } from "use-immer";

function Home() {
  const [componentsPc, setComponentsPc] = useState<ComponentCategories>(initialComponentsSettings);
  const [configsPc, setConfigsPc] = useState<ConfigPc[]>(initialConfigsPc);
  const [formSettings, setFormSettings] = useState<FormSettings>(initialFormSettings);

  const [formAnswers, setFormAnswers] = useImmer<FormAnswers>(initialFormAnswers);
  const [cardConfigPc, setCardConfigPc] = useState<CardConfingPc>(initialCardConfigPc);

  const newCardConfig: CardConfingPc = useMemo(() => {
    return getAdaptedConfig({ formAnswers, formSettings, componentsPc, configsPc });
  }, [formAnswers, formSettings, componentsPc, configsPc]);

  useEffect(() => {
    setCardConfigPc(newCardConfig);
  }, [newCardConfig]);

  return (
    <>
      <Head>
        <title>Test Questionnaire</title>
        <meta name="description" content="Questionnaire Premium-PC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-around gap-6 p-6 lg:px-24">
        <H1>Premium-PC</H1>

        <section className="flex flex-wrap justify-evenly gap-8">
          <Form
            title={<H2>Questions</H2>}
            body={<FormBody formSettings={formSettings} formAnswers={formAnswers} />}
            formAnswers={formAnswers}
            setFormAnswers={setFormAnswers}
          />

          <Card
            cardConfigPc={cardConfigPc}
            image={<CardParts.Image />}
            body={
              <CardParts.Body>
                <CardParts.Score />
                <CardParts.Infos />
                <CardParts.Button />
              </CardParts.Body>
            }
          />
        </section>

        <Settings
          body={
            <>
              <Settings.Form formSettings={formSettings} setFormSettings={setFormSettings} />
              <Settings.Components componentsPc={componentsPc} setComponentsPc={setComponentsPc} />
              <Settings.Configs componentsPc={componentsPc} configsPc={configsPc} setConfigsPc={setConfigsPc} />
            </>
          }
        />
      </main>
    </>
  );
}

export default Home;
