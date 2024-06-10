import { useEffect, useState } from "react";
import axios from "../utils/axiosInstance";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { GrNext, GrPrevious } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { useMediaQuery } from "react-responsive";
import PageBreadcrumb from "../components/PageBreadcrumb";
import EachPageHeader from "../components/EachPageHeader";
import { Fade } from "react-awesome-reveal";
import newSFooterImg from "../assets/images/news_images/leaves_background.png";
import backgroundImage from "../assets/images/leaves_background_03.webp";
import DefaultLoader from "../components/DefaultLoader";

const News = () => {
  const titles = [
    "Bio Baum News",
    "Discover the Latest Stories and Updates from Our Tree Sponsorship Program!",
  ];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "News" };

  const [newsItems, setNewsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("No data available yet!");
  const [totalNews, setTotalNews] = useState(0);
  //pagination
  const [skip, setSkip] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(
    useMediaQuery({ query: "(max-width: 768px)" })
  );
  const limit = isSmallScreen ? 4 : 8;

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  const humanReadableDate = (date) => {
    const newDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return newDate;
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize); // add an event listener for the resize event on the window object.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handlePrev = () => {
    const newSkip = skip - limit;
    if (newSkip < 0) {
      setSkip(0);
    } else {
      setSkip(newSkip);
    }
  };

  const handleNex = () => {
    const newSkip = skip + limit;
    if (newSkip >= totalNews) {
      setSkip(skip);
    } else {
      setSkip(newSkip);
    }
  };
  const getNewsArticles = () => {
    try {
      axios
        .get(`/api/newsArticle/?limit=${limit}&skip=${skip}`)
        .then((response) => {
          if (response.status === 200) {
            setNewsItems(response.data.articles);
            setTotalNews(response.data.total);
            setIsLoading(false);
            setError("");
          }
        })
        .catch((error) => {
          if (error.response.status === 500) {
            setError("No data available yet!");
          }
        });
    } catch (error) {
      console.error("Error fetching NewsArticles:", error.message);
    }
  };

  useEffect(() => {
    document.title = "News";
    getNewsArticles();
  }, [skip, isSmallScreen]); // this func is updated based on changes in skip and isSmallScreen

  if (isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <DefaultLoader errorMsg={error} />
      </div>
    );
  }

  return (
    <div className="bg-bg-page-color">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      {/* Overlay with background image and opacity */}
      <div
        className="absolute left-0 w-full h-[50%] bg-cover bg-no-repeat bg-center bg-bg-header-footer"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.1,
        }}
      ></div>
      <EachPageHeader title={titles[0]} subtitle={titles[1]} />
      <div className="container flex justify-center mx-auto text-2xl lg:text-3xl pl-4">
        <h2>
          Showing {skip + 1} to {Math.min(skip + limit, totalNews)} of{" "}
          {totalNews} News Articles
        </h2>
        <p>{error}</p>
      </div>
      <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8">
        <Fade delay={100} cascade damping={0.1} duration={3000}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {newsItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg hover:rounded-lg overflow-hidden"
              >
                <Link to={`/news/${item._id}`}>
                  <img
                    className="w-full h-48 object-cover" // Fixed height for all news thumbnail images
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </Link>
                <div className="flex flex-col justify-between p-5 h-full">
                  <div>
                    <Link to={`/news/${item._id}`}>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </Link>
                    <p className="text-s text-lg font-bold py-2 text-gray-400 pt-1">
                      {humanReadableDate(item.dateCreated)}
                    </p>
                    <p className="hidden lg:flex mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.description.length > 100
                        ? `${item.description.slice(0, 100)}...`
                        : item.description}
                    </p>
                  </div>
                  <Link
                    to={`/news/${item._id}`}
                    className="inline-flex items-center py-1 text-s font-medium text-center text-secondary-color hover:underline mt-4"
                  >
                    Continue Reading <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      {/* pagination buttons */}
      <div className="text-2xl md:text-2xl flex justify-center m-4 text-font-family-color gap-10">
        <button
          onClick={handlePrev}
          disabled={skip === 0}
          className={skip === 0 ? "disabledBtn" : "activeBtn"}
        >
          <GrPrevious />
        </button>
        <button
          onClick={handleNex}
          disabled={skip + limit >= totalNews}
          className={skip + limit >= totalNews ? "disabledBtn" : "activeBtn"}
        >
          <GrNext />
        </button>
      </div>
      {/* Footer Image */}
      <img
        className="bg-bg-page-color w-full "
        src={newSFooterImg}
        alt="News Footer Image"
      />
    </div>
  );
};

export default News;
