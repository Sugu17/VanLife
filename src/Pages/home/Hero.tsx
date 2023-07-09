import { Link } from "react-router-dom";
import heroImage from "@assets/images/home_bg.jpg";
import Button from "@components/buttons/Button";

function Hero() {
  return (
    <div
      style={{
        background: `url("${heroImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 57%",
        backgroundSize: "contain",
      }}
      className="flex flex-col justify-between gap-10 px-7 py-16 container"
    >
      <h2 className="text-4xl font-extrabold text-[#FF8C38]">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="text-neutral-50 text-center backdrop-brightness-90 backdrop-blur-[0.5px] py-4 px-2">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <div className="mt-4">
        <Link to="/vans">
          <Button>Find your van</Button>
        </Link>
      </div>
    </div>
  );
}
export default Hero;
