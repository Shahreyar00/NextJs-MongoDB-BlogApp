import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste, quidem error accusantium maxime natus minus numquam quas laboriosam nihil, unde ullam provident culpa possimus aspernatur id itaque asperiores, autem dignissimos inventore? Neque voluptas animi consequatur obcaecati impedit, quod necessitatibus tenetur unde consequuntur asperiores aspernatur saepe! Quidem similique et commodi mollitia, recusandae magni odio ducimus dicta est doloremque nesciunt repudiandae!"
    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        22-10-2023
                    </span>
                    <span className={styles.category}> travel</span>
                </div>
                <Link href={`/posts/travel`}>
                    <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis.</h1>
                </Link>
                <div className={styles.desc} >
                    {description.length > 120 ? (
                        shorten(description, 120) + '...'
                    ) : (
                        description
                    )}
                </div>
                {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description.substring(0, 120) }} /> */}
                <Link href={`/posts/travel`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card