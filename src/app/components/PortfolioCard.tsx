"use client";
import PortfolioCard from "../components/card";

export default function PortfolioSection() {
  return (
    <section className="flex justify-center py-20">
      <div className="container px-4">

        <h1 className="font-semibold text-[#344054] text-3xl font-600">
        Lets have a look at <br />
         my  
        <span className="text-[#FD853A]">
         Portfolio
        </span>
      </h1>

        <PortfolioCard/>
      </div>
    </section>
  );
}