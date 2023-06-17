import Image from "next/image";
import BodyText1 from "../BodyText1";
import BodyText3 from "../BodyText3";
import Section from "../Section";
import "./index.css";

export default function MainIntro() {
  return (
    <Section className={"mt-32 flex-center flex-gap-wide main-intro"}>
      <div>
        <BodyText1>
          ConsensysAI is the world&apos;s AI powered analytics platform
        </BodyText1>
        <BodyText3 className={"mt-3"}>
          ConsensysAI is the world&apos;s AI powered analytics platform built
          for the blockchain and web 3.0 investors. The platform aims to
          streamline project-investor interaction by offering comprehensive
          project analysis and facilitating investment attraction.
        </BodyText3>
        <a
          target="_blank"
          href="https://bscscan.com/token/0xad67b1583086b44837cdf3750d5661e90a6b2cab"
          className="btn contract-btn-outline"
        >
          Contract
        </a>
        <BodyText3 className={"mt-1"}>
          - Invest 5 BNB into the presale and get a premium token analysis
          program with AI for a whole year at no cost.
        </BodyText3>
        <BodyText3 className={"mt-1"}>
          - Bring in others and earn 5% through the Pinksale referral program.
        </BodyText3>
      </div>
      <Image
        src="/assets/presale-img.png"
        width={524}
        height={1000}
        alt="."
        className="intro-img"
      />
    </Section>
  );
}
