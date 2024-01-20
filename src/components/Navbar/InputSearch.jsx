"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchInput = useRef();
  const router = useRouter();

  const handleInputSearch = (event) => {
    const keyword = searchInput.current.value;
    if (keyword === "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <>
      <div className="relative">
        <input
          className="p-2 outline-color-papaya border-2 rounded-3xl w-full"
          placeholder="cari anime..."
          ref={searchInput}
          onKeyDown={handleInputSearch}
        ></input>
        <button className="absolute top-2 end-2">
          <MagnifyingGlass size={24} onClick={handleInputSearch} />
        </button>
      </div>
    </>
  );
};

export default InputSearch;
