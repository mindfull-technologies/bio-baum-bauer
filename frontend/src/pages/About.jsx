import { useState } from "react";
import backgroundImage from "../assets/images/leaves_background_02.webp";
import PageBreadcrumb from "../components/PageBreadcrumb";
import { HiHome } from "react-icons/hi";
import EachPageHeader from "../components/EachPageHeader";
import treeImg from "../assets/tree.png";
import { GoGoal } from "react-icons/go";
import { GoInfo } from "react-icons/go";

const About = () => {
  document.title = "About US";
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    {
      id: "mission",
      label1: "Our Mission",
      label2: "Sponsor a Tree: Our Mission",
      icon: <GoGoal size="1.3rem" />,
    },
    {
      id: "aboutUs",
      label1: "Solawi Zabergäu",
      label2: " About Us: Solawi Zabergäu",
      icon: <GoInfo size="1.3rem" />,
    },
  ];
  const titles = ["About Us", ""];
  const aLinkValues = [{ linkTo: "/", linkIcon: HiHome, linkText: "Home" }];
  const daLinkValues = { linkText: "About Us" };
  return (
    <div className="text-font-family-color pb-20">
      <PageBreadcrumb activeLinks={aLinkValues} deActiveLink={daLinkValues} />
      {/* About Us title, positioned absolutely */}
      <div className="relative">
        <h2 className="absolute top-0 left-1/2 transform -translate-x-1/2 py-4 text-center">
          <EachPageHeader title={titles[0]} subtitle={titles[1]} />
        </h2>
        <section className="relative flex flex-col items-center justify-center pb-9 pt-[100px] md:pt-[160px] lg:pt-[180px] xl:pt-[220px]">
          {/* Overlay with background image and opacity */}
          <div
            className="absolute top-0 left-0 w-full h-[25%] bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              opacity: 0.2,
            }}
          ></div>

          {/* Article - Sponsor a Tree: Our Mission */}
          <article className="container h-max px-5 py-8 md:p-8 bg-white rounded-xl shadow-lg mb-8">
            {/* Tab buttons */}
            <div className="flex justify-center items-center mb-10 gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-2 rounded-t-lg md:px-6 py-2 text-sm font-medium focus:outline-none ${
                    activeTab === tab.id
                      ? "text-secondary-color bg-lighter-secondary"
                      : " text-darker-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 pb-1">
                    <span className="">{tab.icon}</span>
                    <h2
                      className={
                        activeTab === tab.id
                          ? "text-xl md:hidden"
                          : "text-xl md:hidden text-darker-secondary"
                      }
                    >
                      {tab.label1}
                    </h2>
                    <h2
                      className={
                        activeTab === tab.id
                          ? "hidden md:text-2xl md:block"
                          : "hidden md:text-2xl md:block text-darker-secondary"
                      }
                    >
                      {tab.label2}
                    </h2>
                  </div>

                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-secondary-color rounded-t-lg"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div
              style={{ display: activeTab === "mission" ? "block" : "none" }}
            >
              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Embracing Nature, Enriching Lives
              </h3>
              <p className="text-md font-normal text-justify py-2">
                At the heart of our mission is a simple yet profound commitment:
                to reconnect people with nature through the act of sponsoring a
                tree. Trees are not just silent sentinels of our planet; they
                are active participants in shaping a healthier, more sustainable
                world.
              </p>

              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Why Sponsor a Tree?
              </h3>
              <p className="text-md font-normal text-justify py-2">
                Environmental Impact: Each tree we plant helps combat climate
                change by absorbing carbon dioxide from the atmosphere. Trees
                also contribute to air purification, groundwater replenishment,
                and biodiversity enhancement. Community Benefits: Beyond
                environmental health, trees bring communities together. They
                provide natural spaces for recreation, enhance local aesthetics,
                and foster a sense of belonging and stewardship among residents.
                Educational Opportunities: Our initiative is not just about
                planting trees; it's also about educating people. We organize
                workshops and events to teach the importance of environmental
                conservation, providing hands-on experiences in tree planting
                and care.
              </p>

              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Our Goals
              </h3>
              <p className="text-md font-normal text-justify py-2">
                Planting and Nurturing: We aim to plant thousands of trees each
                year in various communities, focusing on native species that
                thrive in specific environments. Our commitment extends beyond
                planting; we nurture each tree, ensuring its growth and health.
                Community Engagement: We strive to involve local communities in
                our planting efforts. By doing so, we hope to foster a deeper
                connection between people and their natural environment.
                Sustainability: Our approach is rooted in sustainability. We
                carefully select planting sites and species to ensure that our
                efforts contribute positively to local ecosystems. Transparency
                and Impact Tracking: For every tree sponsored, we provide
                updates on its growth and the overall impact of the project.
                This transparency ensures that sponsors can see the tangible
                results of their contributions.
              </p>

              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Join Us
              </h3>
              <p className="text-md font-normal text-justify py-2">
                By sponsoring a tree, you are not just planting a seed; you are
                sowing hope for a greener, more sustainable future. Join us in
                this endeavor to make a positive impact on our planet and
                communities.
              </p>
            </div>
            <div
              style={{ display: activeTab === "aboutUs" ? "block" : "none" }}
            >
              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Cultivating Community and Sustainability
              </h3>
              <p className="text-md font-normal text-justify py-2">
                At Solawi Zabergäu, we are more than just a community-focused
                agricultural initiative; we are a movement dedicated to
                sustainable living and local empowerment. Our roots lie deep in
                the fertile soil of Zabergäu, where we've grown from a small
                collective of eco-conscious individuals into a thriving hub of
                community-supported agriculture.
              </p>
              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Our Philosophy
              </h3>
              <p className="text-md font-normal text-justify py-2">
                Sustainable Farming: We believe in farming methods that respect
                the natural balance of the environment. Our practices are
                organic, avoiding any synthetic pesticides or fertilizers,
                ensuring that the food we produce is not only healthy but also
                environmentally friendly. Community Engagement: At the core of
                Solawi Zabergäu is our commitment to the community. We foster
                close relationships with local residents, encouraging them to be
                actively involved in the food production process. Education and
                Outreach: We offer educational programs and workshops on
                sustainable agriculture, aiming to spread awareness and
                knowledge about the importance of eco-friendly farming
                practices.
              </p>
              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Our Journey
              </h3>
              <p className="text-md font-normal text-justify py-2">
                From Seed to Harvest: Our journey began with a simple idea - to
                bring people closer to the source of their food. We started with
                a small plot of land and a few enthusiastic members, and over
                the years, we have grown into a community staple. Collaborative
                Efforts: We work closely with other local businesses and
                organizations to promote sustainable practices across the
                region. Our collaborative projects range from local farmers'
                markets to environmental conservation efforts.
              </p>
              <h3 className="text-xl lg:text-2xl py-2 text-center font-medium">
                Join Our Community
              </h3>
              <p className="text-md font-normal text-justify py-2">
                Being a part of Solawi Zabergäu means more than just consuming
                healthy, local produce. It's about being part of a community
                that values sustainability, education, and mutual support. We
                invite you to join us in this journey towards a greener, more
                sustainable future.
              </p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default About;
