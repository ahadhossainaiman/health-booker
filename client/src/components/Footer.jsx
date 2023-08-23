import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-1 bg-black-100 py-8 sm:py-12">
        <div className="container mx-auto px-2">
          <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
            <div className="mx-12 px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
              <h5 className="text-xl font-bold mb-6">Features</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <NavLink to={"/"}>Home</NavLink>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <NavLink to={"/doctors"}>Doctors</NavLink>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <NavLink to={"/appointments"}>Appointments</NavLink>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <NavLink to={"/notifications"}>Notifications</NavLink>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
              <h5 className="text-xl font-bold mb-6">Resources</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Resource name
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Another resource
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">About</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Team
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Locations
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Privacy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
              <h5 className="text-xl font-bold mb-6">Help</h5>
              <ul className="list-none footer-links">
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Support
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    Help Center
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="border-b text-gray-50 border-solid border-transparent hover:border-purple-800 hover:text-purple-800"
                  >
                    <HashLink to={"/#contact"}>Contact Us</HashLink>
                  </a>
                </li>
              </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
              <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">
                Stay connected
              </h5>
              <div className="flex sm:justify-center xl:justify-start">
                <div className="social">
                  <h3>Social links</h3>
                  <ul>
                    <li classNameName="facebook ">
                      <a
                        href="https://www.facebook.com/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li classNameName="youtube">
                      <a
                        href="https://www.youtube.com/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                    <li classNameName="instagram">
                      <a
                        href="https://www.instagram.com/"
                        target={"_blank"}
                        rel="noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        Made by Asif & Sazal © {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
