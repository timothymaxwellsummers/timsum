import styles from "../styles/navigation.module.css";
import Link from "next/link";
import Tab from "./tabComponent";

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

      <Tab />
    </>
  );
}
