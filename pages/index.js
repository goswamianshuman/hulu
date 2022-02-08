import Head from "next/head";
import requests from "../util/requests";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import Header from "../components/Header"; 

export default function Home({ results }) {
  return (
    <div className="scrollbar-hide">
      <Head>
        <title>HULU BY AG</title>
        <link rel="icon" href="/hulu.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
