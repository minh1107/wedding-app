import React, { useEffect, useRef, useState } from "react";
import { apiLoginUser } from "../../api/apiUser";

function Login() {
  const [data, setData] = useState({});
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const getApiLoginUser = async (data) => {
    const response = await apiLoginUser(data);
    console.log(response);
    return response.data;
  };
  useEffect(() => {
    getApiLoginUser(data);
  }, [data]);
  const handleLogin = () => {
    const info = {
      email: user,
      password: pass
    };
    setData(info);
  };
  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPass(e.target.value);
  };
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-violet-400 ">
      <div className=" text-[20px] items-center flex flex-col gap-3 pt-[10%] pb-[34%]">
        <div className="text-[36px] font-extrabold text-text-normal">Login</div>
        <div className="w-[25%] flex">
          <input
            onChange={handleChangeUser}
            value={user}
            placeholder="Email"
            type="text"
            className=" p-2 border-none outline-none rounded-l-md w-full pl-4"
          />
          <div
            onClick={() => setUser("")}
            className="bg-white p-2 rounded-r-md cursor-pointer"
          >
            {user && <box-icon name="x"></box-icon>}
          </div>
        </div>
        <div className="w-[25%] flex">
          <input
            onChange={handleChangePassword}
            value={pass}
            placeholder="Password"
            type="text"
            className=" w-full p-2 border-none outline-none rounded-l-md pl-4"
          />
          <div
            onClick={() => setPass("")}
            className="bg-white p-2 rounded-r-md cursor-pointer"
          >
            {pass && <box-icon name="x"></box-icon>}
          </div>
        </div>
        <button
          onClick={handleLogin}
          className="w-[10%] text-center mt-6 bg-[#1E755A] hover:opacity-80 p-2 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
