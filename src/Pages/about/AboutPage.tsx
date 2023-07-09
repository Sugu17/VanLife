import Callout from "@components/Callout";
import aboutImage from "@assets/images/image 54.png";

function AboutPage() {
  return (
    <>
      <div
        style={{
          background: `no-repeat center/cover url("${aboutImage}") lightgray  `,
          height: "240px",
        }}
      ></div>
      <div className="px-7 py-12">
        <h2 className="text-3xl font-bold text-neutral-950">
          Don't squeeze in a sedan when you could relax in a van.
        </h2>
        <p className="text-neutral-950 pt-8 text-justify">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="mt-3 text-justify">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="pt-12">
          <Callout />
        </div>
      </div>
    </>
  );
}
export default AboutPage;
