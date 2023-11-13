import React from "react";
import styles from "./cardList.module.css";
import Card from "../card/Card";
import Pagination from "../pagination/Pagination";
import { MAX_PAGE } from "@/utils/constants";

const getData = async (page, cat) => {
    const res = await fetch(
        `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("Failed");
    }

    return res.json();
};

const CardList = async ({ page, cat }) => {
    const { posts, count } = await getData(page, cat);

    const POST_PER_PAGE = MAX_PAGE;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Recent Posts</h1>
            <div className={styles.posts}>
                <div className={styles.post}>
                    {posts?.map((item) => (
                        <Card item={item} key={item._id} />
                    ))}
                    {/* <Card />
                    <Card />
                    <Card /> */}
                </div>
                <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
            </div>
        </div>
    )
}

export default CardList