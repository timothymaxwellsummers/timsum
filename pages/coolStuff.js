import Head from "next/head";
import styles from "../styles/Home.module.css";
import Pages from "/components/navigation";
import FooterComponent from "../components/footerComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>timsum.net</title>
        <meta name="timsum" content="Projects Page" />
        <meta property="og:title" content="timsum.net" />
        <meta property="og:description" content="Hi I&apos;m Timothy Summers. Checkout my personal website!" />
        <meta property="og:image" content="/backgroundSmall.jpg" />
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
