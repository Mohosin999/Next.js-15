import Wrapper from "@/components/wrapper";

export default function AuthLayout({ children }) {
  return (
    <section>
      <Wrapper>
        <p>This is auth layout</p>
      </Wrapper>
      {children}
    </section>
  );
}
