import React, { useState } from "react";
import styles from "../styles/signup.module.scss"

const Signup = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
    confirmPassword: ""
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Mật khẩu và Nhập lại mật khẩu không khớp!");
    } else {
      console.log("Thông tin đăng ký:", formData);
      
    }
  };

  return (
    <div>
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Nhập email của bạn"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tên hiển thị:</label>
          <input
            type="text"
            name="displayName"
            placeholder="Nhập tên hiển thị"
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nhập lại mật khẩu:</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Nhập lại mật khẩu"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Signup