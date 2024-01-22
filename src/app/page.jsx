import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");

  return (
    <>
      {/* anime populer */}
      <section>
        <Header
          title="Paling populer"
          linkHref="/populer"
          linkTitle="Lihat semua"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
