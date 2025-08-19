const adminData = JSON.parse(localStorage.getItem("adminData") || "{}");
console.log("adminData:", adminData);
function Greeting() {
  return (
    <div className="absolute top-0 right-0 flex items-center gap-4 px-[50px] py-[20px]">
      <img
        className="h-12 w-12 rounded-full object-cover"
        src={adminData.photo}
        alt="Urban Move Logo"
      />
      <div className="flex flex-col">
        <p className="text-sm font-semibold">Welcome back!</p>
        <p className="text-lg font-bold">{adminData.username}</p>
      </div>
    </div>
  );
}

export default Greeting;
