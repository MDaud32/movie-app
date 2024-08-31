import Results from "@/components/Results";
import Image from "next/image";
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("something went wrong");
  }
  const results = data.results;

  return (
    <main className="">
      <Results results={results} />
    </main>
  );
}
