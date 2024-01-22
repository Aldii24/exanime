import { getAnimeResponse } from "@/app/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import Link from "next/link";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  console.log(anime);

  return (
    <>
      <div className="pt-8 px-4">
        <h3 className="text-color-primary font-bold text-2xl">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="flex pt-4 px-4 items w-full sm:flex-nowrap gap-2 flex-wrap">
        <div className="flex w-full flex-col">
          <Image
            src={anime.data.images.webp.image_url}
            alt={anime.data.images.jpg.image_ulr}
            width={350}
            height={350}
            className="image-id w-full rounded"
          />
          <div className="flex items-center justify-center gap-2 mt-4 mb-4">
            <p className="text-color-primary text-md font-bold p-2 text-center bg-color-papaya rounded-3xl">
              Rank #{anime.data.rank}
            </p>
            <p className="text-color-primary text-md font-bold p-2 text-center bg-color-papaya rounded-3xl">
              Skor #{anime.data.score}
            </p>
            <p className="text-color-primary text-md font-bold p-2 text-center bg-color-papaya rounded-3xl">
              Popularity #{anime.data.popularity}
            </p>
            <p className="text-color-primary text-md font-bold p-2 text-center bg-color-papaya rounded-3xl">
              Favorites #{anime.data.favorites}
            </p>
          </div>
        </div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
      <div className="pt-4 px-4">
        <h3 className="text-color-primary text-xl mb-3 font-bold">
          {anime.data.duration} | {anime.data.rating}
        </h3>
        <p className="text-color-primary text-justify mb-4">
          {anime.data.synopsis}
        </p>
        <Link
          href={anime.data.url}
          className="text-color-sky underline font-bold"
        >
          Official Website
        </Link>
      </div>
    </>
  );
};

export default Page;
