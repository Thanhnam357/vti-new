import React from "react";
import styles from "../styles/login.module.scss";
import googleLogo from "../assets/images/google.png"; 

const Login = () => {
  return (
    <div className={styles.loginScreen}>
      {/* User */}
      <div className={`${styles.loginSection} ${styles.userSection}`}>
        <h2>User Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>
        <div className={styles.googleLogin}>
          <span>Đăng nhập với Google</span>
          <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
        </div>
      </div>

      {/* Author */}
      <div className={`${styles.loginSection} ${styles.authorSection}`}>
        <h2>Author Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
          <button type="submit">Login</button>
        </form>
        <div className={styles.googleLogin}>
          <span>Đăng nhập với Google</span>
          <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
        </div>
      </div>
    </div>
  );
};

export default Login;