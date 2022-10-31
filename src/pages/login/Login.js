import React from "react";
import "./login.scss";
function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Vitus</h1>
          <h2>Xin chào !</h2>
          <p>
            Vitus là mạng xã hội do người Việt phát triển, lấy nội dung và trải
            nghiệm người dùng làm trọng tâm.
          </p>
          <span>Bạn chưa có tài khoản ?</span>
          <button>Đăng kí</button>
        </div>

        <div className="right">
          <h1>Đăng nhập</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
