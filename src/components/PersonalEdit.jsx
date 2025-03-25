import React from "react";
import styles from "../styles/personaledit.module.scss";
import { FaUser, FaCalendarAlt, FaPhone, FaMapMarkerAlt, FaSave, FaCog } from "react-icons/fa";

const PersonalEdit = () => {
  return (
    <div className={styles.personalEditContainer}>
      <aside className={styles.sidebar}>
        <button className={styles.active}><FaUser /> Thông tin tài khoản</button>
        <button><FaCog /> Chỉnh sửa</button>
      </aside>

      <main className={styles.personalEditContent}>
        <div className={styles.profileHeader}>
          <div className={styles.avatar}>+</div>
          <button className={styles.editButton}><FaCog /> Chỉnh sửa</button>
        </div>

        <h2>Thông tin cá nhân</h2>
        <form className={styles.personalEditForm}>
          <label>
            HỌ VÀ TÊN
            <input type="text" placeholder="Nhập họ và tên..." className={styles.inputField} />
          </label>
          <label>
            NGÀY SINH
            <div className={styles.inputGroup}>
              <input type="text" placeholder="dd / mm / yyyy" className={styles.inputField} />
              <FaCalendarAlt className={styles.icon} />
            </div>
          </label>
          <label>
            SỐ ĐIỆN THOẠI
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Nhập số điện thoại..." className={styles.inputField} />
              <FaPhone className={styles.icon} />
            </div>
          </label>
          <label>
            ĐỊA CHỈ
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Nhập địa chỉ..." className={styles.inputField} />
              <FaMapMarkerAlt className={styles.icon} />
            </div>
          </label>
          <button className={styles.saveButton}><FaSave /> Lưu</button>
        </form>
      </main>
    </div>
  );
};

export default PersonalEdit;