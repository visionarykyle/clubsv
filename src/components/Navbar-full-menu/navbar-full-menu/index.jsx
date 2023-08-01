/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import Split from "../../Split";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    handleFullScreenNavbar();
    
    const handleMenuToggle = () => {
      const menu = document.querySelector('.hamenu');
      const isMenuOpen = menu.classList.contains('open');
      
      if (isMenuOpen) {
        // Wait for the menu transition to finish before starting the paragraph animation
        setTimeout(() => {
          paragraphRef.current.classList.add('animate');
        }, 600); // Adjust this delay to match your menu transition duration
      } else {
        paragraphRef.current.classList.remove('animate');
      }
    };

    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('click', handleMenuToggle);

    return () => {
      menuIcon.removeEventListener('click', handleMenuToggle);
    };
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                      <h4>
                        <a className="link">
                          <span className="nm">01.</span>About
                        </a>
                      </h4>
                      <p ref={paragraphRef} className="paragraph animation">Stripperville, also known as The SV, is an innovative web3 project that has experienced tremendous success as a staking game on the Ethereum blockchain. In its next phase, Stripperville is ushering in a new era by expanding its offering with a new premier membership which will give instant benefits and access to its members unlike any other project in the space. It will create a new tokenized ecosystem where holders can find entertainment through casino games, access exclusive video content featuring real adult performers, and access to future perks and rewards. Welcome to The SV.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">svclub@visionarystudios.io</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
