import rent from "../../assets/Home/rent.png";
import ride from "../../assets/Home/ride.png";
import drive from "../../assets/Home/drive.png";

function HomeActionCards() {
  return (
    <div className="flex h-full w-full shrink-0 snap-start items-center justify-around p-4">
      <img src={rent} className="w-[450px] rounded-3xl" />
      <img src={ride} className="h-full rounded-3xl" />
      <img src={drive} className="w-[450px] rounded-3xl" />
    </div>
  );
}

export default HomeActionCards;
