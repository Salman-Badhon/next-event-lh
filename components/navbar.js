import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className="relative flex mx-auto justify-between items-center p-4">
        <Link href="/">
          <div className="relative w-[55px] h-[33px] lg:w-[135px] lg:h-[63px] cursor-pointer">
            <Image src="/logo.svg" alt="Website Logo" layout="fill" priority />
          </div>
        </Link>

        {/*TODO: Make Nav items only visible in large screen */}
        {/* <div>
          <ul className="flex lg:visible gap-12 text-[18px] font-medium text-lh-black">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">What we do</li>
            <li className="cursor-pointer">Our work</li>
            <li className="cursor-pointer">Blog</li>
            <li className="cursor-pointer">Say hi</li>
          </ul>
        </div> */}

        <div className="relative w-[16px] h-[12px] lg:w-[20px] lg:h-[14px]">
          <Image
            src="/static/hamburger-icon.svg"
            alt="Hamburger Icon"
            layout="fill"
            priority
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
