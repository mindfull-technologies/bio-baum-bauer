import leavesBackground from "../assets/images/news_images/leaves_background.png";
import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { BiTagAlt } from "react-icons/bi";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../utils/axiosInstance";
import DOMPurify from "dompurify";
import EachPageHeader from "../components/EachPageHeader";
import { Breadcrumb } from "flowbite-react";
import { Link } from "react-router-dom";

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "News Article - Details";
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/newsArticle/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error("Error fetching article:", error);
        setError("Error fetching article");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  // Go back function

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading)
    return (
      <div className="text-center text-lg font-semibold mt-10">Loading...</div>
    );
  if (error)
    return (
      <div className="text-red-600 text-center text-lg font-semibold mt-10">
        {error}
      </div>
    );
  if (!article)
    return (
      <div className="text-gray-500 text-center text-lg font-semibold mt-10">
        No article found.
      </div>
    );

  // if (!article.writer)
  //   return (
  //     <div className="text-gray-500 text-center text-lg font-semibold mt-10">
  //       Writer information is not available.
  //     </div>
  //   );

  return (
    <div className="bg-bg-page-color">
      {article && (
        <div className="mt-0 mb-0">
          <Breadcrumb
            aria-label="This is Breadcrumb showing the location of current page"
            className="bg-gray-50 px-5 py-3 dark:bg-gray-800"
          >
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/news" icon={FaRegNewspaper}>
              News
            </Breadcrumb.Item>
            <Breadcrumb.Item>{article.title}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      {/* <div className=" px-20 text-center">
        <EachPageHeader title={article.title} />
      </div> */}
      <div className="container mx-auto p-3">
        <div className="bg-white mt-2 rounded-lg py-3 px-5">
          <Link
            to="/news"
            className="flex items-center w-max border-2 justify-center gap-1 px-8 h-max py-1  bg-bg-header-footer text-font-family-color rounded-[10px] hover:bg-lighter-primary transition duration-4000 ease-linear"
            aria-label="Tree page"
          >
            <MdKeyboardDoubleArrowLeft size="1rem" />
            <span className=" text-base">back</span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-3">
        {" "}
        <div className="bg-white rounded-lg shadow-lg p-2">
          {article && (
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/4 p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h1>
                <hr className="mb-2" />
                <p className="flex items-center text-lg text-gray-600 mb-4 ml-3">
                  <span className="flex items-center font-semibold gap-1">
                    <FaRegUser size="1.1rem" />
                    {article.writer ? (
                      <span>
                        {article.writer.firstName}&nbsp;
                        {article.writer.lastName}
                      </span>
                    ) : (
                      <span>No Writer Info</span>
                    )}
                  </span>
                </p>
                <p className="flex items-center text-lg text-gray-600 mb-4 ml-3">
                  <span className="flex items-center font-semibold gap-1">
                    <MdOutlineDateRange size="1.3rem" />
                    <span>{new Date(article.dateCreated).toDateString()}</span>
                  </span>
                </p>
                <hr className="mb-2" />
                <div
                  className="prose px-4 lg:prose-lg mb-6"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.content),
                  }}
                />
                <Link
                  to="/news"
                  className="flex items-center w-max border-2 justify-center gap-1 px-3 h-max py-1  bg-bg-header-footer text-font-family-color rounded-[10px] hover:bg-lighter-primary transition duration-4000 ease-linear"
                >
                  <IoMdArrowBack className="text-2xl" />
                  <span>&nbsp;Go Back</span>
                </Link>
              </div>
              <img
                className="w-full lg:w-3/4 h-auto object-cover rounded-r-lg"
                src={article.imageUrl}
                alt={article.title}
              />
            </div>
          )}
        </div>
      </div>
      <img className="w-full" src={leavesBackground} alt="Footer background" />
    </div>
  );
};

export default NewsArticle;
