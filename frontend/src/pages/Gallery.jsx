import { useState, useEffect } from "react";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";
import closeMenu from "../assets/images/close_menu.svg";
import { Fade } from "react-awesome-reveal";
import { HiHome } from "react-icons/hi";
import PageBreadcrumb from "../components/PageBreadcrumb";
import DefaultLoader from "../components/DefaultLoader";
import axios from "../utils/axiosInstance";

const Gallery = () => {
  document.title = "Gallery";
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAllImages, setShowAllImages] = useState(window.innerWidth > 1000);
  const [selectedIndex, setSelectedIndex] = useState(null); // Add this line
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("No image available yet!");

  /* Getting Gallery from Database! */
  const getGalleryImage = () => {
    try {
      axios
        .get(`/api/gallery`)
        .then((response) => {
          if (response.status === 200) {
            setGallery(response.data);
            setIsLoading(false);
            setError("");
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            setError("Data was not brought");
          }
        });
    } catch (error) {
      console.error("Error fetching Images:", error.message);
      throw error;
    }
  };

  /* Handele ShowAllImages and ShowFewerImages on Screens <= 1024 */
  useEffect(() => {
    getGalleryImage();
    const handleResize = () => {
      if (window.innerWidth > 1000 && !showAllImages) {
        setShowAllImages(true);
      } else if (window.innerWidth <= 1024 && showAllImages) {
        setShowAllImages(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showAllImages]);

  const toggleShowAllImages = () => {
    setShowAllImages(!showAllImages);
  };

  const filteredGallery = showAllImages ? gallery : gallery.slice(0, 6);

  /* Handle Open Image */
  const openImage = (img) => {
    setSelectedImg(img);
  };

  /* Handle Close Image */
  const closeImage = () => {
    setSelectedImg(null);
  };

  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Gallery" };

  if (isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <DefaultLoader errorMsg={error} />
      </div>
    );
  }

  return (
    <div className="bg-bg-page-color text-font-family-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div className="relative w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex">
        {/* Overlay with background image and opacity */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-top"
          style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
        ></div>
        <div className="relative z-9">
          <h2 className="text-5xl md:text-7xl mt-[38px] md:mt-[68px] lg:mt-[88px] xl:mt-[108px] mb-[15px] text-center font-main-font tracking-wide text-[#5A6448]">
            Gallery
          </h2>
          {/* Gallery Page Description */}
          <p className="text-center w-[90%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto text-font-family-color text-md lg:text-xl xl:text-2xl mb-[25px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
            Welcome to our gallery, where each tree tells a story of growth,
            resilience, and the enduring bond between nature and us. This
            collection of images captures the heart of our tree sponsorship
            program - a testament to the positive impact we can make on the
            environment and future generations. Journey through the seasons with
            us and witness the remarkable transformation of each tree, fostered
            by the care and dedication of our community of sponsors.
          </p>
          {/* Image content */}
          <Fade delay={100} cascade damping={0.1} duration={3000}>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 md:px-10 lg:px-20 xl:px-40">
              {filteredGallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative cursor-pointer border border-bg-header-footer overflow-hidden"
                  onClick={() => openImage(image)}
                  style={{
                    backgroundImage: `url(${image.image})`,
                    backgroundSize: "cover",
                    borderWidth: "2px",
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onMouseLeave={() => setSelectedIndex(null)}
                >
                  <img
                    src={image.image}
                    alt={`Image ${image.image}`}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                  <div
                    className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 transition-transform duration-300 ${
                      selectedIndex === index ? "scale-100" : "scale-0"
                    }`}
                  >
                    <p className="text-white text-center text-xl md:text-base lg:text-lg whitespace-normal">
                      {image.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Fade>
          {/* Toggle Button for Show All/Fewer Images */}
          <button
            onClick={toggleShowAllImages}
            className="block lg:hidden mx-auto px-8 py-2 mt-4 bg-bg-header-footer text-font-family-color rounded-[10px]   hover:bg-lighter-primary transition duration-4000 ease-linear"
            aria-label="Show All/Fewer Images"
          >
            {showAllImages ? "Show Fewer Photos" : "Show All Images"}
          </button>
        </div>
        {/* Modal for Selected Image */}
        {selectedImg && (
          <div
            className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-[99]"
            onClick={closeImage}
          >
            <Fade delay={100} cascade damping={0.1} duration={1000}>
              <div
                className="bg-white p-2 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end p-2 mb-2">
                  {/* Close Menu Button */}
                  <button
                    onClick={closeImage}
                    className="text-lg font-bold w-[25px] h-[25px]"
                    aria-label="Close modal"
                  >
                    <img src={closeMenu} alt="Close Menu" />
                  </button>
                </div>
                <img
                  src={selectedImg.image}
                  alt={`Selected Image ${selectedImg.title}`}
                  className="w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]"
                  onDoubleClick={closeImage}
                />
                {/* Image Title */}
                <div className="text-center p-2 absolute bottom-0 left-0 right-0">
                  <p className="bg-white bg-opacity-80 p-4 text-dark-gray text-xl">
                    {selectedImg.title}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        )}
      </div>
    </div>
  );
};
export default Gallery;
