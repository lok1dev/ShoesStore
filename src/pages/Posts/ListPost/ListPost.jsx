import axios from "axios";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./ListPost.module.scss";
import Breadcumb from "~/components/Breadcumb/Breadcumb";

const cx = classNames.bind(styles);

function ListPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(process.env.BLOGGER_URL);
                setPosts(res.data.items);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        getPosts();
    }, []);

    // Function to extract first <img> tag from HTML string
    const extractFirstImg = (htmlContent) => {
        const doc = new DOMParser().parseFromString(htmlContent, "text/html");
        const imgElement = doc.querySelector("img");
        if (imgElement) {
            const imgSrc = imgElement.getAttribute("src");
            const imgClass = cx("img"); // Thêm class vào đây
            return `<img src="${imgSrc}" class="${imgClass}" />`;
        } else {
            return null;
        }
    };

    return (
        <div>
            <div className={cx("header")}>
                <h1 className={cx("header-title")}>Bài Viết</h1>
                <Breadcumb currentPage={"Posts"} />
            </div>
            {posts.map((post) => {
                const firstImg = extractFirstImg(post.content);
                return (
                    <a href={post.url} className={cx("wrapper")} key={post.id}>
                        {firstImg && <div className={cx("img")} dangerouslySetInnerHTML={{ __html: firstImg }} />}
                        <div className={cx("info")}>
                            <h2 className={cx("title")}>{post.title}</h2>
                            <div className={cx("date")}>{new Date(post.published).toLocaleDateString()}</div>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}

export default ListPosts;
