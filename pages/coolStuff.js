import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Button from "/components/buttonComponent";
import Pages from "/components/tableOfContents";
import FooterComponent from "../components/footerComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>timsum.net</title>
        <meta name="timsum" content="Projects Page" />
        <link rel="icon" href="/timMemoji.png" />
      </Head>

      <main className={styles.main}>

        <Pages/>

        <p className={styles.helper}>More content coming soon, stay tuned... 🎸</p>

        <FooterComponent/>
      </main>
    </div>
  );
}
