import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";

import missingCoverImage from "../../src/assets/img/missing-image-rexee.png";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

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

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]); // State for related posts

  useEffect(() => {
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-screen h-[60vh] bg-light text-gray-900 flex flex-col gap-10 justify-center items-center border-b border-gray-light">
        <Header type="dark" />
        <h1 className="text-[4.5rem] font-bold leading-[5rem]">
          {post.title.rendered}
        </h1>
      </div>

      <img
        src={post.coverImage ? post.coverImage : missingCoverImage}
        alt="Cover"
        className="-mt-[60px] w-full h-[450px] object-cover rounded-3xl max-w-[1224px] mx-auto"
      />

      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        className="flex flex-col gap-10 py-12 max-w-[860px] mx-auto"
      ></div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <div className="py-12 max-w-[1224px] mx-auto">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
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
                  <Link to={`/blog/${relatedPost.slug}`} className="text-[18px] font-semibold">
                    {relatedPost.title.rendered}
                  </Link>
                  {relatedPost.excerpt?.rendered && (
                    <div
                      dangerouslySetInnerHTML={{ __html: relatedPost.excerpt.rendered }}
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
