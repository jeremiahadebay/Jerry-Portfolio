import Hero from "../app/components/herosection"
import Work from "../app/components/worksection"
import WhyMe from "../app/components/whyme"
import Services from "../app/components/services"
import Card from "../app/components/PortfolioCard"
import Testimonials from "../app/components/testimonials"

export default function Home() {
  return (  
    <>
     <Hero />
     <Services />
     <Work />
     <WhyMe />
     <Card />
     <Testimonials />
    </>
  );
}
