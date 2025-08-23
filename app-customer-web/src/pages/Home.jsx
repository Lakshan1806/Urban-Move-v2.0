import Footer from "../components/Footer";
import HomeActionCards from "../components/home/HomeActionCards";
import HomeActionCards_Copy from "../components/home/HomeActionCards_Copy";
import Promotions from "../components/home/Promotions";

function Home() {
  return (
    <div className="no-scrollbar flex h-full min-h-0 w-full snap-y snap-mandatory flex-col overflow-y-auto scroll-smooth">
      <HomeActionCards_Copy />
      <HomeActionCards />
      <Promotions />
      <Footer />
    </div>
  );
}

export default Home;
