import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Cta } from "@/components/sections/cta";
import { Process } from "@/components/sections/process";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Cta />
    </>
  );
}
