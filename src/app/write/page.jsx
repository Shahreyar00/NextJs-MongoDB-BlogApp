"use client";

import React, { useEffect, useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { IoAddOutline, IoImagesOutline } from "react-icons/io5";
import { BsUpload, BsCameraVideoFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";
// import dynamic from "next/dynamic";


const WritePage = () => {
    const { status } = useSession();
    // For deploying next.js we have to import react-quill dynamically because of ssr nature of next.js
    // const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [catSlug, setCatSlug] = useState("");

    useEffect(() => {
        const storage = getStorage(app);
        const upload = () => {
            const name = new Date().getTime() + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => { },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                    });
                }
            );
        };

        file && upload();
    }, [file]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    if (status === "unauthenticated") {
        router.push("/");
    }

    const slugify = (str) =>
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");


    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
                catSlug: catSlug || "style", //If not selected, choose the general category
            }),
        });

        if (res.status === 200) {
            const data = await res.json();
            router.push(`/posts/${data.slug}`);
        }
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
                            <label htmlFor="image">
                                <IoImagesOutline />
                            </label>
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

export default WritePage;