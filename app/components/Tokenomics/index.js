"use client";
import "./index.css";
import Section from "../Section";
import BodyText3 from "../BodyText3";
import BodyText1 from "../BodyText1";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const tokenomics = {
  presale: 41,
  marketing: 5,
  cexListing: 5,
  partnership: 8,
  mobileApp: 2,
  burn: 39,
};

const data = {
  labels: [
    `Presale ${tokenomics.presale}%`,
    `Marketing ${tokenomics.marketing}%`,
    `CEX listings ${tokenomics.cexListing}%`,
    `Partnership ${tokenomics.partnership}%`,
    `Mobile app ${tokenomics.mobileApp}%`,
    `Burn ${tokenomics.burn}%`,
  ],
  datasets: [
    {
      label: "Token Allocation",
      data: [
        tokenomics.presale,
        tokenomics.marketing,
        tokenomics.cexListing,
        tokenomics.partnership,
        tokenomics.mobileApp,
        tokenomics.burn,
      ],
      backgroundColor: [
        "rgba(106, 132, 255, 0.7)",
        "rgba(244, 104, 135, 0.7)",
        "rgba(79, 220, 184, 0.7)",
        "rgba(141, 176, 255, 0.7)",
        "rgba(238, 133, 68, 0.7)",
        "rgba(224, 1, 14, 0.7)",
      ],
      borderColor: [
        "rgba(106, 132, 255, 1)",
        "rgba(244, 104, 135, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(141, 176, 255, 1)",
        "rgba(238, 133, 68, 1)",
        "rgba(224, 1, 14, 1)",
      ],
      borderWidth: 2,
    },
  ],
};

const ColorText = ({ text = "", color = "" }) => (
  <span className="body-text3 fw-600" style={{ color: color }}>
    {text}%
  </span>
);

const TOTAL_SUPPLY = 3000000000;

const TokenText = ({ percent, color, title }) => {
  const amount = (percent / 100) * TOTAL_SUPPLY;

  return (
    <div className="flex gap-3">
      <ColorText text={percent} color={color} />
      <BodyText3>{title}</BodyText3>
      <BodyText3 className="fw-600">
        {new Intl.NumberFormat().format(amount).replace(/,/g, "  ")}
      </BodyText3>
    </div>
  );
};

export default function Tokenomics() {
  return (
    <Section className={"mt-24"}>
      <div className="mx-auto w-full">
        <BodyText3 className="uppercase text-center">Allocation</BodyText3>
        <BodyText1 className="mt-5 text-center">Tokenomics</BodyText1>
      </div>
      <section className="flex-center gap-3 md:flex-row flex-col mt-5">
        <div className="doughnut-chart flex-center">
          <Doughnut data={data} />
        </div>
        <div>
          <BodyText3 className="fw-600 fs-16">
            Total ConsensysAI Tokens (COAIT):{" "}
            <span className="token-supply">3 000 000 000</span>
          </BodyText3>
          <BodyText3 className="fw-600 fs-16 mt-5">Token allocation</BodyText3>
          <section className="mt-3 flex gap-3 flex-col md:flex-row">
            <div className="pr-5 md:border-r-2 md:border-gray-200">
              <TokenText
                percent={tokenomics.presale}
                color={"rgba(106, 132, 255, 1)"}
                title={"Presale"}
              />
              <TokenText
                percent={tokenomics.marketing}
                color={"rgba(244, 104, 135, 1)"}
                title={"Marketing"}
              />
              <TokenText percent={7} color={"green"} title={"CEX listings"} />
              <TokenText
                percent={tokenomics.partnership}
                color={"rgba(141, 176, 255, 1)"}
                title={"Partnership"}
              />
              <TokenText
                percent={tokenomics.mobileApp}
                color={"rgba(238, 133, 68, 1)"}
                title={"Mobile app"}
              />
              <TokenText
                percent={tokenomics.burn}
                color={"rgba(224, 1, 14, 1)"}
                title={"Burn"}
              />
            </div>
            <div>
              <BodyText3 className="fw-600 fs-16">Total supply:</BodyText3>
              <ul className="supply-info-list">
                <li>3 000 000 000 COAIT</li>
                <li>No minting function</li>
                <li>Utility token</li>
                <li>Total tax 3%</li>
                <li>Affiliate program 5%</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </Section>
  );
}
