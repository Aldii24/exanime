import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-4 md:p-5 p-3 bg-color-papaya">
        <Link className="text-4xl font-bold text-color-dark" href="/">
          EXANIME🐧
        </Link>
        <InputSearch />
      </div>
    </>
  );
};

export default Navbar;
