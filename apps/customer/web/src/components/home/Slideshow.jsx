import { useEffect, useState } from "react";
import img1 from "../../assets/Home/slideshow-image1.jpg";
import img2 from "../../assets/Home/slideshow-image2.jpg";
import img3 from "../../assets/Home/slideshow-image3.jpg";

function Slideshow() {
  const [i, setI] = useState(0);
  const interval = 4000;
  const images = [img1, img2, img3];
  useEffect(() => {
    if (images.length <= 1) {
      return;
    }
    const id = setInterval(
      () => setI((v) => (v + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="h-full w-full shrink-0 snap-start">
      <img src={images[i]} alt="" className="h-full w-full" />
    </div>
  );
}
export default Slideshow;
