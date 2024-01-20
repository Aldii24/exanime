import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen max-w-xl mx-auto items-center">
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-3xl font-bold text-color-papaya mb-4">404</h1>
          <div className="flex flex-row">
            <FileSearch className="text-color-papaya" size={35} />
            <h1 className="text-3xl font-bold text-color-papaya">NOT FOUND</h1>
          </div>
          <Link className="text-md w-20 p-2 bg-color-papaya rounded-3xl text-color-primary hover:text-color-dark mt-4 font-bold transition-all text-center" href="/">Back</Link>
        </div>
      </div>
    </>
  );
};

export default Page;
