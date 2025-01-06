import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Image_01 from "/public/img/img_01.jpg";
import Image_02 from "/public/img/img_02.jpg";

const Services = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <Wrapper>
      <h2>Service Page</h2>
      <div className="flex items-center justify-center gap-4">
        <Image src={Image_01} alt="Image One" width={300} height={300} />
        <Image src={Image_02} alt="Image One" width={300} height={300} />
        <Image
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D"
          alt="Remote Image"
          width={300}
          height={300}
        />
      </div>
    </Wrapper>
  );
};

export default Services;
