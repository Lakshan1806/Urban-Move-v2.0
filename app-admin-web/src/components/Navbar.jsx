import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/urban-move.svg";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { TbCarSuvFilled } from "react-icons/tb";
import { BsPersonBadge } from "react-icons/bs";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaUserShield } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../auth/UserContext";
import { useContext } from "react";
import Roles from "../auth/roles";

function Navbar() {
  const { setAdmin, admin } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleSignout() {
    localStorage.removeItem("adminData");
    await axios.post("/admin/logout", {});
    setAdmin(null);
    navigate("/", { replace: true });
  }

  const navItems = [
    { path: "/dashboard", label: "Home", Icon: MdOutlineMapsHomeWork },
    { path: "/dashboard/rentals", label: "Rentals", Icon: TbCarSuvFilled },
    { path: "/dashboard/customers", label: "Customers", Icon: BsPersonBadge },
    { path: "/dashboard/drivers", label: "Drivers", Icon: BsPersonBadgeFill },
    {
      path: "/dashboard/financials",
      label: "Financials",
      Icon: MdOutlineAttachMoney,
    },
    {
      path: "/dashboard/messages",
      label: "Messages",
      Icon: BiMessageRoundedDetail,
    },
    {
      path: "/dashboard/account",
      label: "Account",
      Icon: IoPersonCircleOutline,
    },
    {
      path: "/dashboard/settings",
      label: "Administration",
      Icon: FaUserShield,
      allowedRole: Roles.SUPER_ADMIN,
    },
  ];

  return (
    <nav className="flex h-dvh flex-col items-center justify-between bg-gradient-to-t from-[#000000] from-4% via-[#202020] via-72% to-[#FFFFFF] to-100% py-5">
      <header>
        <img src={Logo} alt="Logo" className="h-[139px] w-[148px]" />
      </header>

      <div className="flex min-h-[500px] flex-col justify-between">
        {navItems
          .filter(
            (item) =>
              !item.allowedRole || (admin && admin.role === item.allowedRole),
          )
          .map(({ path, label, Icon }) => {
            return (
              <Link
                to={path}
                key={path}
                className="button-primary flex items-center gap-4"
              >
                <Icon className="[&>path:not([fill='none'])]:fill-[url(#icon-gradient)]" />
                {label}
              </Link>
            );
          })}
      </div>

      <div
        className="button-primary flex justify-center"
        onClick={handleSignout}
      >
        Sign out
      </div>
    </nav>
  );
}

export default Navbar;
