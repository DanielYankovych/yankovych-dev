import { Button } from "@/components/button";

const LINKEDIN = "https://www.linkedin.com/in/daniel-yankovych/";
const EMAIL = "mailto:d.yankovych@gmail.com";
const GITHUB = "https://github.com/DanielYankovych";

export default function Home() {
  return (
    <div className="w-full h-dvh font-inter px-2">
      <div className="size-full flex flex-col gap-3 items-center justify-center text-center">
        <span className="font-medium text-3xl">Daniyel Yankovych's Site</span>
        <span className="text-2xl animate-pulse">Coming soon...</span>
        <div className="w-full flex justify-center items-center gap-4 mt-5">
          <Button href={LINKEDIN}>LinkedIn</Button>
          <Button href={EMAIL}>Email</Button>
          <Button href={GITHUB}>GitHub</Button>
        </div>
      </div>
    </div>
  );
}
