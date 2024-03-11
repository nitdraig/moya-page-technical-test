import React from "react";

const Footer = () => {
  return (
    <footer
      className="py-10 w-full   bg-cover bg-center"
      style={{
        backgroundImage: "url('./footer-bg.png')",
        borderTopLeftRadius: "50%",
        borderTopRightRadius: "50%",
      }}
    >
      <div className=" mx-auto flex justify-between items-center">
        <div className=" mx-auto text-center">
          <ul className="flex space-x-6 text-white ">
            <img src="./logo.png" alt="" className="w-36" />
            <li className="lg:flex hidden">Nuestra Compañía</li>
            <li className="lg:flex hidden">Nuestros Servicios</li>
            <img src="/spain.svg" className="w-6" alt="" />
            <li className="lg:flex hidden">Contáctanos</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white mt-4 ">
        © 2024 Moya Medical. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
