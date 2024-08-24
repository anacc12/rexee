import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../components/Card";

import missingCoverImage from "../../src/assets/img/missing-image-rexee.png";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Tag from "../components/Tag";

type Post = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  coverImage?: string;
  categories: number[];
};

type Category = {
  id: number;
  name: string;
};

const Article: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/categories")
      .then((response) => response.json())
      .then((data) => setAllCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));


    fetch(`https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const postData = data[0];
          const coverImage = postData._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.full?.source_url || '';
          setPost({
            id: postData.id,
            slug: postData.slug,
            title: postData.title,
            content: postData.content,
            excerpt: postData.excerpt,
            coverImage,
            categories: postData.categories, // Assign categories
          });

          // Fetch related posts based on categories
          fetchRelatedPosts(postData.categories);
        }
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [slug]);

  const fetchRelatedPosts = (categories: number[]) => {
    if (categories.length === 0) return; // If no categories, skip fetching

    const categoryQuery = categories.map((id) => `categories=${id}`).join("&");
    fetch(`https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?${categoryQuery}&_embed&per_page=3&orderby=date&order=desc`)
      .then((response) => response.json())
      .then((data) => {
        const filteredPosts = data.filter((relatedPost: any) => relatedPost.slug !== slug); // Exclude the current post
        const formattedPosts = filteredPosts.map((post: any) => ({
          id: post.id,
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          coverImage: post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.thumbnail?.source_url || '',
        }));
        setRelatedPosts(formattedPosts.slice(0, 3)); // Limit to 3 newest related posts
      })
      .catch((error) => console.error("Error fetching related posts:", error));
  };

  if (!post) {
    return <div className="w-screen h-[90vh] flex justify-center items-center mx-auto">
      <div className="loader bg-white outline-gray-light p-5 rounded-full flex space-x-3">
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.3s' }}></div>
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDuration: '0.5s', animationDelay: '0.6s' }}></div>
      </div>
    </div>;
  }

  const truncateExcerpt = (excerpt: string, length: number): string => {
    return excerpt.length > length ? excerpt.substring(0, length) + "..." : excerpt;
  };

    const postCategories = post.categories.map(categoryId => {
      const category = allCategories.find(cat => cat.id === categoryId);
      return category ? category.name : null;
    }).filter(Boolean); // Filter out any null values

  return (
    <>
      <div className="w-screen h-[60vh] bg-light text-text-dark flex flex-col gap-10 justify-center items-center border-b border-gray-light">
        <Header type="dark" />
        <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-wrap gap-2">
            {postCategories.map((categoryName, index) => (
              <Tag key={index} text={categoryName!} style="primary" size="sm" />
            ))}
          </div>
          <h1 className="text-[3.7rem] leading-[5rem] font-bold max-w-[860px] text-center">
            {post.title.rendered}
          </h1>
        </div>

      </div>

      <img
        src={post.coverImage ? post.coverImage : missingCoverImage}
        alt="Cover"
        className="-mt-[60px] w-full h-[450px] object-cover rounded-3xl max-w-[1224px] mx-auto"
      />

      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="flex flex-col gap-10 py-12 max-w-[860px] mx-auto text-text-med"
      ></div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="py-12 max-w-[1224px] mx-auto border-t border-t-light">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-text-dark font-bold mb-6">Related Articles</h2>
            <Button
              text="View all"
              style="primary"
              size="base"
              rounded="full"
              className="self-start"
              action={() => navigate('/blog')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (

              <Card
                key={relatedPost.id}
                rounded="xxl"
                cardSize="none"
                className="flex flex-col border border-gray flex-1 overflow-hidden">

                <img
                  src={relatedPost.coverImage || missingCoverImage}
                  alt={relatedPost.title.rendered}
                  className="w-full h-32 object-cover"
                />

                <div className="p-4 flex flex-col gap-3">
                  <Link to={`/blog/${relatedPost.slug}`} className="text-[18px] font-semibold text-text-dark">
                    {relatedPost.title.rendered}
                  </Link>
                  {relatedPost.excerpt?.rendered && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: truncateExcerpt(
                          relatedPost.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, ""),
                          90
                        ),
                      }}
                      className="text-gray-dark text-[15px]"
                    />
                  )}
                  <Link to={`/blog/${relatedPost.slug}`} className="">
                    <span className="text-primary border-b border-b-primary">Read more</span>
                  </Link>
                </div>

              </Card>


            ))}
          </div>
        </div>
      )}

      <Banner />
      <Footer />
    </>
  );
};

export default Article;
