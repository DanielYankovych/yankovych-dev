import { Button } from "@/components/button";
import SlideInText from "@/components/slideInText";

const LINKEDIN = "https://www.linkedin.com/in/daniel-yankovych/";
const EMAIL = "mailto:d.yankovych@gmail.com";
const GITHUB = "https://github.com/DanielYankovych";

export default function Home() {
  return (
    <>
      <div className="w-full h-dvh font-fixel-extra-bold uppercase p-4 md:p-8 overflow-hidden">
        <div className="size-full flex flex-col justify-between">
          <div className="w-full flex justify-end items-center">
            <Button>Get in touch</Button>
          </div>
          <div className="w-full flex flex-col">
            <SlideInText direction="left" delay={0} classNames="mb-1 md:mb-0">
              <span className="text-red-500 text-2xl md:text-[6vw] leading-none">
                Hello, I&apos;m
              </span>
            </SlideInText>
            <SlideInText direction="left" delay={0.3}>
              <span className="text-5xl md:text-[12vw] leading-none">
                Daniyel
              </span>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.6}
              classNames="text-right -mt-1 md:-mt-4 xl:-mt-8"
            >
              <span className="text-5xl md:text-[12vw] leading-none">
                Yankovych
              </span>
            </SlideInText>
            <SlideInText
              direction="right"
              delay={0.9}
              classNames="text-right mt-1 md:mt-0"
            >
              <span className="text-red-500 text-2xl md:text-[6vw] leading-none">
                Frontend Developer
              </span>
            </SlideInText>
          </div>
          <div className="w-full" />
        </div>
      </div>
    </>
  );
}
