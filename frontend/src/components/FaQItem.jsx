import { Accordion } from "flowbite-react";
import treeicon from "../assets/tree.png";
const FaQItem = (props) => {
  const { item } = props;
  return (
    <>
      <Accordion
        collapseAll
        className="mb-4 shadow-lg bg-light-gray w-11/12 md:w-3/4 lg:w-3/5"
      >
        <Accordion.Panel className="Panel ">
          <Accordion.Title>
            <div className="flex items-center w-full gap-2">
              <img className="w-6" src={treeicon}></img>
              <p className="font-semibold text-lg font-general-font">{item.Question}</p>
            </div>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 texts text-base text-justify p-2">
              {item.Answers}
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};
export default FaQItem;
