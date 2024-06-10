/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import backgroundImage from "../../assets/images/leaves_background_01.webp";
import DashboardLinks from "../../components/DashboardLinks";
import MobileDashboardLinks from "../../components/MobileDashboardLinks";
import axios from "../../utils/axiosInstance";
import logoIcon from "../../assets/tree.png";
import DashboardHeader from "./DashboardHeader";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdEuroSymbol } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const SponsorShipDetails = () => {
  document.title = "Sponsorship details";
  const { id } = useParams();
  const [sponsorship, setSponsorship] = useState({});
  const [sItems, setSItems] = useState([]);
  const [patron, setPatron] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getItems = (sId) => {
      try {
        axios
          .get(`/api/payment/getDetail/${sId}`)
          .then((response) => {
            console.log("RESPONSE:", response.data);
            if (response.status === 200) {
              setSponsorship(response.data.sponsorship);
              setSItems(response.data.items);
              setPatron(response.data.patron);
            }
          })
          .catch((error) => {
            if (error.response.status === 500) {
              setError("Data is not available");
            }
          });
      } catch (error) {
        setError("Server is down!");
      }
    };
    getItems(id);
  }, []);
  return (
    <div className="cart-page-container relative bg-light-gray w-full mx-auto p-4 pb-[25px] md:pb-[40px] lg:pb-[100px] xl:pb-[120px] flex items-center justify-center">
      {/* Overlay with background image and opacity */}
      <div
        className="cart-page-bg hidden lg:block absolute top-0 left-0 w-full h-full bg-contain bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${backgroundImage})`, opacity: 0.6 }}
      ></div>

      <div className="w-[100%] lg:w-[100%] xl:w-[80%] bg-white rounded-[15px] p-6 xs:p-2 md:p-4 lg:p-8 shadow-lg lg:mt-[100px] xl:mt-[120px]">
        <DashboardHeader subtitle={`sponsorships details`} />
        <MobileDashboardLinks />
        <div className="flex flex-col md:flex-row mt-4 gap-[1rem] md:gap-[2rem]">
          {/* Dashboard Links */}
          {/* <DashboardLinks /> */}
          {/* Sponsorships */}
          <div className="w-[100%] ">
            <div className="flex items-center mb-4 justify-between">
              <div className=" flex items-center">
                <img
                  src={logoIcon}
                  alt="Tree Icon"
                  className="w-[30px] h-[30px] mr-2"
                />
                <h3 className="text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                  <span><span className="hidden md:inline">Sponsorship's</span> Details</span>
                </h3>
              </div>
              <Link
                to="/user_sponsorships"
                className="flex items-center justify-center gap-2 w-max px-4 py-2 bg-bg-header-footer border-2 text-font-family-color rounded-md hover:bg-lighter-primary transition duration-4000 ease-linear sm:mt-0"
                aria-label="Sponsor Tree page"
              >
                <RiArrowGoBackLine />
                <span>Back to List</span>
              </Link>
            </div>
            <div className="w-[100%] min-h-screen items-center justify-center bg-white">
              <div className="px-0 w-[100]">
                {error ? (
                  <span className=" text-red-500">{error}</span>
                ) : (
                  <span></span>
                )}
                <div className="overflow-x-auto">
                  <table className="w-[100%] min-w-max table-auto text-left  border border-white rounded-tl-lg rounded-br-md shadow-md ">
                    <thead className="pb-10 space-y-4">
                      <tr className="bg-bg-header-footer">
                        <th className="space-y-2 border-blue-gray-100 bg-blue-gray-50/50 p-4 g-3">
                          <p className="block text-xs lg:text-md xl:text-xl  antialiased font-sans text-secondary-color font-normal leading-none opacity-70">
                            Certification No.
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Amount
                          </p>
                        </th>
                        <th className="border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Date
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Certificate
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(sponsorship).length > 0 ? (
                        <tr className="rounded hover:bg-lighter-primary active:bg-bg-lighter-primary focus:bg-bg-lighter-primary">
                          <td className="p-4 border-b border-blue-gray-10">
                            <p className="block antialiased font-sans text-1xl text-secondary-color leading-normal  ">
                              {sponsorship.certificationNo}
                            </p>
                          </td>
                          <td className="p-4 border-b border-blue-gray-10">
                            <p className="flex items-center justify-left antialiased font-sans text-xs lg:text-md xl:text-xl  leading-normal text-secondary-color font-normal">
                              <span>{sponsorship.amount.$numberDecimal}</span>
                              <MdEuroSymbol />
                            </p>
                          </td>
                          <td className="p-4 border-b border-blue-gray-10">
                            <div className="w-max">
                              <div
                                className="relative grid items-center font-sans text-secondary-color text-xs lg:text-md xl:text-xl  uppercase whitespace-nowrap select-none  px-2  rounded-md"
                                style={{ opacity: 1 }}
                              >
                                <p className="text-secondary-color">
                                  {new Date(
                                    sponsorship.createdAt
                                  ).toDateString()}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 border-b border-blue-gray-50">
                            <div className="flex items-center gap-3">
                              <FaRegFilePdf className="text-2xl text-secondary-color" />
                              <div className="flex flex-col">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize"></p>
                                <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color leading-normal text-blue-gray-900 font-normal opacity-70">
                                  Download
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ) : (
                        <tr></tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <br />
                <div className="w-full pt-5 px-4 mb-8 mx-auto">
                  {Object.keys(patron).length > 0 ? (
                    <div className="w-[100%]">
                      <h3 className="break-all text-2xl lg:text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                        Patron Details
                      </h3>
                      <div className="break-all flex flex-col justify-center items-start gap-[0.4rem] bg-white rounded-[10px] border-bg-header-footer mt-4 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ">
                        <p className="text-font-family-color">
                          <span className="font-semibold">Full Name:</span>
                          &nbsp;
                          {patron.firstName}&nbsp;{patron.lastName}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Email:</span>
                          &nbsp;{patron.email}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Phone Number:</span>
                          &nbsp;
                          {patron.mobilePhone}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Address Line 1:</span>
                          &nbsp;
                          {patron.address.address1}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Address Detail:</span>
                          &nbsp;
                          {patron.address.address2}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">City:</span>&nbsp;
                          {patron.address.city}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Postcode:</span>&nbsp;
                          {patron.address.zipCode}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">State:</span>&nbsp;
                          {patron.address.state}
                        </p>
                        <p className="text-font-family-color ">
                          <span className="font-semibold">Country:</span>&nbsp;
                          {patron.address.country}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
                <hr />
                <br />
                <h3 className="break-all text-2xl xl:text-3xl text-secondary-color font-main-font tracking-wide border-b-2 border-bg-header-footer inline-block">
                  Items
                </h3>
                <br /> <br />
                <div className="overflow-x-auto">
                  <table className="w-[100%] min-w-max table-auto text-left  border border-white rounded-tl-lg rounded-br-md shadow-md">
                    <thead className="pb-10 space-y-4">
                      <tr className="bg-bg-header-footer">
                        <th className="space-y-2 border-blue-gray-100 bg-blue-gray-50/50 p-4 g-3">
                          <p className="block text-xs lg:text-md xl:text-xl  antialiased font-sans text-secondary-color font-normal leading-none opacity-70">
                            Image
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Name
                          </p>
                        </th>
                        <th className="border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Price
                          </p>
                        </th>
                        <th className=" border-blue-gray-100 bg-blue-gray-50/50 p-4">
                          <p className="block antialiased font-sans text-xs lg:text-md xl:text-xl  text-secondary-color font-normal leading-none opacity-70">
                            Quantity
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sItems.map((item) => {
                        return (
                          <tr
                            key={item._id}
                            className=" w-full rounded hover:bg-lighter-primary active:bg-bg-lighter-primary focus:bg-bg-lighter-primary"
                          >
                            <td className="p-4 border-b border-blue-gray-10">
                              <img
                                src={item.treeImage}
                                alt="Sapling Tree"
                                className="w-[100px] border border-[var(--darker-primary)]"
                              />
                            </td>
                            <td className="p-4 border-b border-blue-gray-10">
                              <div className="w-max">
                                <div
                                  className="relative grid items-center font-sans text-secondary-color text-xs lg:text-md xl:text-xl  uppercase whitespace-nowrap select-none  px-2  rounded-md"
                                  style={{ opacity: 1 }}
                                >
                                  <p className="text-secondary-color">
                                    {item.treeName}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="p-4 border-b border-blue-gray-10">
                              <p className="flex items-center justify-left antialiased font-sans text-xs lg:text-md xl:text-xl  leading-normal text-secondary-color font-normal">
                                <span>{item.treePrice.$numberDecimal}</span>
                                <MdEuroSymbol />
                              </p>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <div className="flex items-center gap-3">
                                <span>{item.qty}</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SponsorShipDetails;
