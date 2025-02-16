import { Companies } from "@/components/homepage/companies/companies";
import { Footer } from "@/components/homepage/footer/footer";
import Header from "@/components/homepage/header/header";
import { HeroSection } from "@/components/homepage/herosection/hero-section";
import { MainTitle } from "@/components/homepage/herosection/main-title";
import { LawSection } from "@/components/homepage/lawSection/law-section";
import { ProcessComponent } from "@/components/homepage/processSection/process-section";
import { ProcessDescription } from "@/components/homepage/processSection/process-description";
import { ProcessHeading } from "@/components/homepage/processSection/process-head";
import { Product } from "@/components/homepage/processSection/product";
import { Promotion } from "@/components/homepage/processSection/promotion";
import { WhyChooseUs } from "@/components/homepage/whychooseus/why-choose-us";
import React from "react";

export default function Page(): React.JSX.Element{
  return(
      <>
      <HeroSection/>
      <Companies/>
      <ProcessComponent/>
      <LawSection/>
      <WhyChooseUs/>
      <Footer/>
      </>
  )
}