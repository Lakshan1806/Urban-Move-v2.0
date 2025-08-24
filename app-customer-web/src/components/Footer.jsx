import logo from "../assets/urban-move-colour.svg";

function Footer() {
  const linkstyles1 =
    "font-sans bg-gradient-to-r from-[#FFD12E] to-[#FF7C1D] text-transparent bg-clip-text text-[15px] uppercase";

  const linkstyles2 =
    "font-sans bg-gradient-to-r from-[#FFD12E] to-[#FF7C1D] text-transparent bg-clip-text text-[12px]  rounded-[50px]";

  return (
    <nav className="flex h-[180px] w-full shrink-0 snap-start flex-col items-center justify-between bg-black py-4">
      <div className="flex h-2/3 w-full flex-row justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-full" />
        </div>
        <div>
          <p className={linkstyles1}>Contact us</p>
          <p className={linkstyles2}>Contact us</p>
        </div>
        <div>
          <p className={linkstyles1}>Company</p>
        </div>
        <div>
          <p className={linkstyles1}>Products</p>
        </div>
        <div>
          <p className={linkstyles1}>Follow Us</p>
        </div>
      </div>
      <div className="h-1/3"></div>
    </nav>
  );
}

export default Footer;
