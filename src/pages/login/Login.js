import { React, useContext } from "react";
import { Link } from "react-router-dom";
import "./login.scss";

import { AuthContext } from "../../context/authContext";

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

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
          <Link to="/register">
            <button>Đăng kí</button>
          </Link>
        </div>

        <div className="right">
          <h1>Đăng nhập</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Đăng nhập</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
