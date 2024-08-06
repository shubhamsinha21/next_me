import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `A Passionate Software Engineer who is eager to learn and create an impact.`;

function HeroText() {
  return <TextGenerateEffect words={words} />;
}

export default HeroText;
