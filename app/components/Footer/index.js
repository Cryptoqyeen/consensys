"use client";

import Image from "next/image";
import Section from "../Section";
import "./index.css";
import { IconButton } from "@mui/material";
import { LinkedIn, Telegram, Twitter, Email } from "@mui/icons-material";
import BodyText3 from "../BodyText3";
import BodyText1 from "../BodyText1";

export default function Footer() {
  return (
    <footer className="w-full footer p-10 main-wrap mt-10">
      <Section>
        <div className="flex-center justify-center mb-5">
          <Image
            width={200}
            height={100}
            src="/assets/consensys.svg"
            alt="ConsensysAI logo"
            className="text-center"
          />
        </div>
        <div className="text-center flex justify-center flex-col mt-5 connect-with-team mx-auto">
          <BodyText3>CONNECT WITH US</BodyText3>
          <BodyText1 className="mt-2">Our team</BodyText1>
          <BodyText3 className="mb-5">
            Our team consists of skilled developers, DeFi experts, and
            visionaries, working in a decentralized and remote environment.
          </BodyText3>
          <a
            href="#roadmap"
            className="roadmap-btn-wrap footer p-2 mb-2 mx-auto"
            role="button"
          >
            Get In Touch
          </a>
        </div>
        <BodyText3 className="text-center">
          <a href="mailto:info@consensysai.com" className="text-center">
            info@consensysai.com
          </a>
        </BodyText3>
        <div className="flex-center gap-4 footer-icons justify-center mt-5">
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Telegram />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
        </div>
        <div className="text-center mt-5">
          <small className="text-center">
            &copy; ConsensysAI {new Date().getFullYear()}. All rights reserved.
          </small>
        </div>
      </Section>
    </footer>
  );
}
