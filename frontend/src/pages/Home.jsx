/* eslint-disable no-unused-vars */
import HeroSection from "../components/homePage/HeroSection";
import Mission from "../components/homePage/Mission";
import AboutSolawi from "../components/homePage/AboutSolawi";
import AdditionalLinks from "../components/homePage/AdditionalLinks";
import FeaturedTrees from "../components/homePage/FeaturedTrees";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      <section className="container mx-auto flex flex-col items-center justify-center w-full pb-8 pt-8">
        <div className="border-b-4 border-solid border-gray-400 w-24 rounded-3xl"></div>
        <Mission />
        <hr className="w-48 visible-none" />
        <AboutSolawi />
        <hr className="w-48 visible-none" />
      </section>
      <section className="container-fluid bg-light-gray mx-auto">
        <FeaturedTrees />
        <hr className="w-48 visible-none" />
      </section>
      <section className="container-fluid">
        <AdditionalLinks />
      </section>
    </>
  );
};

export default Home;
