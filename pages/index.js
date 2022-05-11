import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Pages from "/components/navigation";
import FooterComponent from "../components/footerComponent";
import navStyles from "../styles/navigation.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>timsum.net</title>
        <meta name="timsum" content="Landing Page" />
        <meta property="og:title" content="timsum.net" />
        <meta property="og:description" content="Hi I&apos;m Timothy Summers. Checkout my personal website!" />
        <meta property="og:image" content="/backgroundSmall.jpg" />
        <link rel="icon" href="/timMemoji.png" />
      </Head>

      <main className={styles.main}>
        
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
                Hi, your interested in who I am? That&apos;s nice... <br></br>So I&apos;m Timothy Summers but, in
                general, people call me Tim. I&apos;m currently enrolled in my
                bachelor&apos;s degree at TUM in Munich for Information Sciences.
                <br></br>I like to create digital content and do a lot of
                sports.<br></br>Check out this site to find out more about myself or
                contact me below.<br></br><br></br>
                <i>Have a nice day - Tim</i>
              </p>
            </div>
          </div>
        </div>

        <span className={navStyles.helper}></span>
        <Link href="/projects?tabTwo=true">
          <a className={navStyles.card}>
            <p>
              Projects <span>&rarr;</span>
            </p>
          </a>
        </Link>

        <Link href="/coolStuff?tabThree=true">
          <a className={navStyles.card}>
            <p>
            Stuff I like <span>&rarr;</span>
            </p>
          </a>
        </Link>
        <span className={navStyles.helper}></span>

        <FooterComponent />
      </main>
    </div>
  );
}
