import rent from "../../assets/Home/rent.png";
import ride from "../../assets/Home/ride.png";
import drive from "../../assets/Home/drive.png";

function Promotions() {
  return (
    <div className="flex h-full w-full shrink-0 items-center justify-around gap-4 p-4 snap-start">
      <img src={rent} className="h-full rounded-3xl" />
    </div>
  );
}

export default Promotions;
