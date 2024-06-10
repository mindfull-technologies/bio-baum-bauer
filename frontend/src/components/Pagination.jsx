import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
const Pagination = () => {
/*   {postPerPage,totalpost,paginate,firsttree,lasttree,currentPage,}
 */  /* console.log(totalpost);
=======
const Pagination = ({
  postPerPage,
  totalpost,
  paginate,
  firsttree,
  lasttree,
  currentPage,
}) => {
  console.log(totalpost);
>>>>>>> main
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalpost / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);
  const handlePageClick = (number) => {
    setActivePage(number);
    paginate(number);
  };
  const handleNext = () => {
    let nextPage = currentPage;
    if (currentPage <= totalpost / postPerPage) {
      nextPage = currentPage + 1;
    }
    paginate(nextPage);
    setActivePage(nextPage);
  };
  const handlePrev = () => {
    let prevPage = currentPage;
    if (currentPage > 1) {
      prevPage = currentPage - 1;
    }

    paginate(prevPage);
    setActivePage(prevPage);
  }; */
  return (
    <>
      <div>
        {" "}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          {" "}
          <div className="flex flex-1 justify-between sm:hidden">
            {" "}
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {" "}
              Previous{" "}
            </a>{" "}
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {" "}
              Next{" "}
            </a>{" "}
          </div>{" "}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            {" "}
          {/*   <div>
              {" "}
              <p className="text-md text-font-family-color">
                {" "}
                Showing <span className="font-medium">{firsttree}</span> to{" "}
                <span className="font-medium">{lasttree}</span> of{" "}
                <span className="font-medium">{totalpost}</span> results{" "}
              </p>{" "}
            </div>{" "} */}
            <div>
              {" "}
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                {" "}
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {" "}
                  <IoIosArrowDropleftCircle
                    className="h-5 w-5"
                    aria-hidden="true"
                    onClick={handlePrev}
                  />{" "}
                </a>{" "}
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}{" "}
                <ul className="flex">
                  {pageNumbers.map((number, index) => (
                    <li
                      key={index}
                      className="hover:bg-lighter-primary active:bg-bg-header-footer"
                    >
                      {" "}
                      <a
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-white-900 px-4 py-2 text-md text-font-family-color focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                        onClick={() => {
                          handlePageClick(number);
                          paginate(number);
                        }}
                      >
                        {" "}
                        {number}{" "}
                      </a>{" "}
                    </li>
                  ))}
                </ul>{" "}
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  {" "}
                  <IoIosArrowDroprightCircle
                    className="h-5 w-5"
                    aria-hidden="true"
                    onClick={handleNext}
                  />{" "}
                </a>{" "}
              </nav>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};
export default Pagination;
