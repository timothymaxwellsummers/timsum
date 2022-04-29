import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cards from "../styles/projects.module.css";
import Pages from "/components/navigation";
import FooterComponent from "../components/footerComponent";
import ToolButton from "../components/toolButton";
import navStyles from "../styles/navigation.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>timsum.net</title>
        <meta name="timsum" content="Projects Page" />
        <meta property="og:title" content="timsum.net" />
        <meta
          property="og:description"
          content="Hi I'm Timothy Summers. Checkout my personal website!"
        />
        <meta property="og:image" content="/backgroundSmall.jpg" />
        <link rel="icon" href="/timMemoji.png" />
      </Head>

      <main className={styles.main}>
        <Pages />

        <div
          className={cards.wrapper}
          style={{ backgroundColor: "rgba(103, 103, 183, 0.3)" }}
        >
          <div className={cards.projectTitle}>
            <div className={cards.projectTitleText}>MailChampion</div>
          </div>

          <img src="/mailchampionHome.png" className={cards.projectImage} />

          <div className={cards.projectText}>
            Together with a group of students, we developed the MailChampion App
            for our client Equinux. This was all part of a university project
            @TUM - the iPraktikum.<br></br>
            The app&apos;s purpose was to bring email designing to the iPhone.
            Which we achieved with a modern Instagram-like UX.<br></br>Hit me up
            for more info ✌️ <br></br>
            <ToolButton
              name={"Swift UI"}
              color={{ color: "rgba(103, 103, 183, 1)" }}
            />
            <ToolButton
              name={"Xcode"}
              color={{ color: "rgba(103, 103, 183, 1)" }}
            />
            <ToolButton
              name={"Mjml"}
              color={{ color: "rgba(103, 103, 183, 1)" }}
            />
            <ToolButton
              name={"Figma"}
              color={{ color: "rgba(103, 103, 183, 1)" }}
            />
            <ToolButton
              name={"JSON"}
              color={{ color: "rgba(103, 103, 183, 1)" }}
            />
          </div>
        </div>

        <div
          className={cards.wrapper}
          style={{ backgroundColor: "rgba(50, 50, 50, 0.5)" }}
        >
          <div className={cards.projectTitle}>
            <Image
              priority
              src="/archillectLogo.jpeg"
              className={cards.projectLogo}
              height={50}
              width={50}
            />
            <div className={cards.projectTitleText}>Archillect App</div>
          </div>
          <img src="/archillectHome.png" className={cards.projectImage} />
          <div className={cards.projectText}>
            Some time back I discovered the archillect Instagram page which I
            really enjoyed. Archillect is an AI that posts visually stimulating
            content from various sources on Instagram.<br></br>I loved
            their posts and decided to create an app for myself that accesses
            the archillect API to display its current image in a widget on
            my iPhone. 🤓
            <br></br>
            <ToolButton
              name={"Swift UI"}
              color={{ color: "rgba(50, 50, 50, 1)" }}
            />
            <ToolButton
              name={"Xcode"}
              color={{ color: "rgba(50, 50, 50, 1)" }}
            />
            <ToolButton
              name={"JSON"}
              color={{ color: "rgba(50, 50, 50, 1)" }}
            />
          </div>
        </div>

        <div
          className={cards.wrapper}
          style={{ backgroundColor: "rgba(42, 42, 113, 0.3)" }}
        >
          <div className={cards.projectTitle}>
            <Image
              priority
              src="/milouLogo.png"
              className={cards.projectLogo}
              height={50}
              width={50}
            />
            <div className={cards.projectTitleText}>milou.io</div>
          </div>
          <img src="/milouHome.jpg" className={cards.projectImage} />
          <div className={cards.projectText}>
            milou.io was also a university project and part of the
            JavaScript-Seminar @TUM. This site should help investors to analyze
            stocks and portfolios. 📈<br></br>
            Together with my team we were mostly responsible for data
            visualization e.g. visualizing balance sheets or other key metrics
            of a company.<br></br>
            <ToolButton
              name={"React"}
              color={{ color: "rgba(42, 42, 113, 1)" }}
            />
            <ToolButton
              name={"TypeScript"}
              color={{ color: "rgba(42, 42, 113, 1)" }}
            />
            <ToolButton
              name={"JSON"}
              color={{ color: "rgba(42, 42, 113, 1)" }}
            />
            <ToolButton
              name={"ApexCharts"}
              color={{ color: "rgba(42, 42, 113, 1)" }}
            />
          </div>
        </div>

        <div
          className={cards.wrapper}
          style={{ backgroundColor: "rgba(42, 185, 116, 0.3)" }}
        >
          <div className={cards.projectTitle}>
            <Image
              priority
              src="/loyaLogo.png"
              className={cards.projectLogo}
              height={50}
              width={50}
            />
            <div className={cards.projectTitleText}>LOYA</div>
          </div>
          <img src="/loyaHome.png" className={cards.projectImage} />
          <div className={cards.projectText}>
            LOYA was a Seminar project. Here together with a friend we explored
            the idea of a digital loyalty card system for cafes and Take-outs. ☕️ 🥡
            <br></br>This Figma project served as the MVP for this idea and was therefore presented in the seminar's final presentation!<br></br>
            <ToolButton
              name={"Figma"}
              color={{ color: "rgba(42, 185, 116, 1)" }}
            />
          </div>
        </div>

        <span className={navStyles.helper}></span>
        <Link href="/?tabOne=true">
          <a className={navStyles.card}>
            <p>
              Home <span>&rarr;</span>
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
