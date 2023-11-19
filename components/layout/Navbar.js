import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className=" flex justify-between border-b shadow-sm p-3 px-10 ">
      <div className="flex gap-10 items-center">
        <Image src="./next.svg" alt="logo" width={120} height={60} />
        <div className=" hidden md:flex gap-6">
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all rounded-md">
            Home
          </h2>
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all rounded-md">
            History
          </h2>
          <h2 className="hover:bg-gray-100 p-2 cursor-pointer transition-all rounded-md">
            Help
          </h2>
        </div>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
