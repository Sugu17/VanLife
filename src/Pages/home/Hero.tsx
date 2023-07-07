import { Link } from "react-router-dom";
import heroImage from "../assets/images/image 53.png";
import Button from "../../Components/Button";

function Hero() {
  return (
    <div
      style={{
        background: `no-repeat center/cover url("${heroImage}") `,
      }}
      className="flex flex-col justify-between gap-10 px-7 py-16 container"
    >
      <h2 className="text-4xl font-extrabold text-neutral-50 ">
        You got the travel plans, we got the travel vans.
      </h2>
      <p className="text-neutral-50">
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
