import { Button } from "flowbite-react";
import { RiArrowGoBackFill } from "react-icons/ri";
const NotFound = () => {
  document.title = "Not Found";
  return (
    <div className="flex flex-col items-center bg-bg-page-color text-font-family-color gap-10 md:py-40 lg:py-36">
      <h2 className="lg:text-9xl md:text-8xl sm:text-7xl">404</h2>
      <p className=" text-3xl">The page you were looking for does not exist</p>
      <Button outline>
        <RiArrowGoBackFill className="mr-2 h-5 w-5" /> go back
      </Button>
    </div>
  );
};
export default NotFound;
