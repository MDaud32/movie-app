import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

function Card({ result }) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${result.id}`} className="">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="movie"
          className="sm:rounded-t-lg group-hover:opacity-90 transition-opacity duration-300"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h1 className="text-lg font-bold truncate">
            {result.original_title || result.name}
          </h1>
          <div className="flex items-center">
            <p>{result.release_date || result.first_air_date}</p>
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
