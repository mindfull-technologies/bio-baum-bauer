import { useState, useRef } from "react";
import { Label, TextInput, Checkbox, Button, Textarea } from "flowbite-react";
import Swal from "sweetalert2";
import { HiHome } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import { MdEmail, MdDoubleArrow } from "react-icons/md";
import { FaLocationDot, FaYoutube } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import { FaPhoneSquareAlt, FaLinkedin, FaTiktok } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";
import axios from "../utils/axiosInstance";
import EachPageHeader from "../components/EachPageHeader";
import PageBreadcrumb from "../components/PageBreadcrumb";
import treeicon from "../assets/tree.png";

import { Link } from "react-router-dom";

const Contact = () => {
  document.title = "Contact US";
  const titles = ["Contact Page", "Below, our contact details provided!"];
  const titles2 = [
    "Locate Our Green Haven",
    "Finding Us: A Map to Sustainability!",
  ];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Contact Page" };

  const [errorMsgs, setErrorMsgs] = useState([]);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const checkboxRef = useRef(false);

  const firsNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleCheckboxChange = () => {
    setIsTermsAccepted(checkboxRef.current.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = await new FormData(event.target);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
      message: formData.get("message"),
    };

    if (formData.get("agreeToPolicies")) {
      axios
        .post("/api/contact/create", data)
        .then((response) => {
          if (response.status === 201) {
            setErrorMsgs([]);
            Swal.fire({
              icon: "success",
              title:
                "Thanks for your inquiry, we will provide response for you soon",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
              customClass: {
                confirmButton: "btn-custom-class",
                title: "title-class",
              },
              buttonsStyling: false,
            });

            checkboxRef.current.checked = false;
            setIsTermsAccepted(false);
            firsNameRef.current.value = "";
            lastNameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
          }
        })
        .catch((error) => {
          setErrorMsgs([]);
          // Handle errors that occurred during the POST request
          if (error.response.status === 400) {
            setErrorMsgs(error.response.data.errors);
          }
        });
    }
  };

  return (
    <div className="text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto p-4  flex justify-center flex-col items-center">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-bottom z-[-1]  opacity-20 lg:opacity-75"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
        {/*   <div className="container mx-auto flex justify-center items-center"> */}

        <ul>
          {errorMsgs.map((error, index) => (
            <li
              key={error.path + index}
              className="flex items-center text-red-700"
            >
              <MdDoubleArrow /> <span>&nbsp;{error.msg}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col justify-start items-start gap-[2rem] w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[80%] bg-lighter-primary rounded-[15px] p-2 sm:p-8 z-9 shadow-lg  py-4 mx-auto">
        <div className=" flex flex-col lg:flex-row my-4 gap-[3rem] justify-center items-center w-[100%] xl:w-[90%] mx-auto">
          <section className="flex flex-col items-start gap-3 px-3 w-full lg:w-[50%]">
            <div className="flex items-center mb-4">
              <img
                src={treeicon}
                alt="Tree Icon"
                className="w-[40px] h-[40px] mr-2"
              />{" "}
              <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                GET IN TOUCH
              </h3>
            </div>
            <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-2">
              <span className="text-lg">
                <FaLocationDot />
              </span>
              <span className="text-lg">
                Schulgasse 9, 74336 Brackenheim, <br /> Baden-Württemberg,
                Germany
              </span>
            </p>
            <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
              <span className="text-lg">
                <AiTwotoneMail />
              </span>
              <span className="xs:text-xs text-lg">
                <a
                  href="mailto:hello@biobaumbauer.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@biobaumbauer.de
                </a>
              </span>
            </p>
            {0 === 0 ? (
              <span></span>
            ) : (
              <p className="flex flex-row w-full items-center bg-white-color shadow-md hover:shadow-lg hover:rounded-lg p-3 rounded-md gap-1">
                <span className="text-lg">
                  <FaPhoneSquareAlt />
                </span>
                <span className="text-lg">+49--------</span>
              </p>
            )}

            <p className="flex flex-row w-full justify-center items-center bg-white-color shadow-md rounded-md p-4 hover:shadow-lg hover:rounded-lg gap-2 sm:gap-5">
              <a
                href="http://"
                className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color transition duration-5000 ease-linear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="http://"
                className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color transition duration-5000 ease-linear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              {0 === 0 ? (
                <></>
              ) : (
                <a
                  href="http://"
                  className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color transition duration-5000 ease-linear"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp />
                </a>
              )}

              <a
                href="http://"
                className="rounded-full p-2 border-2 border-font-family-color text-font-family-color bg-white-color hover:bg-font-family-color hover:text-white-color transition duration-5000 ease-linear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX />
              </a>
              <a
                href="http://"
                className="rounded-full p-2 border-2 border-font-family-color bg-white-color text-font-family-color hover:bg-font-family-color hover:text-white-color transition duration-5000 ease-linear"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>
            </p>
          </section>
          <section className=" flex flex-row justify-center items-center w-full lg:w-[50%]">
            <form
              className="w-full flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="firstName"
                    value="First Name *"
                    className="text-dark-gray text-[1rem]"
                  />
                </div>
                <TextInput
                  aria-label="Type here your first name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  icon={IoMdPerson}
                  placeholder="Like: Mice"
                  ref={firsNameRef}
                  shadow
                  className="input"
                  style={{
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="lastName"
                    value="Last Name *"
                    className="text-dark-gray text-[1rem]"
                  />
                </div>
                <TextInput
                  aria-label="Type here your last name"
                  id="lastName"
                  type="text"
                  name="lastName"
                  ref={lastNameRef}
                  icon={IoMdPerson}
                  placeholder="Like: Polocy"
                  helperText={
                    <span>
                      Full Name should look like,&nbsp;
                      <span className="bg-white-color px-2 py-1 rounded-md">
                        Mice Polocy
                      </span>
                    </span>
                  }
                  shadow
                  className="input"
                  style={{
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="emailAddress"
                    value="Email Address *"
                    className="text-dark-gray text-[1rem]"
                  />
                </div>
                <TextInput
                  aria-label="Type here your email address"
                  id="emailAddress"
                  icon={MdEmail}
                  ref={emailRef}
                  type="email"
                  name="emailAddress"
                  placeholder="mice.plocy@gmail.com"
                  shadow
                  className="input"
                  style={{
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "2.5rem",
                  }}
                />
              </div>
              <div className="w-full">
                <div className="mb-2 block">
                  <Label
                    htmlFor="message"
                    value="Your message*"
                    className="text-dark-gray text-[1rem]"
                  />
                </div>
                <Textarea
                  aria-label="Type here your your message"
                  id="message"
                  placeholder="Write your message here..."
                  name="message"
                  rows={4}
                  ref={messageRef}
                  className="input focus:border-transparent dark:focus:border-transparent focus:ring-transparent dark:focus:ring-transparent !important"
                  style={{
                    borderColor: "var(--bg-header-footer)",
                    outlineColor: "var(--secondary-color)",
                    padding: "1.15rem",
                    color: "var(--font-family-color)",
                    fontSize: "1rem",
                    paddingLeft: "1rem",
                  }}
                />
              </div>
              <div className="flex items-center gap-2 ">
                <Checkbox
                  id="agree"
                  name="agreeToPolicies"
                  ref={checkboxRef}
                  onChange={handleCheckboxChange}
                  className=" border-font-family-color checked:border-none checked:outline-none checked:bg-secondary-color focus:ring-transparent dark:ring-offset-transparent !important cursor-pointer"
                />
                <Label htmlFor="agree">
                  <span className="text-font-family-color">
                    I agree with the&nbsp;
                  </span>
                  <Link
                    to="/terms"
                    className="text-secondary-color font-semibold underline"
                  >
                    terms and conditions
                  </Link>
                </Label>
              </div>
              {isTermsAccepted ? (
                <Button className="custom-button-style" type="submit">
                  send your message
                </Button>
              ) : (
                <Button disabled className="custom-button-style" type="submit">
                  send your message
                </Button>
              )}
            </form>
          </section>
        </div>
      </div>
      <div className="px-4 text-center">
        <EachPageHeader title={titles2[0]} subtitle={titles2[1]} />
      </div>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.430292021205!2d9.1054661!3d49.078463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982a23427504e1%3A0xe8756bb1ba92dd7!2sSolawi%20Zaberg%C3%A4u!5e0!3m2!1sen!2sde!4v1709384848796!5m2!1sen!2sde"
          className="w-full h-[650px] border-0 rounded-sm"
          allowFullScreen={true}
          loading="lazy"
          aria-label="Here is the map will find the route to the address!"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};
export default Contact;
