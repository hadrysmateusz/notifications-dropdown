import React from "react";
import styles from "./App.module.css";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.pageBody}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
        cupiditate ea ipsam odit tempora velit veritatis vitae voluptatem.
        Labore libero necessitatibus suscipit veniam voluptate. Aut beatae nisi
        nostrum obcaecati repudiandae.
      </div>
    </div>
  );
}

export default App;
