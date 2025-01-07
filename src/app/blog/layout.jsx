import React from "react";

const BlogLayout = ({ children, modal }) => {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
};

export default BlogLayout;
