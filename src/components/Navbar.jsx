// importanje vseh stvari ka do se nucale, styles za css, navLinks za podatke, slike...
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoo, menu, close } from "../assets";
import { BsInstagram } from "react-icons/bs";

const Navbar = () => {
  // State za active navlink pa toggle menu za menše naprave
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    // navbar keri je fixani gor
    <nav
      className={`${styles.paddingX} w-full flex items-center bg-transparent fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-around items-center max-w-full mx-auto">
        <Link
          to="/"
          className="flex items-center justify-start gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logoo} alt="logo" className="w-36 h-36 object-contain" />
          <p className="flex text-white text-[18px] font-semibold">
            | David Vojvodić
          </p>
        </Link>

        {/* mappanje linkov v navbar, active link spremeni barvo */}
        <ul className="list-none hidden sm:flex flex-row gap-10 justify-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* menu za menše naprave, ge se ikone spremenijo na klik */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* del z ozadnjon ge so notri linki */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-28 right-0 mx-4 my-2 min-w-[150px] z-10 rounded-xl`}
          >
            {/* s klikon na link v menuji za menše naprave se zapre menu */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-end">
          <BsInstagram />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
