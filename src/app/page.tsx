import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Clients } from "@/components/sections/clients";
import { Portfolio } from "@/components/sections/portfolio";
import { Cta } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <Cta />
      {/* <Clients /> */}
    </>
  );
}
