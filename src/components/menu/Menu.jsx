import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";

const Menu = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <MenuPosts withImage={true} />
            <h2 className={styles.subtitle}>Discover by topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <h2 className={styles.subtitle}>Chosen by the editor</h2>
            <h1 className={styles.title}>Editors Pick</h1>
        </div>
    )
}

export default Menu