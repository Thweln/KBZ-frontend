import { FunctionComponent } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";

interface IProps {
  children: any;
  blog?: boolean;
}

const Layout:FunctionComponent<IProps> = ({ children, blog }: any) => {
  return (
    <div>
      <NavBar blog={blog} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
