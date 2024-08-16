import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Post = {
    id: number;
    slug: string;
    title: {
      rendered: string;
    };
  };

const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Replace with your API endpoint to fetch posts
    fetch("https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.slug}`}>{post.title.rendered}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;