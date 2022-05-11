import styles from "../styles/navigation.module.css";
import Link from "next/link";
import Tab from "./tabComponent";
import React, { Component } from "react";

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia("(min-width: 521px)").matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 521px)").addEventListener("change", handler);
  }

  render() {
    return (
      <>
        {this.state.matches && (
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
        )}
        {!this.state.matches && (
          <div className={styles.mobileHeader}>
            <h1 className={styles.title}>
              <Link href="/">
                <div>
                  timsum<span style={{ color: "#32cd32" }}>.</span>net
                </div>
              </Link>
            </h1>
            <Tab />
          </div>
        )}
      </>
    );
  }
}

export default Pages;
