import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Vitus</h1>
          <h2>Xin chào !</h2>
          <p>
            Vitus là mạng xã hội do người Việt phát triển, lấy nội dung và trải
            nghiệm người dùng làm trọng tâm.
          </p>
          <span>Bạn đã có tài khoản ?</span>
          <Link to="/login">
            <button>Đăng nhập</button>
          </Link>
        </div>

        <div className="right">
          <h1>Đăng kí</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="emmail" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Đăng kí</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
