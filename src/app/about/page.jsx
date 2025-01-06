import FetchedData from "@/components/fetchedData";
import Wrapper from "@/components/wrapper";
import React, { Suspense } from "react";

const About = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Wrapper>
      <h2>About Page</h2>

      <Suspense fallback={<p>Loading fetched data...</p>}>
        <FetchedData />
      </Suspense>
    </Wrapper>
  );
};

export default About;
