import Wrapper from "@/components/wrapper";
import React from "react";

const Blog = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post = await data.json();

  return (
    <Wrapper>
      {post.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <p className="shadow-md p-5 my-2">{item.body}</p>
        </div>
      ))}
    </Wrapper>
  );
};

export default Blog;
