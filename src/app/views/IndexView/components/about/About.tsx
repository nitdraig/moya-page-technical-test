import React from "react";

const About = () => {
  return (
    <section className="py-12 lg:mx-32 mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:order-1 mb-4 md:mb-0">
          <img
            src="./img2.png"
            alt="Servicios DOT"
            className="h-56 md:h-auto"
          />
        </div>
        <div className="md:w-1/2 md:order-2 text-center  lg:text-center ">
          <h3 className="lg:text-5xl text-3xl font-extrabold mb-4 text-[#626265]">
            Servicios DOT
          </h3>
          <p className="text-gray-600 text-center text-lg lg:mx-0 mx-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-[#158EE2] rounded-full shadow-xl w-48 text-white p-2 text-md">
          Ver más
        </button>
      </div>
    </section>
  );
};

export default About;
