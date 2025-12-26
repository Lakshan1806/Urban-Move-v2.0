import Footer from "../components/Footer";
import HomeActionCards from "../components/home/HomeActionCards";
import Slideshow from "../components/home/Slideshow";
import Promotions from "../components/home/Promotions";

function Home() {
  return (
    <div className="no-scrollbar flex h-full min-h-0 w-full snap-y snap-mandatory flex-col overflow-y-auto scroll-smooth">
      <Slideshow />
      <Promotions />
    </div>
  );
}

export default Home;
