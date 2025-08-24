import RentHeroSection from "../components/rent/RentHeroSection";

function Rent() {
  return (
    <div className="no-scrollbar flex h-full min-h-0 w-full snap-y snap-mandatory flex-col overflow-y-auto scroll-smooth">
      <RentHeroSection />
    </div>
  );
}

export default Rent;
