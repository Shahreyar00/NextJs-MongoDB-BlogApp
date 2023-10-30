import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, Shahreyar here!</b> Discover my stories and creative ideas.
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <Link href={`/posts/travel`}>
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
                    </Link>
                    <p className={styles.postDesc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Cupiditate, quam nisi magni ea laborum inventore voluptatum
                        laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                        quisquam! Harum unde sit culpa debitis.
                    </p>
                    <button className={styles.button}>
                        <Link href={`/posts/travel`}>
                            Read More
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
