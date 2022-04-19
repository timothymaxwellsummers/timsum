import styles from "../styles/button.module.css";
import Image from "next/image";

export default function Button({ link, name, imagesrc }) {
  return (
    <a href={link} className={styles.button}>
      <div>
      <Image
        priority
        src={imagesrc}
        className={styles.image}
        height={15}
        width={15}
      />
      {name}
      </div>
    </a>
  );
}
