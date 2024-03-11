import Navbar from "@/app/layouts/Navbar/Navbar";
import React from "react";

const Hero = () => {
  return (
    <section className="h-screen w-screen relative flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 lg:w-full h-full overflow-hidden  ">
        <img
          src="./Hero.png"
          alt=""
          className="lg:w-full w-screen h-full object-cover filter blur-0 brightness-75"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderBottomLeftRadius: "30%",
            borderBottomRightRadius: "30%",
          }}
        />
      </div>
      <div className="text-center">
        <h1 className="text-white lg:text-6xl text-4xl font-bold mb-8">
          Tu bienestar es <br /> nuestra prioridad
        </h1>
        <button className="bg-[#158EE2] rounded-full shadow-xl w-48 text-white p-2 text-md">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Hero;
