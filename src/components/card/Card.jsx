import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
    // const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste, quidem error accusantium maxime natus minus numquam quas laboriosam nihil, unde ullam provident culpa possimus aspernatur id itaque asperiores, autem dignissimos inventore? Neque voluptas animi consequatur obcaecati impedit, quod necessitatibus tenetur unde consequuntur asperiores aspernatur saepe! Quidem similique et commodi mollitia, recusandae magni odio ducimus dicta est doloremque nesciunt repudiandae!"
    function shorten(str, maxLen, separator = ' ') {
        if (str.length <= maxLen) return str;
        return str.substr(0, str.lastIndexOf(separator, maxLen));
    }
    return (
        <div className={styles.container} key={key}>
            {item.img && (
                <div className={styles.imageContainer}>
                    <Image src={item.img} alt="" fill className={styles.image} />
                </div>
            )}
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.substring(0, 10)} -{" "}
                    </span>
                    <span className={styles.category}> {item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <div className={styles.desc} >
                    {item?.desc?.length > 120 ? (
                        shorten(item.desc, 120) + '...'
                    ) : (
                        item.desc
                    )}
                </div>
                {/* <div className={styles.desc} dangerouslySetInnerHTML={{ __html: description.substring(0, 120) }} /> */}
                <Link href={`/posts/${item.slug}`} className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card