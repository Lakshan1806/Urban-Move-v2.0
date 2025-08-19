import logo from "../assets/urban-move.svg";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Toast } from "primereact/toast";
import { useState, useRef } from "react";
import { UserContext } from "../auth/UserContext";
import { useContext } from "react";
import axios from "axios";
import getToastSeverity from "../utils/getToastSeverity";
import throbber from "../assets/throbber.gif";

function SignIn() {
  const toast = useRef(null);
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const canSubmit = username.trim() !== "" && password.trim() !== "";

  const loginData = {
    username: username,
    password: password,
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const loginRes = await axios.post("/admin/login", loginData);
      toast.current.show({
        severity: getToastSeverity(loginRes.status),
        detail: loginRes.data.message || "Login successful",
        life: 1000,
      });

      const profileRes = await axios.get("/admin/profile");
      toast.current.show({
        severity: getToastSeverity(profileRes.status),
        detail: profileRes.data.username
          ? `Welcome, ${profileRes.data.username}!`
          : "Profile loaded",
        life: 1000,
      });
      await new Promise((res) => setTimeout(res, 2000));
      localStorage.setItem("userData", JSON.stringify(profileRes.data));
      setUser(profileRes.data);
    } catch (err) {
      const status = err.response?.status;
      toast.current.show({
        severity: getToastSeverity(status || 500),
        summary: status ? `Error ${status}` : "Network Error 1",
        detail: err.response?.data?.message || err.message,
        life: 1000,
      });
      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="relative flex h-full max-w-[340px] flex-col items-center justify-center gap-[42px]">
        <div className="flex flex-col items-center text-[36px] font-[700]">
          <h1 className="text-grad-stroke" data-text="Administrator">
            Administrator
          </h1>
          <h1 className="text-grad-stroke" data-text="Sign In">
            Sign In
          </h1>
        </div>

        <img src={logo} className="h-[200px] w-[200px]" />

        <TfiLayoutLineSolid
          className="block h-12 w-full [&>path:not([fill='none'])]:fill-[url(#icon-gradient)]"
          preserveAspectRatio="none"
        />

        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSignin}
            className="flex flex-col items-center gap-[42px]"
          >
            <div className="flex w-[300px] flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="rounded-md border border-gray-300 p-1"
                value={username}
                disabled={loading}
                required
              />
            </div>

            <div className="flex w-[300px] flex-col">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="rounded-md border border-gray-300 p-1"
                value={password}
                disabled={loading}
                required
              />
            </div>

            <div
              className={`button-wrapper ${loading ? "hover:shadow-none" : ""}`}
            >
              <button
                type="submit"
                disabled={!canSubmit || loading}
                className={`button-primary ${!canSubmit ? "cursor-default opacity-40" : ""} ${loading ? "cursor-progress opacity-40" : ""}`}
              >
                SIGN IN
              </button>
            </div>
          </form>

          {loading && (
            <div className="absolute bottom-0 z-50 flex items-center justify-center">
              <img src={throbber} className="mb-4 h-10 w-10" alt="Loading..." />
            </div>
          )}
        </div>
      </div>
      <Toast ref={toast} position="bottom-right" />
    </div>
  );
}

export default SignIn;
