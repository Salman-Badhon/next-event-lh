import Image from "next/dist/client/image";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="relative h-8 w-14 lg:h-16 lg:w-32 top-9 left-6 lg:top-8 lg:left-80">
          <Image
            src="/logo.svg"
            alt="Website Logo"
            layout="fill"
            objectFit="contain" // change to suit your needs
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
