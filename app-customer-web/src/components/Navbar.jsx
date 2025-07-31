import { Link } from "react-router-dom";

import logo from "../assets/urban-move-colour.svg";

function NavBar() {
  const navItems = [{ path: "/", label: "Home" }];

  const linkstyles1 =
    "font-sans bg-gradient-to-r from-[#FFD12E] to-[#FF7C1D] text-transparent bg-clip-text text-[15px] uppercase";

  const linkstyles2 =
    "font-sans bg-gradient-to-r from-[#FFD12E] to-[#FF7C1D] text-transparent bg-clip-text text-[15px] uppercase rounded-[50px]";

  return (
    <div className=" bg-black w-full  z-20 h-full px-[25px] flex flex-row items-center justify-between top-0 sticky">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <div className="relative flex-1 flex justify-center lg:justify-start ">
          <img src={logo} alt="Logo" className="w-[60px] h-[60px] " />
        </div>
      </div>
      <div>
        {navItems.map((item) => (
          <Link to={item.path} key={item.path} className={linkstyles1}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
