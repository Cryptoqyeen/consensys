"use client";

import { useState } from "react";
import Image from "next/image";
import BodyText2 from "../BodyText2";
import BodyText3 from "../BodyText3";
import Section from "../Section";
import { Collapse } from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";

const ExpandMore = (props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
};

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Section className="mt-40">
      <BodyText2 id="about">About ConsensysAI</BodyText2>
      <div className="flex flex-gap-wide mt-5 hidden md:flex">
        <section>
          <BodyText3>
            ConsensysAI showcases a cutting-edge design and outstanding user
            experience. It offers users detailed project information presented
            in card format for easy comprehension. Users can effortlessly
            compare and analyze tokens using a swipe-based interface.
          </BodyText3>
          <BodyText3 className="mt-7">
            Efficiently accessing information about new projects in the
            blockchain industry is currently fragmented across multiple sources,
            causing challenges in their search and analysis. This results in
            incomplete and unreliable project information, making the investment
            process more complex and increasing the risk of losses for
            investors.
          </BodyText3>
          <BodyText3 className="mt-7">
            Access to project information is crucial for the successful
            development and widespread adoption of blockchain technologies. This
            holds significance for society as these technologies are playing an
            increasingly important role in the economy and public life.
          </BodyText3>
          <BodyText3 className="mt-7">
            ConsensysAI is a convenient and unified source of information about
            blockchain projects for potential investors and users. The social
            component of the ConsensysAI platform allows token owners to
            interact with potential investors, promoting user retention and
            creating their own community on the platform. This became possible
            through targeted adaptation of content for the ConsensysAI crypto
            community audience.
          </BodyText3>
        </section>
        <section>
          <BodyText3>
            ConsensysAI utilizes artificial intelligence for project analysis,
            evaluating their ratings, activity, and other factors. By leveraging
            the platform&apos;s tools, investors can make informed and balanced
            decisions.
          </BodyText3>
          <BodyText3 className="mt-7">
            Artificial intelligence can assist project owners in automating and
            optimizing the process of generating articles on specific subjects,
            as well as addressing user inquiries through a knowledge base, data
            analysis, and machine learning. This streamlines and simplifies the
            communication and interaction between users and the platform,
            enhancing the quality and relevance of the information provided.
          </BodyText3>
          <BodyText3 className="mt-7">
            ConsensysAI Token (COAIT) is a utility token designed to serve as a
            reflection utility for facilitating payments on the ConsensysAI
            platform. Utility tokens like COAIT typically offer specific
            functionalities tailored to the platform they are utilized on. With
            COAIT, users can engage in advertising, access additional premium
            functions, and leverage various other features provided by the
            ConsensysAI platform, benefiting both project owners and investors.
          </BodyText3>
        </section>
      </div>
      {/* //Mobile display */}
      <div className="block md:hidden">
        <BodyText3 className="mt-5">
          ConsensysAI showcases a cutting-edge design and outstanding user
          experience. It offers users detailed project information presented in
          card format for easy comprehension. Users can effortlessly compare and
          analyze tokens using a swipe-based interface.
        </BodyText3>
        <ExpandMore
          expand={isExpanded}
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          <BodyText3 className="mt-7">
            Efficiently accessing information about new projects in the
            blockchain industry is currently fragmented across multiple sources,
            causing challenges in their search and analysis. This results in
            incomplete and unreliable project information, making the investment
            process more complex and increasing the risk of losses for
            investors.
          </BodyText3>
          <BodyText3 className="mt-7">
            Access to project information is crucial for the successful
            development and widespread adoption of blockchain technologies. This
            holds significance for society as these technologies are playing an
            increasingly important role in the economy and public life.
          </BodyText3>
          <BodyText3 className="mt-7">
            ConsensysAI is a convenient and unified source of information about
            blockchain projects for potential investors and users. The social
            component of the ConsensysAI platform allows token owners to
            interact with potential investors, promoting user retention and
            creating their own community on the platform. This became possible
            through targeted adaptation of content for the ConsensysAI crypto
            community audience.
          </BodyText3>
          <BodyText3>
            ConsensysAI utilizes artificial intelligence for project analysis,
            evaluating their ratings, activity, and other factors. By leveraging
            the platform&apos;s tools, investors can make informed and balanced
            decisions.
          </BodyText3>
          <BodyText3 className="mt-7">
            Artificial intelligence can assist project owners in automating and
            optimizing the process of generating articles on specific subjects,
            as well as addressing user inquiries through a knowledge base, data
            analysis, and machine learning. This streamlines and simplifies the
            communication and interaction between users and the platform,
            enhancing the quality and relevance of the information provided.
          </BodyText3>
          <BodyText3 className="mt-7">
            ConsensysAI Token (COAIT) is a utility token designed to serve as a
            reflection utility for facilitating payments on the ConsensysAI
            platform. Utility tokens like COAIT typically offer specific
            functionalities tailored to the platform they are utilized on. With
            CAIT, users can engage in advertising, access additional premium
            functions, and leverage various other features provided by the
            ConsensysAI platform, benefiting both project owners and investors.
          </BodyText3>
        </Collapse>
      </div>
      <Image
        className="rounded-2xl mt-10"
        src="/assets/cover-image.svg"
        width={1224}
        height={480}
        alt="ConsensysAI (COAIT)"
      />
    </Section>
  );
}
