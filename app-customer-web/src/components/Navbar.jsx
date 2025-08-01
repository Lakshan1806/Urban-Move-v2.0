import { Link } from "react-router-dom";

import logo from "../assets/urban-move-colour.svg";

function NavBar() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/rent", label: "Rent" },
    { path: "/ride", label: "Ride" },
    { path: "/drive", label: "Drive" },
  ];

  return (
    <div className="sticky top-0 flex h-full w-full items-center justify-between bg-black p-4">
      <div className="flex justify-center">
        <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
      </div>
      <div className="flex gap-5">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className="button-primary uppercase"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
