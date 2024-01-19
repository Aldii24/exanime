import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-7 px-4">
        {api.data?.map((anime) => {
          return (
            <Link
              className="rounded text-color-primary hover:text-color-papaya transition-all"
              href={`/${anime.mal_id}`}
            >
              <Image
                src={anime.images.webp.image_url}
                alt="anime"
                width={350}
                height={300}
                className="rounded-2xl"
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
