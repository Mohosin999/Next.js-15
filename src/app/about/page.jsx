import Wrapper from "@/components/wrapper";
import React from "react";

const About = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Wrapper>
      <h2>About Page</h2>
    </Wrapper>
  );
};

export default About;
