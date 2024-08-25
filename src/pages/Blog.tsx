import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Card from "../components/Card";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import { ChevronDown, X } from "react-feather";

import flashPrimaryDark from "../../src/assets/svg/flash-primary-dark.svg";
import missingCoverImage from "../../src/assets/img/missing-image-rexee.png";
import flashes from "../../src/assets/svg/flashes-yellow.svg";

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
    const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
    const [showAllCategories, setShowAllCategories] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/categories")
            .then((response) => response.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error("Error fetching categories:", error));

        fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?_embed")
            .then((response) => response.json())
            .then((data) => {
                const formattedPosts = data.map((post: any) => ({
                    id: post.id,
                    slug: post.slug,
                    title: post.title,
                    excerpt: post.excerpt,
                    coverImage:
                        post._embedded?.["wp:featuredmedia"]?.[0]?.media_details?.sizes
                            ?.thumbnail?.source_url || "",
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

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowAllCategories(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const truncateExcerpt = (excerpt: string, length: number): string => {
        return excerpt.length > length
            ? excerpt.substring(0, length) + "..."
            : excerpt;
    };

    const filteredPosts = selectedCategories.length
        ? posts.filter((post) =>
            post.categories.some((cat) => selectedCategories.includes(cat))
        )
        : posts;

    const toggleCategory = (categoryId: number) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(
                selectedCategories.filter((id) => id !== categoryId)
            );
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
    };

    const resetCategories = () => {
        setSelectedCategories([]);
    };

    return (
        <>
            <Header type="dark" isRelative />
            <div className="h-[60vh] max-w-[1224px] mx-auto rounded-3xl bg-primary text-white flex flex-col gap-10 justify-center items-center relative overflow-hidden xs:mx-6 sm:mx-6 lg:mx-auto">
                <h1 className="xs:text-[2.5rem] xs:leading-[3rem] sm:text-[3.5rem] lg:text-[4.5rem] sm:leading-[4rem] lg:leading-[5rem] xs:max-w-[90%] sm:max-w-[60%] font-bold text-center z-20">
                    Discover a World of <span className="text-secondary-light">Ideas</span>{" "}
                    and <span className="text-secondary-light">Inspiration</span>
                </h1>
                <p className="xs:text-[16px] sm:text-[20px] z-20 xs:w-[80%] sm:w-[40%] text-center">
                    Dive Into Our Latest Blog Articles for Fresh Insights and Thoughtful
                    Perspectives
                </p>

                <img
                    src={flashes}
                    alt="Flashes Icon"
                    className="xs:h-[90%] md:h-[120%] w-auto absolute inset-x-0"
                    style={{
                        bottom: "-10%",
                        left: "-18%",
                    }}
                />
            </div>

            <div className="py-12 max-w-[1224px] mx-auto h-full pb-10">
                <div className="relative flex items-center gap-4 px-6">
                    {/* Select Category Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            className="px-4 py-2 text-[14px] transition-all ease-in-out border border-gray rounded-full cursor-pointer text-text-dark bg-white font-medium flex items-center justify-between"
                            onClick={() => setShowAllCategories(!showAllCategories)}
                            style={{ minWidth: '170px' }}  // Set a min-width to prevent shrinking
                        >
                            Select Category <ChevronDown className="ml-2" size={16} color="#645C6E" />
                        </button>

                        {showAllCategories && (
                            <ul className="absolute left-0 bg-white shadow-lg rounded-lg mt-2 z-10 p-2 w-[400px] max-h-[300px] overflow-y-auto">
                                <li>
                                    <a
                                        className="block px-4 py-2 text-[14px] rounded cursor-pointer text-dark"
                                        onClick={() => {
                                            resetCategories();
                                            setShowAllCategories(false);
                                        }}
                                    >
                                        All Categories
                                    </a>
                                </li>
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <a
                                            className={`block my-1 px-4 py-2 text-[14px] rounded-full cursor-pointer ${selectedCategories.includes(category.id)
                                                    ? "bg-primary text-white font-semibold"
                                                    : "text-dark"
                                                }`}
                                            onClick={() => toggleCategory(category.id)}
                                        >
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Display selected categories next to the dropdown */}
                    {selectedCategories.length > 0 && (
                        <div className="flex gap-2 flex-wrap ml-1">
                            {selectedCategories.map((categoryId) => {
                                const category = categories.find((cat) => cat.id === categoryId);
                                return (
                                    category && (
                                        <div
                                            key={category.id}
                                            className="flex items-center py-1 px-2 rounded-full border border-primary text-text-med"
                                        >
                                            <span className="text-sm">{category.name}</span>
                                            <button
                                                className="ml-1"
                                                onClick={() => toggleCategory(category.id)}
                                            >
                                                <X size={14} color="#645C6E" />
                                            </button>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                    )}
                </div>


                <h2 className="text-2xl text-text-dark font-bold mt-6 mb-6 px-6">
                    {selectedCategories.length ? "Filtered Posts" : "All Posts"}
                </h2>

                {loading ? (
                    <div className="flex justify-center items-center h-full">
                        <div className="loader bg-white outline-gray-light p-5 rounded-full flex space-x-3">
                            <div
                                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                                style={{
                                    animationDuration: "0.5s",
                                    animationDelay: "0.1s",
                                }}
                            ></div>
                            <div
                                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                                style={{
                                    animationDuration: "0.5s",
                                    animationDelay: "0.3s",
                                }}
                            ></div>
                            <div
                                className="w-3 h-3 bg-primary rounded-full animate-bounce"
                                style={{
                                    animationDuration: "0.5s",
                                    animationDelay: "0.6s",
                                }}
                            ></div>
                        </div>
                    </div>
                ) : (
                    <ul className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
                        {filteredPosts.map((post) => (
                            <li key={post.id} className="flex">
                                <Card
                                    rounded="xxl"
                                    cardSize="none"
                                    className="flex flex-col border border-gray flex-1 overflow-hidden relative"
                                >
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                                        {post.categories.map((categoryId) => {
                                            const category = categories.find(
                                                (cat) => cat.id === categoryId
                                            );
                                            return (
                                                category && (
                                                    <Tag text={category.name} style="primary" size="sm" />
                                                )
                                            );
                                        })}
                                    </div>

                                    <img
                                        alt={post.title.rendered}
                                        src={
                                            post.coverImage ? post.coverImage : missingCoverImage
                                        }
                                        className="w-full h-[200px] object-cover"
                                    />

                                    <div className="p-4 flex flex-col gap-3">
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="text-[18px] font-semibold text-text-dark"
                                        >
                                            {post.title.rendered}
                                        </Link>
                                        {post.excerpt?.rendered && (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: truncateExcerpt(
                                                        post.excerpt.rendered.replace(
                                                            /<\/?[^>]+(>|$)/g,
                                                            ""
                                                        ),
                                                        90
                                                    ),
                                                }}
                                                className="text-gray-dark text-[15px]"
                                            />
                                        )}
                                        <Link to={`/blog/${post.slug}`} className="">
                                            <span className="text-primary border-b border-b-primary">
                                                Read more
                                            </span>
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
