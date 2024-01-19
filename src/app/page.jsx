import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

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
