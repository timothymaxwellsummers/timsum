import Head from "next/head";
import styles from "../styles/Home.module.css";
import FooterComponent from "../components/footerComponent";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("/components/navigation"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <object data="/Summers_CV_Eng.pdf" type="application/pdf" className={styles.pdf}>
      <p>Sorry something didn't workout :/ <a href="/Summers_CV_Eng.pdf">find the PDF here!</a></p>
  </object>
  );
}
