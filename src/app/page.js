// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from './page.module.css'

import Results from "@/components/Results";

// const inter = Inter({ subsets: ['latin'] })

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${genre ==="fetchTopRated" ? "movie/top_rated" : "trending/all/week"}?api_key=${API_KEY}&language=en-US&page=1`,{next:{revalidate: 1000}});

  if(!res.ok){
    throw new Error("Failed to fetch data");//this will be caught by the error page and passed to the page props
  }

  const data = await res.json();
  const results = data.results;
  // console.log(results);

  return (
    <div><Results results={results}/> </div>
  )
}