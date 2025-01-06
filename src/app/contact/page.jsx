"use client";
import Wrapper from "@/components/wrapper";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <div className="contact-style">
        <h3 className={styles.heading}>What is your name?</h3>
        <input
          type="text"
          placeholder="Input Your Name"
          className={styles.input}
        />
        <button className="submit-button">Submit</button>
        <button
          className="submit-button"
          type="button"
          onClick={() => router.push("/about")}
        >
          Go to About
        </button>
        <button
          className="submit-button"
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
      </div>
    </Wrapper>
  );
};

export default Contact;
