import { Link } from "react-router-dom";

import logo from "../assets/urban-move.svg";

function NavBar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/rent", label: "Rent" },
    { path: "/drive", label: "Hire" },
    { path: "/drive", label: "About" },
  ];

  const authLinks = [
    { path: "/signup", label: "Sign Up" },
    { path: "/signin", label: "Sign In" },
  ];

  return (
    <div className="absolute top-0 flex h-[80px] w-full items-center bg-white/5 px-2 backdrop-blur-md">
      <div className="flex h-full w-1/3 items-center justify-start">
        <img src={logo} alt="Logo" className="h-[70px] w-[70px]" />
      </div>
      <div className="flex w-1/3 justify-center gap-5">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className="text-grad-stroke text-[20px] font-[500]"
            data-text={item.label}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex w-1/3 justify-end gap-5">
        {authLinks.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className="button-wrapper text-[16px]"
            data-text={item.label}
          >
            <div className="button-primary">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
