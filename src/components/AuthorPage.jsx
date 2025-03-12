import React, { useState, useEffect } from "react";
import styles from "../styles/authorPage.module.scss";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const AuthorPage = () => {
  const [views, setViews] = useState(1);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Ho_Chi_Minh" };
      setCurrentTime(now.toLocaleDateString("vi-VN", options) + " (GMT+7)");
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.authorPage}>
      {/* Author Info */}
      <section className={styles.authorInfo}>
        <div className={styles.avatarLarge}></div>
        <h2>Quốc Việt</h2>
        <div className={styles.stats}>
          <span>Bài viết: 1</span>
          <span>Lượt xem: {views}</span>
        </div>
        <div className={styles.filters}>
          <button>Bài viết mới nhất</button>
          <button>Bài viết cũ nhất</button>
          <button>Bài viết bị từ chối</button>
        </div>
      </section>

      {/* Post List */}
      <section className={styles.postList}>
        <div className={styles.postCard}>
          <div className={styles.postLeft}>
            <div className={styles.postActions}>
              <FaEye onClick={() => setViews(views + 1)} />
              <FaEdit />
              <FaTrash />
            </div>
            <div className={styles.postImage}></div> 
          </div>
          <div className={styles.postContent}>
            <h3 className={styles.postTitle}>Tạo thiết kế giao diện với Figma</h3> 
            <div className={styles.viewCount}>
              <span>Lượt xem: {views}</span>
              <span> | {currentTime}</span>
            </div>
          </div>
        </div>
      </section>

      <button className={styles.newPostBtn}>✏️ Bài viết mới</button>
    </div>
  );
};

export default AuthorPage;