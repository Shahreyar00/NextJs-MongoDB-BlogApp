"use client";

import React, { useState } from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) {
        const error = new Error(data.message);
        throw error;
    }

    return data;
};

const Comments = ({ postSlug }) => {
    const mockComment = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam quis expedita fugiat neque perferendis possimus consequuntur ad perspiciatis id commodi? Rerum maxime, rem dicta quasi dolorum nostrum quam vel explicabo.";
    const { status } = useSession();

    const { data, mutate, isLoading } = useSWR(
        `http://localhost:3000/api/comments?postSlug=${postSlug}`,
        fetcher
    );

    const [desc, setDesc] = useState("");

    const handleSubmit = async () => {
        await fetch("/api/comments", {
            method: "POST",
            body: JSON.stringify({ desc, postSlug }),
        });
        mutate();
        setDesc("");
    };

    // console.log('Comments data:', data);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {status === "authenticated" ? (
                <div className={styles.write}>
                    <textarea
                        placeholder="Write a comment..."
                        className={styles.input}
                        value={desc}
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
                    data?.map((item) => (
                        <div className={styles.comment} key={item._id}>
                            <div className={styles.user}>
                                {item?.user?.image && (
                                    <Image
                                        src={item.user.image}
                                        alt=""
                                        width={50}
                                        height={50}
                                        className={styles.image}
                                    />
                                )}
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item.user.name}</span>
                                    <span className={styles.date}>{item.createdAt}</span>
                                </div>
                            </div>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    ))
                    // <>
                    //     <div className={styles.comment}>
                    //         <div className={styles.user}>
                    //             <Image
                    //                 src="/food.png"
                    //                 alt=""
                    //                 width={50}
                    //                 height={50}
                    //                 className={styles.image}
                    //             />
                    //             <div className={styles.userInfo}>
                    //                 <span className={styles.username}>Aman</span>
                    //                 <span className={styles.date}>24-10-2023</span>
                    //             </div>
                    //         </div>
                    //         <p className={styles.desc}>{mockComment}</p>
                    //     </div>
                    //     <div className={styles.comment}>
                    //         <div className={styles.user}>
                    //             <Image
                    //                 src="/travel.png"
                    //                 alt=""
                    //                 width={50}
                    //                 height={50}
                    //                 className={styles.image}
                    //             />
                    //             <div className={styles.userInfo}>
                    //                 <span className={styles.username}>Rahul</span>
                    //                 <span className={styles.date}>14-01-2023</span>
                    //             </div>
                    //         </div>
                    //         <p className={styles.desc}>{mockComment}</p>
                    //     </div>
                    //     <div className={styles.comment}>
                    //         <div className={styles.user}>
                    //             <Image
                    //                 src="/coding.png"
                    //                 alt=""
                    //                 width={50}
                    //                 height={50}
                    //                 className={styles.image}
                    //             />
                    //             <div className={styles.userInfo}>
                    //                 <span className={styles.username}>Vishal</span>
                    //                 <span className={styles.date}>24-11-2023</span>
                    //             </div>
                    //         </div>
                    //         <p className={styles.desc}>{mockComment}</p>
                    //     </div>
                    // </>
                }
            </div>
        </div>
    )
}

export default Comments