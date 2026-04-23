import React, { useState } from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { close, logoWeb, menu } from "../assets";
import {
  navLinks,
  navigationPaths,
  personalInfo,
  publicUrls,
} from "../constants";

const registrationLinks = [
  {
    id: "paper-presentation-registration",
    title: "Paper Presentation",
    googleFormUrl: "https://forms.gle/z3UjnLK6xxXyoc9V9", // Replace with your actual Google Form URL
  },
  {
    id: "conclave-registration",
    title: "Conclave",
    googleFormUrl: "https://forms.gle/BwoRgE5d2un12tRX9", // Replace with your actual Google Form URL
  },
  /*{
    id: "workshop-registration",
    title: "Workshop",
    googleFormUrl: "", // Replace with your actual Google Form URL
  },*/
  {
    id: "poster-presentation-registration",
    title: "Poster Presentation",
    googleFormUrl: "https://forms.gle/7M6aT5fuBtNA8vSg9", // Replace with your actual Google Form URL
  },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isRegistrationDropdownOpen, setIsRegistrationDropdownOpen] = useState(false);
  const [isMobileRegistrationDropdownOpen, setIsMobileRegistrationDropdownOpen] = useState(false);


  const handleRegistrationClick = () => {
    setIsRegistrationDropdownOpen(!isRegistrationDropdownOpen);
  };

  const handleMobileRegistrationClick = () => {
    setIsMobileRegistrationDropdownOpen(!isMobileRegistrationDropdownOpen);
  };


  return (
    <nav
      className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={navigationPaths.home}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            setIsRegistrationDropdownOpen(false);
            setIsMobileRegistrationDropdownOpen(false);

          }}
        >
          <img src={logoWeb} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            {personalInfo.name} &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            link.title === "Registration" ? (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium cursor-pointer hover:text-white relative`}
                onClick={() => {
                  setActive(link.title);
                  handleRegistrationClick();
                }}
              >
                <button className="flex items-center">
                  {link.title}
                </button>
                {isRegistrationDropdownOpen && (
                  <ul
                    className="dropdown absolute top-full left-0 mt-2 p-2 bg-primary rounded-md shadow-md w-max"
                  >
                    {registrationLinks.map((regLink) => (
                      <li
                        key={regLink.id}
                        className="text-secondary text-[16px] font-medium cursor-pointer hover:text-white py-1"
                      >
                        <a
                          href={regLink.googleFormUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsRegistrationDropdownOpen(false)}

                        >
                          {regLink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium cursor-pointer hover:text-white`}
                onClick={() => {
                  setActive(link.title);
                  setIsRegistrationDropdownOpen(false); // Close dropdown when other links are clicked
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          ))}

          <li
            className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}
          >
            <a
              href={publicUrls.resume}
              download="Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Brochure
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
              setIsMobileRegistrationDropdownOpen(false); // Close mobile dropdown when toggling menu
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute top-20 right-0 black-gradient mx-4 my-2 p-6 rounded-xl z-10 min-w-[140px]`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                link.title === "Registration" ? (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } text-[18px] font-medium cursor-pointer hover:text-white relative`}
                    onClick={() => {
                      setActive(link.title);
                      handleMobileRegistrationClick();
                    }}
                  >
                    <button className="flex items-center">
                      {link.title}
                    </button>
                    {isMobileRegistrationDropdownOpen && (
                      <ul
                        className="dropdown absolute top-full left-0 mt-2 p-2 bg-primary rounded-md shadow-md w-max"
                      >
                        {registrationLinks.map((regLink) => (
                          <li
                            key={regLink.id}
                            className="text-secondary text-[16px] font-medium cursor-pointer hover:text-white py-1"
                          >
                            <a
                              href={regLink.googleFormUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setIsMobileRegistrationDropdownOpen(false)} // Close mobile dropdown after clicking a link
                            >
                              {regLink.title}
                            </a>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[18px] font-medium cursor-pointer hover:text-white`}
                  onClick={() => {
                    setActive(link.title);
                    setIsMobileRegistrationDropdownOpen(false); // Close mobile dropdown when other links are clicked
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              )
            ))}

              <li
                className={`text-secondary text-[18px] font-medium cursor-pointer hover:text-white`}
              >
                <a
                  href={publicUrls.resume}
                  download="Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
