import Wrapper from "@/components/Wrapper";
import styles from "./styles.module.css";

const Contact = () => {
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
      </div>
    </Wrapper>
  );
};

export default Contact;
