import { FunctionComponent } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

interface IProps {
  title: string;
  route?: string;
  bgcolor?: string;
  onClickHandler?: any;
}

const ActionButton: FunctionComponent<IProps> = ({ title, route, bgcolor, onClickHandler }) => {
  return (
    <a
      href={route || "/"}
      className="mt-4 w-fit text-white font-[500] flex items-center gap-2 rounded-full px-6 py-2"
      style={{ backgroundColor: bgcolor || "#FF545F" }}
      onClick={onClickHandler}
    >
      {title}
      <HiOutlineArrowNarrowRight fontSize="24px" />
    </a>
  );
};

export default ActionButton;
