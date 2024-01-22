"use client";

import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import PaginationSearch from "@/components/Utilities/PaginationSearch";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const [page, setPage] = useState(1);
  const [searchAnime, setSearchAnime] = useState([]);

  const fetchDataSearch = async () => {
    const data = await getAnimeResponse(
      "anime",
      `q=${decodedKeyword}`,
      `page=${page}`
    );

    setSearchAnime(data);
  };

  useEffect(() => {
    fetchDataSearch();
  }, [page]);

  return (
    <>
      <Header title={`Pencarian untuk "${decodedKeyword}"...`} />
      <AnimeList api={searchAnime} />
      <PaginationSearch
        page={page}
        lastPage={searchAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
