import BodyText2 from "../BodyText2";
import Section from "../Section";
import RoadMapItem from "./RoadMapItem";
import "./index.css";

export default function RoadMap() {
  return (
    <Section className={"roadmap-section"} id="roadmap">
      <BodyText2 className="text-center mb-8">Roadmap</BodyText2>
      <div className="roadmap-wrap">
        <RoadMapItem isAchieved>
          <h2 className="subtitle">May 2023</h2>
          <ul className="roadmap-list">
            <li>Launching of the beta version of the platform</li>
            <li>Marketing campaign</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem isAchieved>
          <h2 className="subtitle">June 2023</h2>
          <ul className="roadmap-list">
            <li>Presale</li>
            <li>Transfer liquidity to Pancakeswap</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem>
          <h2 className="subtitle">July 2023</h2>
          <ul className="roadmap-list">
            <li>Platform release and project registration on ConsensysAI</li>
            <li>AI-based popularity and rating analysis of projects</li>
            <li>Listing on Coingecko and Coinmarketcap</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem>
          <h2 className="subtitle">Q3 2023</h2>
          <ul className="roadmap-list">
            <li>
              Implementation of advertising on the platform utilizing the
              ConsensysAI token
            </li>
            <li>
              Introduction of an AI-based premium feature for project analysis
              on the platform
            </li>
            <li>
              Development of a Telegram bot for user integration and marketing
              efforts to attract new users
            </li>
          </ul>
        </RoadMapItem>
        <RoadMapItem>
          <h2 className="subtitle">Q4, 2023</h2>
          <ul className="roadmap-list">
            <li>Reaching at least 100,000 platform users</li>
            <li>Listing on one of the major CEX exchanges</li>
          </ul>
        </RoadMapItem>
        <RoadMapItem>
          <h2 className="subtitle">Q1 - Q2, 2024</h2>
          <ul className="roadmap-list">
            <li>
              Achieving a user base growth of over 500,000 on the platform
            </li>
            <li>Listing on one of the major CEX exchanges</li>
            <li>Creating a ConsensysAI application for mobile devices</li>
            <li>
              Introducing a platform-based messenger for seamless user
              communication
            </li>
          </ul>
        </RoadMapItem>
        <RoadMapItem>
          <h2 className="subtitle">Q3 - Q4, 2024</h2>
          <ul className="roadmap-list">
            <li>Introducing an AI-powered API for the crypto market</li>
            <li>Listing on one of the major CEX exchanges</li>
            <li>Reaching the number of platform users at least 1 million</li>
          </ul>
        </RoadMapItem>
      </div>
    </Section>
  );
}
