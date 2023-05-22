import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog/index";
import PageNotFound from "./pages/PageNotFound";
import BlogView from "./pages/Blog/[id]";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogView />} />
        <Route path="*" element={<PageNotFound />} />
     </Routes>
    </>
  );
}

export default App;
