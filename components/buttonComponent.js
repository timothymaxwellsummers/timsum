import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Button({ link, name, imagesrc }) {
  return (
    <div>
        <a href={link} className={styles.button}>
        <Image
              priority
              src={imagesrc}
              className={styles.image}
              height={15}
              width={15}
            />
        {name}
        <span>&rarr;</span>
        </a>
    </div>
  );
}
