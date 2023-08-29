import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import Myimg from "./bg.jpg";
import { Link } from "react-router-dom";
import Brand_Nav from "./Brand_Nav";
import React, { useEffect } from "react";
import gsap from "gsap";

function Front_page() {
  const { setBrandType } = Brand_Nav(); // Call the function to get the context values

  const handleMobileClick = () => {
    setBrandType("mobile");
  };

  const handleLaptopClick = () => {
    setBrandType("laptop");
  };

  return (
    <div className="front_page" style={frontPageStyle}>
      <section className="mt-12 lg:mt-24">
        <div
          className="bg-black/75 text-white -skew-y-1 border-t-4 border-b-4 border-white/60"
          style={sectionStyle}>
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-10 text-center lg:py-20">
              <div className="w-full px-4 lg:w-1/2 lg:px-0">
                <div className="mb-8">
                  <h2 className="text-5xl lg:text-5xl font-bold mb-3">
                    M O B T O P . P K
                  </h2>
                  <p className="text-lg py-3 lg:text-xl text-white/85">
                    Select the category you want to choose:
                  </p>

                  <div className="flex justify-center space-x-24 mt-6">
                    <Link
                      to="/home"
                      className="border-b border-white p-3 px-6 border-2 text-center flex flex-col items-center hover:font-bold hover:bg-white hover:text-black"
                      style={categoryLinkStyle}
                      onClick={handleMobileClick}>
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        className="mr-2"
                        size="2x"
                      />
                      <span className="text-xl "> Mobile </span>
                    </Link>
                    <a
                      href="/home"
                      className="p-3 px-6 pb-2 border-2 border-b border-white hover:bg-white hover:text-black hover:font-bold"
                      style={categoryLinkStyle}
                      onClick={handleLaptopClick}>
                      <FontAwesomeIcon
                        icon={faLaptop}
                        className="mr-2"
                        size="2x"
                      />
                      <br />
                      <span className="text-xl"> Laptop </span>
                    </a>
                  </div>
                </div>

                <div className="text-xl">
                  <p>
                    Can't find what you're looking for?{" "}
                    <br className="sm:hidden" />
                    <a href="#" className="border-b border-white pb-1">
                      Check Mobtop.pk for amazing products
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const frontPageStyle = {
  backgroundImage: `url(${Myimg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
};

const sectionStyle = {
  background: "rgba(0, 0, 0, 0.75)",
  borderColor: "white",
  transform: "skewY(-1deg)",
};

const categoryLinkStyle = {
  borderColor: "white",
};

export default Front_page;
