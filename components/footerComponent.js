import styles from "../styles/Home.module.css";
import Button from "/components/buttonComponent";

export default function FooterComponent() {
  return (
    <>
      <p className={styles.findMe}>Feel free to contact me here:</p>

      <div className={styles.buttonContainer}>
        <Button
          link={"https://www.instagram.com/tim.summers99/"}
          name={" tim.summers99 "}
          imagesrc={"/instagramLogo.png"}
        />
        <Button
          link={"https://www.linkedin.com/in/timothymaxwellsummers/"}
          name={" Timothy Summers "}
          imagesrc={"/linkedInLogo.png"}
        />
      </div>

      <p className={styles.comment}>
        *This site was created by myself using react with next.js :)
      </p>
    </>
  );
}
