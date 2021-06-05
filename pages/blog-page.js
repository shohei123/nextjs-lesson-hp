import { Layout } from "../components/Layout";
import { getAllPostData } from "../lib/post";
import Link from "next/Link";

const Blog = ({ posts }) => {
    return (
        <Layout title="Blog">
            <ul className="m-10">
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <span>{post.id}</span>
                            {" : "}
                            <Link href={`/posts/${post.id}`}>
                                <span className="cursor-pointer text-blue-500 border-blue-500 hover:bg-gray-200">{post.title}</span>
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default Blog;

export async function getStaticProps() {
    const posts = await getAllPostData();
    return {
        props: { posts },
    };
}
