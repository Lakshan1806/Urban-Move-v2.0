import DriveHeroSection from "../components/Drive/DriveHeroSection";
import Earnings from "../components/drive/Earnings";
import Overview from "../components/drive/Overview";
import Footer from "../components/Footer";

function Drive() {
  return (
    <div className="no-scrollbar flex h-full min-h-0 w-full snap-y snap-mandatory flex-col overflow-y-auto scroll-smooth">
      <DriveHeroSection />
      <Overview />
      <Earnings />
      <Footer />
    </div>
  );
}

export default Drive;
