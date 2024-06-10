import EachPageHeader from "../components/EachPageHeader";
import { Card } from "flowbite-react";
import milica from "../assets/images/contributors/milica-rad.jpg";
import shaqayeq from "../assets/images/contributors/shaqayeq.jpg";
import roshini from "../assets/images/contributors/roshini.jpg";
import jamal from "../assets/images/contributors/jamal.jpg";
import simon from "../assets/images/contributors/simon.jpg";
import defaultimg from "../assets/images/contributors/default.png";
import { FaLinkedin } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
const Contributors = () => {
  document.title = "Contributors";
  const titles = ["Contributors", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Contributors" };
  return (
    <div>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="container mx-auto px-4">
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
        <div className="flex flex-col justify-center items-center mx-auto px-4 py-4 md:py-6 lg:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7">
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="Jamal H. Ahamdi"
                  height="96"
                  src={jamal}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                 Sayed Jamal H. Ahmadi
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://www.linkedin.com/in/sayed-jamal-h-ahmadi-b358a4159/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://github.com/coderahmadi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="Simon David Murray"
                  height="96"
                  src={simon}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Simon David Murray
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="http://www.linkedin.com/in/simon-murray-9a434b3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://github.com/SimonDavidMurray"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="Shaqayeq Taheri"
                  height="96"
                  src={shaqayeq}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Shaqayeq Taheri
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://www.linkedin.com/in/shaqayeq-taheri-328697254/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://github.com/Shaqayeq-taheri"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="Milica Radulovic"
                  height="96"
                  src={milica}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Milica Radulovic
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://www.linkedin.com/in/milica-radulovic-1b931780/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://github.com/Milica-Radulovic"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              </div>
            </Card>
            <Card className="max-w-sm">
              <div className="flex flex-col items-center pb-3">
                <img
                  alt="Roshini Muralidharan"
                  height="96"
                  src={roshini}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Roshini Muralidharan
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Web Developer
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://www.linkedin.com/in/roshini-muralidharan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    className="mr-2 border-2 p-2 rounded-md text-darkgreen-color bg-bg-page-color shadow-sm hover:shadow-md hover:bg-darkgreen-color hover:text-white-color transition duration-5000 ease-linear "
                    href="https://github.com/roshinimurali"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ImGithub />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contributors;
