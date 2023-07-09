import { Link } from "react-router-dom";
import heroImage from "@assets/images/home_bg.jpg";
import Button from "@components/buttons/Button";

function Hero() {
  return (
    <div
      style={{
        background: `url("${heroImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-between py-10 container"
    >
      <h2 className="text-4xl font-extrabold text-[#f36703] py-6 px-7 backdrop-blur-md">
        You got the travel plans, we got the travel vans.
      </h2>
      <div>
        <p className="text-neutral-50 py-4 px-7 backdrop-brightness-[0.4]">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="mt-0">
          <Link to="/vans">
            <Button>Find your van</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hero;
