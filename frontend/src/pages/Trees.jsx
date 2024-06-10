import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// importing components
import PageBreadcrumb from "../components/PageBreadcrumb";
import Search from "../components/Search";
import DefaultLoader from "../components/DefaultLoader";
// importing flowbite components
import { Fade } from "react-awesome-reveal";
import { HiHome } from "react-icons/hi";
import { GrNext, GrPrevious } from "react-icons/gr";
import { TreeData } from "../components/TreeData";

import treeImg from "../assets/tree.png";
import backgroundImage from "../assets/images/gallery_images/leaves_background_03.png";
import "../components/Trees.css";
import TreeItem from "../components/TreeItem";

const Tree = () => {
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "Trees" };
  const [tree, setTree] = useState([]);

  const [err, setErr] = useState("No data available yet!");
  const [totalTree, setTotalTree] = useState(0);
  const limit = 4;
  const [skip, setSkip] = useState(0);

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

  const getTrees = async () => {
    try {
      const data = await TreeData(limit, skip);
      setErr("");
      setTree(data.trees);
      setTotalTree(data.total);
    } catch (error) {
      setErr("No data available yet!");
    }
  };
  let endvalue = skip + limit;
  let startvalue = skip + 1;
  if (endvalue >= totalTree) {
    endvalue = totalTree;
  }

  useEffect(() => {
    document.title = "Trees";
    getTrees();
  }, [skip]);

  return (
    <div>
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      <Search updateTree={setTree} limit={limit} skip={skip} />
      <div className="flex justify-center flex-wrap gap-10 pt-20 pb-4 md:pb-8 lg:pb-12 xl:p-16">
        <Fade
          delay={100}
          cascade
          damping={0.1}
          duration={2000}
          direction="down"
        >
          <div className="flex flex-row justify-center px-4 text-center">
            <div className="flex flex-row justify-center items-center">
              <img
                src={treeImg}
                alt="Small Photo"
                className="hidden 2xl:flex w-[40px] h-[40px] mr-2"
              />
              <div className="lg:text-4xl md:text-3xl text-2xl font-main-font text-secondary-color tracking-wide border-bg-header-footer">
                Stand with us for a greener world - sponsor a tree and grow a
                legacy of environmental stewardship.
              </div>
            </div>
          </div>
        </Fade>

        <div className="relative w-full mx-auto p-4 md:p-8 lg:p-12 xl:p-16 border-bg-header-footer flex flex-col justify-center flex-wrap gap-10 pt-20 pb-10">
          {/* Overlay with background image and opacity */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-top z-[-1]"
            style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.1 }}
          ></div>
          {tree.length > 0 ? (
            <>
              <h2 className="container mx-auto mt-5 text-2xl lg:text-3xl flex justify-center items-center">
                Showing {startvalue} to {endvalue} of {totalTree} Trees
              </h2>
              <Fade delay={100} cascade damping={0.1} duration={3000}>
                <div className="flex justify-center flex-wrap items-center gap-8">
                  {tree.map((item) => (
                    <TreeItem
                      key={item._id}
                      image={item.image}
                      name={item.name}
                      treeImg={treeImg}
                      price={item.price}
                      id={item._id}
                    />
                  ))}
                </div>
              </Fade>
              <div className="text-2xl flex justify-center m-4 text-font-family-color gap-10">
                <button
                  onClick={handlePrev}
                  disabled={skip === 0}
                  className={skip === 0 ? "disabledBtn" : "activeBtn"}
                >
                  <GrPrevious />
                </button>
                <button
                  onClick={handleNex}
                  disabled={skip + limit >= totalTree}
                  className={
                    skip + limit >= totalTree ? "disabledBtn" : "activeBtn"
                  }
                >
                  <GrNext />
                </button>
              </div>
            </>
          ) : (
            <DefaultLoader errorMsg={err} />
          )}
        </div>
      </div>
      {/* pagination buttons */}
    </div>
  );
};
export default Tree;
