import Wrapper from "@/components/Wrapper";

export default function AboutLayout({ children }) {
  return (
    <section>
      <Wrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. At est,
          doloribus unde repellat nemo illum libero magni veniam. Expedita,
          facilis! Ea quisquam esse dolorum ut perspiciatis odio maiores at
          voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Vero cupiditate ad doloribus expedita a dolore odit dolorem molestias
          fuga optio animi exercitationem, corrupti quas et est excepturi esse
          magni sunt!
        </p>
      </Wrapper>
      {children}
    </section>
  );
}
