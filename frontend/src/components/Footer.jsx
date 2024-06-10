import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import { FaExternalLinkAlt, FaAddressBook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import logoImage from "../assets/images/BioBaumBauer_Logo_Footer.svg";
import { FaLinkedin } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import jamal from "../assets/images/contributors/jamal.jpg";
import simon from "../assets/images/contributors/simon.jpg";
import milica from "../assets/images/contributors/milica-rad.jpg";
import shaqayeq from "../assets/images/contributors/shaqayeq.jpg";
import roshini from "../assets/images/contributors/roshini.jpg";
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <>
      <div className="bg-bg-header-footer text-font-family-color">
        <div className="container mx-auto flex flex-col py-10">
          <section className="w-full flex flex-col lg:flex-row items-center justify-between py-4 mb-4 px-9 gap-[3.2rem]">
            <div className="flex flex-col gap-5 max-w-md grow-2 w-full">
              <p className="flex justify-start items-center gap-2">
                <img
                  src={logoImage}
                  className="w-20 shadow-lg rounded-full"
                  alt="BioBaumBauer_Logo"
                />
                <span className="text-3xl font-main-font text-darkgreen-color">
                  Bio Baum Bauer
                </span>
              </p>
              <p className="text-justify font-sans antialiased whitespace-normal text-md md:text-lg">
                Discover the essence of sustainable living with Bio Baum Bauer.
                Join our journey of environmental stewardship, community
                engagement, and the celebration of nature's bounty. Stay
                connected and informed through our social channels and be part
                of the change.
              </p>
              <p className=" self-center text-lg font-bold">Follow Us</p>
              <div className="flex self-center lg:justify-start gap-[0.2rem] md:gap-3 text-md md:text-lg pr-4 mt-2">
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
                {/* <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a> */}
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsTwitterX />
                </a>
                <a
                  className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTiktok />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-5 max-w-md grow-1 w-full text-sm lg:text-lg ">
              <h2 className="flex items-center gap-1 text-base md:text-lg font-sans font-bold text-darkgreen-color">
                <FaExternalLinkAlt /> <span>Links to Pages</span>
              </h2>
              <div className="flex flex-row lg:flex-col flex-wrap text-base gap-5 max-w-md items-center lg:items-start justify-center">
                <Link
                  to="/"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear  "
                >
                  <MdDoubleArrow />
                  <span>Home</span>
                </Link>
                <Link
                  to="/trees"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>Trees</span>
                </Link>
                <Link
                  to="/news"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>News</span>
                </Link>
                <Link
                  to="/about"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>About</span>
                </Link>
                <Link
                  to="/gallery"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>Gallery</span>
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>FAQs</span>
                </Link>
                <Link
                  to="/contact"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />

                  <span>Contact</span>
                </Link>
                <Link
                  to="/terms"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>Terms</span>
                </Link>
                <Link
                  to="/privacy"
                  className="flex items-center gap-1  transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-white-color transition duration-5000 ease-linear "
                >
                  <MdDoubleArrow />
                  <span>Privacy</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end items-center gap-3 max-w-md grow-1 w-full">
              <div className="flex flex-col justify-center items-center gap-3 grow-1">
                <h3 className="flex items-center gap-1 text-sm md:text-lg font-sans font-bold text-darkgreen-color">
                  <FaAddressBook /> <span>Address</span>
                </h3>

                <p>
                  Schulgasse 9, 74336 Brackenheim, <br /> Baden-Württemberg,
                  Germany
                </p>
              </div>

              {/* <hr />
              <div className="flex flex-wrap gap-2 flex-col items-center">
                <p className="text-lg font-sans font-bold text-darkgreen-color">
                  Contributors
                </p>
                <Link to="/contributors">
                  <Avatar.Group>
                    <Avatar img={jamal} rounded stacked />
                    <Avatar img={simon} rounded stacked />
                    <Avatar img={milica} rounded stacked />
                    <Avatar img={roshini} rounded stacked />
                    <Avatar img={shaqayeq} rounded stacked />
                  </Avatar.Group>
                </Link>
              </div> */}
            </div>
          </section>
          <hr />
          <p className="text-center text-sm md:text-md p-4">
            COPYRIGHT<span> &copy;</span> 2023
            <span className="font-bold">BioBaumBauer. </span>
            ALL RIGHTS RESERVED
          </p>
        </div>
        {/* Icon ArrowUp, To the Top of the page */}
        <div className="arrowUp">
          <a className="iconArrowUp" href="#">
            <img src={logoImage} alt="Logo Image" className="logoImage" />
            <Fade
              delay={100}
              cascade
              damping={0.1}
              duration={2000}
              direction="up"
            >
              <MdKeyboardDoubleArrowUp className="arrow" />
            </Fade>
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
