import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
import Menu from "@/components/menu/Menu";

const singlePage = async ({ params }) => {
    const { slug } = params;
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste, quidem error accusantium maxime natus minus numquam quas laboriosam nihil, unde ullam provident culpa possimus aspernatur id itaque asperiores, autem dignissimos inventore? Neque voluptas animi consequatur obcaecati impedit, quod necessitatibus tenetur unde consequuntur asperiores aspernatur saepe! Quidem similique et commodi mollitia, recusandae magni odio ducimus dicta est doloremque nesciunt repudiandae!"

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, debitis.</h1>
                    <div className={styles.user}>
                        <div className={styles.userImageContainer}>
                            <Image src="/food.png" alt="" fill className={styles.avatar} />
                        </div>
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>Shahreyar</span>
                            <span className={styles.date}> 24-10-2023</span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/style.png" alt="" fill className={styles.image} />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.post}>
                    <div
                        className={styles.description}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <div className={styles.comment}>
                        <Comments postSlug={slug} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default singlePage