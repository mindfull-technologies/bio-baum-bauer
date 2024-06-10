/* eslint-disable no-empty-pattern */

import { HiHome } from "react-icons/hi";
import axios from "../utils/axiosInstance";
import { GrNext, GrPrevious } from "react-icons/gr";
import "../assets/styles/Faq.css";
import backgroundImage from "../assets/images/leaves_background_02.webp";
import PageBreadcrumb from "../components/PageBreadcrumb";
import DefaultLoader from "../components/DefaultLoader";
import EachPageHeader from "../components/EachPageHeader";
import { useState, useEffect } from "react";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import FaQItem from "../components/FaQItem";

const Faq = () => {
  const titles = ["FAQ", "We have summarized your inquiries as following!"];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "FAQ" };

  const limit = 5;
  const [skip, setSkip] = useState(0);
  const [faqs, setFaqs] = useState([]);
  const [err, setErr] = useState("No data available yet!");
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handlePrev = () => {
    const newSkip = skip - limit;
    if (newSkip <= 0) {
      setSkip(0);
    }
    setSkip(newSkip);
  };
  const handleNex = () => {
    setSkip(limit + skip);
  };

  const getFaqs = () => {
    try {
      axios
        .get(`/api/faq/all?limit=${limit}&skip=${skip}`)
        .then((response) => {
          if (response.status === 200) {
            setFaqs(response.data.data);
            setTotal(response.data.count);
            setIsLoading(false);
            setErr("");
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            setErr("No data available yet!");
          }
        });
    } catch (error) {
      console.error("Error fetching FAQs:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    document.title = "FAQs";
    getFaqs();
  }, [skip]);
  if (isLoading) {
    return (
      <div className="h-96 flex justify-center items-center">
        <DefaultLoader errorMsg={err} />
      </div>
    );
  }

  return (
    <div className="relative bg-bg-page-color text-font-family-color ">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <div
        className="absolute top-[2.6rem] left-0 right-0 w-full h-[25%] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: 0.2,
        }}
      ></div>
      <div className="flex flex-col justify-center items-center gap-8 h-full pb-16 lg:pb-56 bg-white">
        <EachPageHeader title={titles[0]} subtitle={titles[1]} />
        <div className="container flex items-center justify-center mx-auto text-2xl lg:text-3xl pl-4">
          <h2 className=" font-main-font ">
            Showing {skip + 1} to {Math.min(skip + limit, total)} of {total} FAQ
          </h2>
        </div>
        {faqs.map((item, index) => (
          <FaQItem item={item} key={index} />
        ))}
        <br />
        <div className="mx-auto text-lg md:text-2xl flex gap-7">
          <button
            onClick={handlePrev}
            disabled={skip === 0}
            className={skip === 0 ? "disabledBtn" : "activeBtn"}
          >
            <GrPrevious />
          </button>
          <button
            onClick={handleNex}
            disabled={skip + limit >= total}
            className={skip + limit >= total ? "disabledBtn" : "activeBtn"}
          >
            <GrNext />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden email">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-5xl text-white ">
                Do you have More Questions?
              </h2>
              <p className="mt-4 text-2xl leading-8 text-gray-300">
                write us here!! we will contact shortly through Email !!
              </p>
              <div className="mt-6 flex justify-center max-w-md gap-x-4">
                <Link
                  type="submit"
                  className="flex flex-row gap-1 rounded-md bg-bg-page-color px-4 py-4 text-xl font-semibold text-font-family-color shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  to={`/contact`}
                >
                  <IoIosSend className="text-2xl" /> Send a message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
