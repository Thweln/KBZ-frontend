import { useState, useRef, useEffect, FunctionComponent } from "react";
import { FiSearch, FiMail } from "react-icons/fi";
import { SlScreenSmartphone } from "react-icons/sl";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

interface IProps {
  blog?: boolean;
}

const NavBar:FunctionComponent<IProps> = ({blog}) => {
  const [open, setOpen] = useState<boolean>(false);
  const inputRef: any = useRef(null);
  const [activeState, setActiveState] = useState('home');
  const handleItemClick = (item:any) => {
    setActiveState(item);
  };

  const handleClick = () => {
    inputRef.current.focus();
    setOpen(true);
  };

  useEffect(() => {
    if (open) {
      inputRef.current.focus();
    }
    if(blog) {
      setActiveState('blog')
    }
  }, [open]);

  return (
    <div className="w-full">
      <div className="flex px-48 justify-between items-center p-4 shadow bg-[#DFF6FF]">
        <h6 className="text-sm">
          <a href="tel:09798065880" className="flex items-center gap-1">
            <SlScreenSmartphone fontSize={18} color="#015EB9" />
            +959 7980 65880
          </a>
        </h6>
        <h6 className="text-sm">
          <a href="/">
            UPDATES – Click Here for KBZ Money News Alerts – UPDATES
          </a>
        </h6>
        <h6 className="text-sm">
          <a
            href="mailto: admin@kbzmoney.com"
            className="flex items-center gap-2"
          >
            admin@kbzmoney.com
            <FiMail fontSize={18} color="#015EB9" />
          </a>
        </h6>
      </div>
      <div className="flex px-48 justify-between items-center shadow bg-white">
        <div className="flex items-center">
          <a href="/">
            <img src="/assets/logo.svg" alt="logo" width={200} height={200} />
          </a>
          <ul className="flex items-center ml-20 gap-8">
            <li
          className={activeState === 'home' ? styles.active : styles.normal} onClick={() => handleItemClick('home')}>
              <Link to="/"> Home </Link>
            </li>
            <li 
          className={activeState === 'blog' ? styles.active : styles.normal } onClick={() => handleItemClick('blog')}>
              <Link to="/blog"> Blog </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <input
            ref={inputRef}
            autoFocus={open}
            style={{ display: open ? "flex" : "none" }}
            type="search"
            placeholder="Search here"
            className="py-2 px-3 text-lg mr-4 border-2 rounded-md"
          ></input>
          <FiSearch fontSize="26px" cursor="pointer" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
