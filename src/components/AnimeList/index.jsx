import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 md:gap-8 gap-2 px-4">
        {api.data?.map((anime) => {
          return (
            <Link
              className="rounded text-color-primary hover:text-color-papaya transition-all"
              href={`/anime/${anime.mal_id}`}
              key={anime.mal_id}
            >
              <Image
                src={anime.images.webp.image_url}
                alt="anime"
                width={350}
                height={250}
                className="rounded"
              />
              <h3 className="md:text-xl text-md font-bold mt-4">
                {anime.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default AnimeList;
