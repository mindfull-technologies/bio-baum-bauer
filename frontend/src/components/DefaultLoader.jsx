import { Spinner } from "flowbite-react";
import { RxCrossCircled } from "react-icons/rx";
const DefaultLoader = (props) => {
  const { errorMsg } = props;
  return (
    <div className="flex gap-2 justify-center items-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
      <h2 className="lg:text-xl">Loading...</h2>
      {errorMsg ? (
        <h3 className="flex justify-start items-center gap-1 rounded-xl px-3 bg-red-100 text-red-color">
          <RxCrossCircled size="1rem" /> <span>{errorMsg}</span>
        </h3>
      ) : (
        <span></span>
      )}
    </div>
  );
};
export default DefaultLoader;
