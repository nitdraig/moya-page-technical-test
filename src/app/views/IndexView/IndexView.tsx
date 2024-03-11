import Footer from "@/app/layouts/footer/Footer";
import React from "react";
import { About, Hero, ServicesSection } from "./components";

const IndexView = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <About />
      <Footer />
    </>
  );
};

export default IndexView;
