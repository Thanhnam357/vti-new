import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import styles from "../styles/writingpage.module.scss";

const WritingPage = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
      setCurrentTime(now.toLocaleDateString("vi-VN", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      
      <div className={styles.header}>
        <button className={styles.backButton}>
          <ArrowLeft size={20} /> Quay về trang bài viết
        </button>
        <span className={styles.time}>{currentTime}</span>
      </div>

      <div className={styles.formGroup}>
        <input type="text" placeholder="Tiêu đề" className={styles.input} />
        <select className={styles.select}>
          <option>Chủ đề</option>
        </select>
      </div>

      <textarea className={styles.textarea} placeholder="Nhập bài viết..."></textarea>

      <div className={styles.imageUpload}>
        <div className={styles.imagePlaceholder}>+ Chọn ảnh</div>
      </div>

      <input type="text" placeholder="#..." className={styles.input} />

      <div className={styles.buttonGroup}>
        <button className={styles.previewBtn}>Xem trước</button>
        <button className={styles.publishBtn}>Đăng bài</button>
      </div>
    </div>
  );
};

export default WritingPage;