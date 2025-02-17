import React, { useState, useEffect } from "react";
import Logo from "../../../assets/logo_new_2.svg";
import TextLogo from "../../../assets/text_logo_new.svg";
import LogoComponent from "../../atoms/LogoComponent";
import Button from "../../atoms/Button";
import { Link } from "react-router-dom";

const Navbar = ({
  isDarkMode,
  scrollToSection,
  showLogo = true,
  showButton = true,
  bgColor,
  showUnderline = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
    if (window.innerWidth >= 900) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    "jadwal pendaftaran",
    "alur pendaftaran",
    "kontak & lokasi"
  ].map((section) => (
    <p
      key={section}
      onClick={() => {
        scrollToSection(section);
        setIsMenuOpen(false);
      }}
      className={`${showUnderline ? 'navbar-item' : ''}text-base py-2`}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </p>
  ));

  return (
    <div
      className={`flex flex-row items-center justify-between w-full px-[100px] ${
        isDarkMode ? "bg-slate-800" : `${bgColor}`
      }`}
    >
      {showLogo && (
        <LogoComponent
          logoSrc={Logo}
          textLogoSrc={TextLogo}
          altText={"Edunex"}
        />
      )}

      {isMobile ? (
        <div className="flex w-full items-center justify-end">
          {/* Burger Icon */}
          <div
            className={`burger ${isMenuOpen ? "open" : ""}`}
            onClick={toggleDrawer}
          >
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      ) : (
        <div className="flex text-nowrap w-fit gap-x-12 text-base font-semibold items-center justify-end cursor-pointer px-4 bg-inherit">
          {menuItems}
        </div>
      )}
      {/* Drawer Menu */}
      {/* <div className={`drawer ${isMenuOpen ? "drawer-open" : "drawer-close"}`}>
        <div
          className={`flex flex-col items-center w-full pt-24 ${
            isDarkMode ? "bg-slate-800" : "bg-slate-200"
          }`}
        >
          {menuItems}
        </div>
      </div> */}

      {showButton && (
        <div className="w-fit h-fit">
          <Link to='/formulir-pendaftaran'>
          <Button color="primary" textColor="text-white" className="px-6">
            Isi Formulir Pendaftaran
          </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
