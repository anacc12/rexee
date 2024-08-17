import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";
import missingCoverImage from "../../src/assets/img/missing-image-rexee.png";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";


type Post = {
    id: number;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt?: {
        rendered: string;
    };
    coverImage?: string;
};



const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true); // Loading state


    useEffect(() => {
        fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?_embed")
            .then((response) => response.json())
            .then((data) => {
                // Map over the posts to extract the cover image
                const formattedPosts = data.map((post: any) => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    coverImage: post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url || ''
                }));
                setPosts(formattedPosts);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    return (
        <>

            <div className="w-screen h-[60vh] bg-primary text-white flex flex-col gap-10 justify-center items-center relative overflow-hidden">
                <Header type="light" />
                <img
                    src={flashPrimaryDark}
                    alt="Flash Purple"
                    className="h-[200%] w-auto absolute z-10"
                    style={{
                        top: "-45%",
                        left: "8%",
                    }}
                />
                <h1 className="text-[4.5rem] font-bold leading-[5rem] z-20">
                    Blog
                </h1>
                <p className="text-[20px] text-white z-20 w-[40%] text-center">
                    Explore Rexee's articles and learn more about us!
                </p>
            </div>

            <div className="py-12 max-w-[1224px] mx-auto h-full pb-10">
                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="loader bg-white outline-gray-light p-5 rounded-full flex space-x-3">
                            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.1s' }}></div>
                            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.3s' }}></div>
                            <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.6s' }}></div>
                        </div>
                    </div>
                ) : (
                    <ul className="grid grid-cols-3 gap-4">
                        {posts.map((post) => (
                            <li key={post.id} className="flex">
                                <Card
                                    rounded="xxl"
                                    cardSize="none"
                                    className="flex flex-col border border-gray flex-1 overflow-hidden">

                                    <img
                                        alt={post.title.rendered}
                                        src={post.coverImage ? post.coverImage : missingCoverImage}
                                        className="w-full h-[200px] object-cover"
                                    />

                                    <div className="p-4 flex flex-col gap-3">
                                        <Link to={`/blog/${post.slug}`} className="text-[18px] font-semibold text-text-dark">
                                            {post.title.rendered}
                                        </Link>
                                        {post.excerpt?.rendered && (
                                            <div
                                                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                                className="text-gray-dark text-[15px]"
                                            />
                                        )}
                                        <Link to={`/blog/${post.slug}`} className="">
                                            <span className="text-primary border-b border-b-primary">Read more</span>
                                        </Link>
                                    </div>

                                </Card>

                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <Banner />
            <Footer />
        </>
    );
};

export default Blog;