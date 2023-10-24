"use client";
import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const mockComment = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quis expedita fugiat neque perferendis possimus consequuntur ad perspiciatis id commodi? Rerum maxime, rem dicta quasi dolorum nostrum quam vel explicabo.";
    const status = "authenticated";
    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
    };

    const isLoading = false;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment..."
                        className={styles.input}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button className={styles.button} onClick={handleSubmit}>
                        Send
                    </button>
                </div>
            ) : (
                <Link href="/login">Login to write a comment</Link>
            )}
            <div className={styles.comments}>
                {isLoading ? "loading" :
                    <>
                        <div className={styles.comment}>
                            <div className={styles.user}>
                                <Image
                                    src="/food.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className={styles.image}
                                />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>Aman</span>
                                    <span className={styles.date}>24-10-2023</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{mockComment}</p>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.user}>
                                <Image
                                    src="/travel.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className={styles.image}
                                />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>Rahul</span>
                                    <span className={styles.date}>14-01-2023</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{mockComment}</p>
                        </div>
                        <div className={styles.comment}>
                            <div className={styles.user}>
                                <Image
                                    src="/coding.png"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className={styles.image}
                                />
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>Vishal</span>
                                    <span className={styles.date}>24-11-2023</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{mockComment}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default Comments