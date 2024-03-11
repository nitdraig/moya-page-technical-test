import React from "react";

const ServicesSection = () => {
  return (
    <section className="py-12 mx-10 -mt-36  ">
      <div className="flex flex-wrap justify-center ">
        <ServiceItem
          logo="./bandAid.svg"
          title="Atención de lesiones"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam "
        />
        <ServiceItem
          logo="./flashlight.svg"
          title="Pruebas de drogas y alcohol"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam "
        />
        <ServiceItem
          logo="./document.svg"
          title="Exámenes físicos"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam "
        />
        <ServiceItem
          logo="./medical.svg"
          title="Medicina preventiva"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam "
        />
      </div>
      <div className="text-center">
        <h3 className="text-black text-3xl font-extralight mb-8">
          Explora todos nuestros servicios
        </h3>
        <button className="bg-[#158EE2] rounded-full shadow-xl w-48 text-white p-2 text-md">
          Ver más
        </button>
      </div>
    </section>
  );
};

const ServiceItem = ({ logo, title, description }: any) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-xl p-6 h-72 flex flex-col items-center justify-center">
        <div className="rounded-full h-24 w-24 bg-[#158EE2] flex items-center justify-center  -mt-2">
          <img src={logo} alt={title} className="w-16 h-16 invert" />
        </div>
        <h3 className="text-2xl text-[#626265] font-semibold text-center mb-2">
          {title}
        </h3>
        <p className="text-lg text-[#626265] text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServicesSection;
