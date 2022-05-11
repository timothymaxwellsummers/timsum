import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/navigation.module.css";

const Tab = ({ href, isSelected, title }) => (
    <Link href={href}>
      <a
        style={{
          padding: 10,
          margin: 5,
          backgroundColor: isSelected ? "rgb(22 95 135)" : "transparent",
          color: isSelected ? "#32cd32" : "#ffffff",
          borderRadius: "5px"
        }}
      >
        {title}
      </a>
    </Link>
)

export default function Home() {
    const { query } = useRouter();
  
    const isTabOneSelected = !!query.tabOne;
    const isTabTwoSelected = !!query.tabTwo;
    const isTabThreeSelected = !!query.tabThree;
  
    return (
      <>
          <nav className={styles.tabBar}>
            <Tab href="/?tabOne=true" title="Home" isSelected={isTabOneSelected || !isTabTwoSelected && !isTabThreeSelected} /> 
            <Tab href="/projects?tabTwo=true" title="Projects" isSelected={isTabTwoSelected} /> 
            <Tab href="/coolStuff?tabThree=true" title="Stuff I like" isSelected={isTabThreeSelected} /> 
          </nav>
      </>
    );
  }
  