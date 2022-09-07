import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-80 h-96 -left-5 ml-20 z-0">
          <Image
            src="/static/vector-1.svg"
            alt="Vector Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute w-6 h-8 left-20 top-2">
          <Image
            src="/static/vector-2.svg"
            alt="Vector Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute z-10">
          <p
            className="text-5xl lg:text-140px font-bold text-lh-black text-right"
            id="title"
          >
            React <br />
            Conference
          </p>
          <p
            className="text-base lg:text-xl opacity-80 text-lh-black mt-8"
            id="subtitle"
          >
            Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
            fermentu me.In quis diam turpis quam id fermentum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
