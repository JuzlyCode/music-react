import { useState } from "react";
import request from "utils/request";
import requestGuest from "utils/request-guest";
import "./Logo.css";
export default function Authenticate() {
  const [show, setShow] = useState(1);
  const tab = (e) => {
    setShow(e);
  };

  return (
    <div>
      <div className="flex">
        <button className="text-white" onClick={() => tab(2)}>
          Sign In
        </button>
        <p className="text-white text-xl mt-[-2px] mr-3 ml-3">|</p>
        <button className="text-white " onClick={() => tab(3)}>
          Sign Up
        </button>
      </div>
      {show === 2 && <Login tab={tab} />}
      {show === 3 && <Register tab={tab} />}

      {/* Sign Up */}
    </div>
  );
}

const Login = ({ tab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    requestGuest({
      url: "/login-user",
      method: "POST",
      data: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => {
      console.log(res, "login-user");
      if (res.status === "sucess") {
        alert("Đăng nhập thành công");
        window.localStorage.setItem("token", res.data);
        tab(1);
      } else {
        alert("Sai tài khoản hoặc mật khẩu vui lòng kiểm tra lại");
      }
    });
  }
  return (
    <div
      className={
        "fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10 text-black"
      }
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]" />
      <div className="bg-white z-[11] min-w-[450px]">
        <div className="flex relative w-[100%] h-16 bg-green-300">
          <div className="absolute top-0 right-0">
            <button className="bg-white w-7 text-black" onClick={() => tab(1)}>
              X
            </button>
          </div>
          <p className="m-auto text-[30px] font-[600]">Sign In</p>
        </div>
        <form onSubmit={handleSubmit} className="w-[100%]">
          <div className="w-[100%] p-3">
            <input
              className="w-[100%] p-2 border-2 border-slate-700"
              type="email"
              required
              placeholder="Email Account..."
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="w-[100%] pl-3 pr-3 pb-3">
            <input
              className="w-[100%] p-2 border-2 border-slate-700"
              type="password"
              required
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="w-[100%] pl-3 pr-3 pb-3 flex justify-between">
            <button
              className=" p-2 flex items-center border-2 border-slate-700"
              type="submit  "
            >
              <div className="Logo mr-2"></div> Sign In With Google
            </button>
            <button
              className="w-[30%] p-2 border-2 border-slate-700"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Register = ({ tab }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const handleSubmit = (e) => {
    if (password !== checkPassword) {
      e.preventDefault();
      alert("Mật khẩu nhập lại không đúng");
    } else {
      e.preventDefault();
      requestGuest({
        url: "/register",
        method: "POST",
        data: JSON.stringify({
          email,
          password,
        }),
      }).then((data) => {
        if (data.status === "sucess") {
          alert("Đăng ký thành công");
          tab(1);
        } else if (data.status === "User Exists") {
          alert("User này đã tồn tại");
        } else {
          alert("Có lỗi, vui lòng thử lại");
        }
      });
    }
  };
  return (
    <div
      className={
        "fixed top-0 bottom-0 flex justify-center items-center left-0 right-0 z-10"
      }
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-[0.7]" />
      <div className="bg-white z-[11] min-w-[450px]">
        <div className="flex relative w-[100%] h-16 bg-green-300">
          <div className="absolute top-0 right-0">
            <button className="bg-white w-7 text-black" onClick={() => tab(1)}>
              X
            </button>
          </div>
          <p className="m-auto text-[30px] font-[600]">Sign Up</p>
        </div>
        <form onSubmit={handleSubmit} className="w-[100%]">
          <div className="w-[100%] p-3">
            <input
              className="w-[100%] p-2 border-2 border-slate-700"
              type="email"
              placeholder="Email Account..."
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="w-[100%] pl-3 pr-3 pb-3">
            <input
              className="w-[100%] p-2 border-2 border-slate-700"
              type="password"
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="w-[100%] pl-3 pr-3 pb-3">
            <input
              className="w-[100%] p-2 border-2 border-slate-700"
              type="password"
              placeholder="Check Password..."
              onChange={(e) => setCheckPassword(e.target.value)}
            ></input>
          </div>
          <div className="w-[100%] pl-3 pr-3 pb-3 flex justify-between">
            <button
              className=" p-2 flex items-center border-2 border-slate-700"
              type="submit  "
            >
              <div className="Logo mr-2"></div> Sign Up With Google
            </button>
            <button
              className="w-[30%] p-2 border-2 border-slate-700"
              type="submit  "
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
