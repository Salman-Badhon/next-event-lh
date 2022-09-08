import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-fit">
        <div className="absolute z-10 w-16 h-12 left-20 top-2">
          <Image
            src="/static/vector-2.svg"
            alt="Vector Image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <p
            className="relative z-10 font-bold text-lh-black text-right text-5xl mr-14 lg:text-[140px] lg:mr-0"
            id="title"
          >
            React <br />
            Conference
          </p>
          <p
            className="relative items-center p-6 text-base ml-0 text-lh-black mt-5 lg:mt-9 lg:text-justify lg:block lg:ml-auto lg:text-[20px] opacity-80 "
            id="subtitle"
          >
            Lorem uis diam turpis quam id fermetum.In quis diam turpis quam id
            fermentu me.In quis diam turpis quam id fermentum.
          </p>
        </div>
        <div>
          <Link href="/ticket">
            <div className="mt-6 flex items-center w-fit gap-2 px-10 py-4 bg-lh-yellow rounded-full justify-center cursor-pointer">
              <p className="text-lh-black text-[16px] font-medium">
                Buy Tickets
              </p>
              <Image
                src="/static/buy-ticket-arrow.svg"
                alt="Buy Ticket"
                width="15"
                height="15"
              />
            </div>
          </Link>
        </div>
        <div className="absolute w-80 h-96 -top-2 right-5 ml-20 z-0">
          <Image
            src="/static/vector-1.svg"
            alt="Vector Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
