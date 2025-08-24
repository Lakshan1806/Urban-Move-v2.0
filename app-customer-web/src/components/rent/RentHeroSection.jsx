import drive from "../../assets/rent/rent.png";

function RentHeroSection() {
  return (
    <div className="flex h-full w-full shrink-0 snap-start items-center justify-around pt-25 pb-4">
      <div>Text</div>
      <div>text</div>
      <div className="button-wrapper">
        <button className="button-primary">Get Started</button>
      </div>
      <img src={drive} className="h-full rounded-3xl" />
    </div>
  );
}

export default RentHeroSection;
