"use client";

import React, { useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { IoAddOutline, IoImagesOutline } from "react-icons/io5";
import { BsUpload, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";


const WritePage = () => {
    const status = "not_loading";

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated") {
        router.push("/");
    }

    const handleSubmit = async () => {
        console.log('Handle submit!');
    };


    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Title..."
                    className={styles.input}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className={styles.publish} onClick={handleSubmit}>
                    Publish
                </button>
            </div>
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
                <option value="style">Style</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="culture">Culture</option>
                <option value="travel">Travel</option>
                <option value="coding">Coding</option>
            </select>
            <div className={styles.editor}>
                <button className={styles.button} onClick={() => setOpen(!open)}>
                    {open === true ? (
                        <AiOutlineClose />
                    ) : (

                        <IoAddOutline />
                    )}
                </button>
                {open && (
                    <div className={styles.add}>
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <button className={styles.addButton}>
                            <IoImagesOutline />
                        </button>
                        <button className={styles.addButton}>
                            <BsUpload />
                        </button>
                        <button className={styles.addButton}>
                            <BsCameraVideoFill />
                        </button>
                    </div>
                )}
                <ReactQuill
                    className={styles.textArea}
                    theme="bubble"
                    value={value}
                    onChange={setValue}
                    placeholder="Tell your story..."
                />
            </div>
        </div>
    )
}

export default WritePage