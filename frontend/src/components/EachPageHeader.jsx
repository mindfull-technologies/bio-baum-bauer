/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const EachPageHeader = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="flex flex-col items-center mt-0 mb-0">
      <h2 className="text-secondary-color font-main-font md:text-7xl text-4xl mt-[50px] md:mt-[80px] lg:mt-[100px] xl:mt-[120px] mb-[15px] tracking-wide">
        {title}
      </h2>
      <p className="text-center w-11/12  mx-auto text-font-family-color text-md lg:text-xl xl:text-2xl mb-[25px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px]">
        {subtitle}
      </p>
    </div>
  );
};
export default EachPageHeader;
