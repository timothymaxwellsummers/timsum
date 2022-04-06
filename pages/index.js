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
        <meta name="timsum" content="Landing Page" />
        <link rel="icon" href="/timMemoji.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/">timsum.net</Link>
        </h1>

        <p className={styles.center}>Hi I'm Timothy Summers welcome to my personal website. Enjoy 🤓</p>

        <Pages />

        <div className={styles.description}>
          <div className={styles.grid}>
            <Image
              priority
              src="/profilePicture.png"
              className={styles.image}
              height={70}
              width={70}
            />
            <p className={styles.descriptionHeading}>About me and what I do:</p>
            <div className={styles.descriptionText}>
              <p className={styles.textModifier}>
                Hi so your interested in who I am? Thats nice... <br></br>So in
                general people call me Tim. I'm currentl enrolled in my
                bachelors degree at TUM in Munich for Information Sciences.
                <br></br>I like to create digital content and do a lot of
                sports.<br></br>Checkout this site to out more about myself or
                contact me below.<br></br><br></br>
                <i>Much luv Tim xx</i>
              </p>
            </div>
          </div>
        </div>
        <FooterComponent />
      </main>
    </div>
  );
}
