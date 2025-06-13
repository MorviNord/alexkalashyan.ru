import { useEffect, useState } from "preact/hooks";

export default function Header() {
  const [imagePhase, setImagePhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setImagePhase(1);

      const timer2 = setTimeout(() => {
        setImagePhase(2);
      }, 2000);

      return () => clearTimeout(timer2);
    }, 700);

    return () => clearTimeout(timer1);
  }, []);

  const getImageSources = () => {
    switch (imagePhase) {
      case 1:
        return {
          jxl: "/ava/ava2.jxl",
          webp: "/ava/ava2.webp",
          jpg: "/ava/ava2.jpg",
        };
      case 2:
      default:
        return {
          jxl: "/ava/ava.jxl",
          webp: "/ava/ava.webp",
          jpg: "/ava/ava.jpg",
        };
    }
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
        Александр Калашян, <span class="text-blue">Project manager</span>
      </h1>
    </header>
  );
}
