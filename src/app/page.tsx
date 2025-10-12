import Hero from "../app/components/herosection"
import Work from "../app/components/worksection"
import WhyMe from "../app/components/whyme"
import Services from "../app/components/services"

export default function Home() {
  return (  
    <>
     <Hero />
     <Services />
     <Work />
     <WhyMe />
    </>
  );
}
