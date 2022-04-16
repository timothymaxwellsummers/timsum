import styles from "../styles/tableOfContents.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <>
        <Link href="/projects">
          <a className={styles.card}>
            <p>
              Projects <span>&rarr;</span>
            </p>
          </a>
        </Link>

        <Link href="/coolStuff">
          <a className={styles.card}>
            <p>
            Stuff I like <span>&rarr;</span>
            </p>
          </a>
        </Link>
    </>
  );
}
