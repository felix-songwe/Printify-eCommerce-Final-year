import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">
            Printify,
          </span>{" "}
          your premier destination for high-quality printers in Zambia. At
          Printify, we pride ourselves on offering a diverse range of
          state-of-the-art printers designed to meet all your printing needs,
          whether for home, office, or professional use. <br />
          <br />
          <span className="text-primeColor font-semibold text-lg">
            Our Mission
          </span>{" "}
          <br />
          Our mission is to provide reliable and innovative printing solutions
          that make your life easier and more productive. We believe in the
          power of technology to transform the way you print, and we're
          committed to bringing you the best products on the market. <br />
          <br />
          <span className="text-primeColor font-semibold text-lg">
            Why Choose Printify
          </span>{" "}
          <br />
          <li>
            Wide Selection: From compact home printers to robust office
            machines, we have a printer for every requirement. <br />
          </li>
          <li>
            Modern Design: Our printers not only perform exceptionally but also
            complement your modern aesthetic. <br />
          </li>
          <li>
            Quality Assurance: We partner with top brands to ensure every
            printer we sell meets our high standards of quality and reliability.{" "}
            <br />
          </li>
          <li>
            Customer Support: Our knowledgeable team is always ready to assist
            you, providing expert advice and support to help you find the
            perfect printer.
          </li>{" "}
          <br />
          <span className="text-primeColor font-semibold text-lg">
            Our Story
          </span>{" "}
          <br />
          Founded in the heart of Zambia, Printify was created with a passion
          for technology and a commitment to serving our community. We
          understand the unique needs of our customers and strive to offer
          products and services that exceed expectations. <br />
          <br />
          <span className="text-primeColor font-semibold text-lg">
            Visit Us
          </span>{" "}
          <br />
          Explore our wide range of printers online or visit our store to
          experience our products firsthand. At Printify, we're here to make
          your printing experience as seamless and efficient as possible. Thank
          you for choosing Printify, where quality and innovation meet.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
