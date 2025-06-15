import { useEffect, useState } from "preact/hooks";
import { useTypeWriter } from "../utils/typeWriter.tsx";

export default function Header() {
  const [imagePhase, setImagePhase] = useState(0);
  const displayText = useTypeWriter("Александр Калашян,", 190);

  useEffect(() => {
    const timer1 = setTimeout(() => setImagePhase(1), 700);
    const timer2 = setTimeout(() => setImagePhase(2), 2700);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const getImageSources = () => {
    const suffix = imagePhase === 1 ? "2" : "";

    return {
      jxl: `/ava/ava${suffix}.jxl`,
      webp: `/ava/ava${suffix}.jxl`,
      jpg: `/ava/ava${suffix}.jxl`,
    };
  };

  const sources = getImageSources();

  return (
    <header class="flex flex-col items-center pt-14 px-4">
      <picture class="transition-opacity duration-300">
        <source
          srcset={sources.jxl}
          type="image/jxl"
        />
        <source
          srcset={sources.webp}
          type="image/webp"
        />
        <img
          class="rounded-2xl"
          src={sources.jpg}
          alt="avatar"
          width="128"
          height="128"
        />
      </picture>
      <h1 class="max-w-2xs text-3xl mt-5 text-white">
        {displayText} <span class="text-blue">Project manager</span>
      </h1>
    </header>
  );
}
