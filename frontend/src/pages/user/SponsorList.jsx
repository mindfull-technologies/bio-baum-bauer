import treeIcon1 from "../../assets/tree.png";
import { Link } from "react-router-dom";
const SponsorList = (props) => {
  const { cartProducts, getTreeQuantity, getItemTotalPrice } = props;
  return (
    <>
      {cartProducts.map((product) => (
        <div
          key={product._id}
          className="w-full flex flex-col justify-between items-center bg-light-gray rounded-md md:flex-row gap-[0.9rem] md:gap-[1.5rem] py-3 "
        >
          {/* Tree Photo and Name */}
          <div className="w-full flex flex-col items-center pb-2">
            <div className="hidden md:flex flex-row items-center md:self-start md:pl-6 text-xl font-main-font text-secondary-color tracking-wide p-2">
              <img
                src={treeIcon1}
                alt="Tree Icon"
                className="w-[30px] h-[30px] mr-2"
              />
              Tree
            </div>
            <Link to={`/trees/${product._id}`}>
              <div className="flex flex-col-reverse items-center md:flex-row ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[200px] md:w-[80px] md:h-[80px] object-cover mr-0 md:mr-2 rounded-md mt-2 mb-1 sm:mb-0"
                />
                <div
                  className={`text-2xl sm:text-[1rem] font-main-font sm:font-general-font text-secondary-color sm:text-dark-gray text-center sm:text-start`}
                >
                  {product.name}
                </div>
              </div>
            </Link>
          </div>

          {/* Tree Qty */}
          <div className="w-full flex flex-col items-start">
            <div className="hidden sm:flex-1 sm:block flex-row justify-center items-center text-xl font-main-font text-secondary-color tracking-wide pb-0 sm:pb-2">
              Qty
            </div>
            <div className="flex flex-row p-[0px] sm:p-[4px] text-dark-gray mx-auto sm:mx-0">
              <span className="mx-2 text-xl font-bold">
                {getTreeQuantity(product._id)}
              </span>
            </div>
          </div>

          {/* Tree Price */}
          <div className="w-full flex flex-col items-start">
            <div className="hidden sm:flex text-xl font-main-font text-secondary-color tracking-wide pb-2">
              Price
            </div>
            <div className="flex flex-col mx-auto sm:mx-0 text-center sm:text-left">
              <div className="text-dark-gray text-lg">
                € {getItemTotalPrice(product).toFixed(2)}
              </div>
              <div className="text-md">
                {" "}
                €{" "}
                {product.price && product.price.$numberDecimal
                  ? product.price.$numberDecimal
                  : "N/A"}{" "}
                each
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default SponsorList;
