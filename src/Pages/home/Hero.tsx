import { Link } from "react-router-dom";
import heroImageLg from "@assets/images/home_bg.webp";
import heroImageSm from "@assets/images/home-bg-sm.webp";
import Button from "@components/buttons/Button";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("${heroImageSm}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-between pt-0  container"
    >
      <h2 className="text-4xl font-extrabold text-[#f36703] py-12 px-7 backdrop-blur-md">
        You got the travel plans, we got the travel vans.
      </h2>
      <div>
        <p className="text-neutral-50 py-4 px-7 backdrop-brightness-50">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="mt-0 pb-4 px-4">
          <Link to="/vans">
            <Button>Find your van</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hero;
