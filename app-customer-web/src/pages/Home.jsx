import HomeActionCards from "../components/Home/HomeActionCards";
import Promotions from "../components/Home/Promotions";

function Home() {
  return (
    <div className="flex h-full min-h-0 w-full snap-y snap-mandatory flex-col overflow-y-auto scroll-smooth">
      <HomeActionCards />
      <Promotions />
    </div>
  );
}

export default Home;
