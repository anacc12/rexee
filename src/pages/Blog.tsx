import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";
import missingCoverImage from "../../src/assets/img/missing-image-rexee.png";
import flashes from "../../src/assets/svg/flashes-yellow.svg";

import Card from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Tag from "../components/Tag";


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
    categories: number[];
};

type Category = {
    id: number;
    name: string;
};


const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
    const [showAllCategories, setShowAllCategories] = useState(false);

    const CATEGORY_DISPLAY_LIMIT = 5;

    useEffect(() => {
        fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));


        fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?_embed")
            .then((response) => response.json())
            .then((data) => {
                // Map over the posts to extract the cover image
                const formattedPosts = data.map((post: any) => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    coverImage: post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url || '',
                    categories: post.categories,

                }));
                setPosts(formattedPosts);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    const truncateExcerpt = (excerpt: string, length: number): string => {
        return excerpt.length > length ? excerpt.substring(0, length) + "..." : excerpt;
    };

    const filteredPosts = selectedCategory
        ? posts.filter((post) => post.categories.includes(selectedCategory))
        : posts;

    const selectedCategoryName = selectedCategory
        ? categories.find(category => category.id === selectedCategory)?.name
        : "All";

    return (
        <>

            <Header type="dark" isRelative />
            <div className="w-screen h-[60vh] max-w-[1224px] mx-auto rounded-3xl bg-primary text-white flex flex-col gap-10 justify-center items-center relative overflow-hidden">

                <h1 className="text-[4rem] max-w-[60%] font-bold leading-[5rem] text-center z-20">
                    Discover a World of <span className="text-secondary-light">Ideas</span> and <span className="text-secondary-light">Inspiration</span>
                </h1>
                <p className="text-[20px] z-20 w-[40%] text-center">
                    Dive Into Our Latest Blog Articles for Fresh Insights and Thoughtful Perspectives
                </p>

                <img
                    src={flashes}
                    alt="Flashes Icon"
                    className="h-[120%] w-auto absolute inset-x-0"
                    style={{
                        bottom: "-10%",
                        left: "-18%",
                    }}
                />
            </div>

            <div className="py-12 max-w-[1224px] mx-auto h-full pb-10">
                <ul
                    className="inline-flex p-1 list-none rounded-full bg-light mb-6 w-[1224px]"
                    data-tabs="tabs"
                    role="list"
                >
                    <li className="flex-auto text-center">
                        <a
                            className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit font-medium ${!selectedCategory ? "bg-primary text-white" : ""
                                }`}
                            onClick={() => setSelectedCategory(null)}
                        >
                            All Categories
                        </a>
                    </li>
                    {categories.slice(0, CATEGORY_DISPLAY_LIMIT).map((category) => (
                        <li key={category.id} className="flex-auto text-center">
                            <a
                                className={`flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit font-medium ${selectedCategory === category.id ? "bg-primary text-white" : ""
                                    }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}

                    {categories.length > CATEGORY_DISPLAY_LIMIT && (
                        <li className="flex-auto text-center relative">
                            <a
                                className="flex items-center justify-center w-full px-12 py-2 text-[14px] mb-0 transition-all ease-in-out border-0 rounded-full cursor-pointer text-slate-700 bg-inherit font-medium"
                                onClick={() => setShowAllCategories(!showAllCategories)}
                            >
                                +{categories.length - CATEGORY_DISPLAY_LIMIT} more
                            </a>

                            {showAllCategories && (
                                <ul className="absolute left-0 right-0 bg-white shadow-lg rounded-lg mt-2 z-10 p-2">
                                    {categories.slice(CATEGORY_DISPLAY_LIMIT).map((category) => (
                                        <li key={category.id}>
                                            <a
                                                className={`block px-4 py-2 text-[14px] rounded cursor-pointer ${selectedCategory === category.id ? "bg-primary text-white font-semibold" : "text-dark"
                                                    }`}
                                                onClick={() => {
                                                    setSelectedCategory(category.id);
                                                    setShowAllCategories(false); // Hide dropdown after selection
                                                }}
                                            >
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    )}
                </ul>

                <h2 className="text-2xl text-text-dark font-bold mb-6">{selectedCategoryName} posts</h2>
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

                        {filteredPosts.map((post) => {
                            // Find the first category name for the post
                            const category = categories.find(cat => post.categories.includes(cat.id));

                            return (
                                <li key={post.id} className="flex">
                                    <Card
                                        rounded="xxl"
                                        cardSize="none"
                                        className="flex flex-col border border-gray flex-1 overflow-hidden relative">

                                        <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                            {post.categories.map((categoryId) => {
                                                const category = categories.find(cat => cat.id === categoryId);
                                                return (
                                                    category && (
                                                        <Tag text={category.name} style="primary" size="sm"/>
                                                    )
                                                );
                                            })}
                                        </div>

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
                                                    dangerouslySetInnerHTML={{
                                                        __html: truncateExcerpt(
                                                            post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
                                                            90
                                                        ),
                                                    }}
                                                    className="text-gray-dark text-[15px]"
                                                />
                                            )}
                                            <Link to={`/blog/${post.slug}`} className="">
                                                <span className="text-primary border-b border-b-primary">Read more</span>
                                            </Link>
                                        </div>

                                    </Card>

                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>

            <Banner />
            <Footer />
        </>
    );
};

export default Blog;