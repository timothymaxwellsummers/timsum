import styles from "../styles/tableOfContents.module.css";
import Link from "next/link";

export default function Pages() {
  return (
    <>
      <h1 className={styles.title}>
          <Link href="/">
            <div>
            timsum<span style={{ color: "#32cd32" }}>.</span>net
            </div>
            
            </Link>
        </h1>

        <p className={styles.center}>Hi I&apos;m Timothy Summers welcome to my personal website. Enjoy!</p>

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
