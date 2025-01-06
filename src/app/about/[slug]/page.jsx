import Wrapper from "@/components/Wrapper";
import React from "react";

const AboutPerson = ({ params }) => {
  return (
    <Wrapper>
      <h2>My name is {params.slug}</h2>
    </Wrapper>
  );
};

export default AboutPerson;
