"use client";

import { Card } from "@mui/material";
import BodyText2 from "../BodyText2";
import Section from "../Section";
import Image from "next/image";
import "./index.css";

export default function Partners() {
  return (
    <Section className={"mt-20 flex-center flex-col"}>
      <BodyText2 className="text-center mb-5">Partners</BodyText2>
      <section className="flex gap-3 md:flex-row flex-col partners">
        <div className="flex flex-col gap-3">
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_binance.svg"
            />
          </Card>
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_coinmarket.svg"
            />
          </Card>

          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_pancake.svg"
            />
          </Card>
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_uniswap.svg"
            />
          </Card>
        </div>
        <div className="flex flex-col gap-3">
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_pinksale.svg"
            />
          </Card>
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_coingecko.svg"
            />
          </Card>
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_metamask.svg"
            />
          </Card>
          <Card sx={{ minWidth: 275 }} className="p-3">
            <Image
              width={250}
              height={100}
              alt=""
              src="/assets/partner_ethereum.svg"
            />
          </Card>
        </div>
      </section>
    </Section>
  );
}
