import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdMenu, MdClose } from "react-icons/md";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaPlus, FaMinus, FaRegBell } from "react-icons/fa";
import logo from "../../imges/logo.svg";

const Header = ({ bgImg, title }) => {
  let location = useLocation();
  const checkLocation = (slug) => {
    if (location.pathname === slug) {
      return true;
    } else {
      return false;
    }
  };

  const [modal, setModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleLinkModal = () => {
    setLinkModal(!linkModal);
  };
  return (
    <>
      <Helmet>
        <title>{`${title.toUpperCase()} – title`}</title>
      </Helmet>
      <div className=" px-6 ">
        <div
          style={{
            backgroundImage: `url(
            ${bgImg}
          )`,
          }}
          className=" relative bg-cover  bg-bg-black/60 bg-blend-darken  text-[#0a0a0a80]  bg-bottom bg-no-repeat overflow-hidden block"
        >
          <div className="max-w-[1100px] mx-0 md:mx-auto flex items-center justify-between  ">
            {/* <div className="w-auto float-left mx-0 md:mx-auto relative z-10 py-[6%] px-3 md:px-[1rem]">
            <div className="mb-1">
              <Link to="/">
                <a
                  className="mb-1 text-white site-title tracking-[-0.03em] font-semibold   text-[2em]"
                  rel="home"
                >
                  title
                </a>
              </Link>
            </div>
      <p className="text-white font-medium">title</p>
          </div>*/}

            <div onClick={toggleModal}>
              {modal ? (
                <MdClose className="w-8 h-8 text-blue md:hidden " />
              ) : (
                <HiBars3BottomLeft className="w-10 h-10 text-blue md:hidden" />
              )}
            </div>
            <div className=" justify-center w-17 h-17">
              <img
                src={logo}
                alt="logo"
                className="h-28 w-28 fill-regal-blue "
              />
            </div>
            <div className=" ">
              <a href="#">
                <FaRegBell className="w-6 h-6 text-blue md:hidden hover:-regal-blue " />
              </a>
            </div>
          </div>
        </div>

        <header className="w-full  py-2 hidden md:block">
          <nav className="max-w-[1100px] mx-auto py-4 md:py-0  text-lg  text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <div
              className="hidden w-full md:flex md:items-center md:w-auto"
              id="menu"
            >
              <ul
                className="
        pt-4
        
        text-base text-gray-700
        md:flex
        md:justify-between 
        md:pt-0"
              >
                <li>
                  <Link to="/login">
                    <a
                      className={`header-link ${
                        checkLocation("/") ? "text-gray-300" : "text-white"
                      }`}
                    >
                      Login
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/about-me">
                    <a
                      className={`header-link ${
                        checkLocation("/about-me")
                          ? "text-gray-300"
                          : "text-white"
                      }`}
                      href="#"
                    >
                      Välj språk
                    </a>
                  </Link>
                </li>
                <li>
                  <div className="dropdown group inline  relative cursor-pointer">
                    <a
                      className={`header-link group-hover:text-white/80 ${
                        checkLocation("/services")
                          ? "text-gray-300"
                          : "text-white"
                      }`}
                    >
                      Installera mätare
                    </a>
                    <div className="dropdown-menu top-7 absolute  h-auto flex pt-4 group-hover:block  transition-all max-h-screen ease-out duration-300 ">
                      <ul className=" block w-full bg-black shadow p-8">
                        <div>
                          <li
                            id="menu-item-89"
                            className="menu-item menu-item-89"
                          >
                            <Link to="/about-me">
                              <a>test</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-96"
                            className="menu-item menu-item-96"
                          >
                            <Link to="/about-me">
                              <a>test</a>
                            </Link>
                          </li>
                          <li
                            id="menu-item-97"
                            className="menu-item menu-item-97"
                          >
                            <Link to="/about-me">
                              <a>test</a>
                            </Link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/invite">
                    <a
                      className={`header-link ${
                        checkLocation("/paragraphs")
                          ? "text-gray-300"
                          : "text-white"
                      }`}
                      href="#"
                    >
                      Bjuda in
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/setting">
                    <a
                      className={`header-link ${
                        checkLocation("/") ? "text-gray-300" : "text-white"
                      }`}
                    >
                      Inställiningar
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        {/* monile nav */}
        {modal ? (
          <nav
            id="site-navigation"
            className="main-navigation open bg-white rounded-md text-regal-blue font-semibold  p-6 mb-4"
          >
            <div className="menu-menu-1-container">
              <ul id="menu-menu-1" className="menu">
                <li
                  id="menu-item-93"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-93"
                >
                  <Link to="/">
                    <a aria-current="page">Home</a>
                  </Link>
                </li>
                <li
                  id="menu-item-93"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-93"
                >
                  <Link to="/login">
                    <a aria-current="page">Logga In</a>
                  </Link>
                </li>
                <li
                  id="menu-item-88"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88"
                >
                  <Link to="/about-me">
                    <a>Välj språk</a>
                  </Link>
                </li>
                <li
                  id="menu-item-88"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-88"
                >
                  <Link to="/setting">
                    <a aria-current="page">INSTÄLLNINGAR</a>
                  </Link>
                </li>
                <li className="bell">
                  <div className="flex justify-center items-center"></div>
                </li>
                <li id="menu-item-292" className="menu-item ">
                  <div className="flex justify-between items-center">
                    <a>Tjänster</a>
                    <div onClick={toggleLinkModal}>
                      {linkModal ? (
                        <FaMinus className="w-4 h-4 text-white" />
                      ) : (
                        <FaPlus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </div>
                  {linkModal ? (
                    <ul className="sub-menu indent-2">
                      <li
                        id="menu-item-89"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-89"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-90"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-90"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-91"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-91"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-92"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-92"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-94"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-94"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-95"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-95"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-96"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                      <li
                        id="menu-item-97"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"
                      >
                        <Link to="/about-me">
                          <a>test</a>
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li
                  id="menu-item-98"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-98"
                >
                  <Link to="/paragraphs">
                    <a>Installera mätare</a>
                  </Link>
                </li>
                <li
                  id="menu-item-291"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-291"
                >
                  <Link to="/invite">
                    <a>Bjuda in</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        ) : null}

        {/* end */}
      </div>
    </>
  );
};

export default Header;
