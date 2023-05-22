import BlogBanner from "../../components/BlogBanner";
import LatestNews from "../../components/LatestNews";
import Layout from "../../components/Layout"

const Blog = () => {
    return(
        <Layout blog>
            <BlogBanner />
            <LatestNews />
        </Layout>
    )
}

export default Blog;