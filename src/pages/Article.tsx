import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type Post = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
};

const Article: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://wwb.ppl.mybluehost.me/wp-json/wp/v2/posts?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setPost(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default Article;