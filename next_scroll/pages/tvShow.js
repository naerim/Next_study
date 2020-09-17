import React from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";

const tvShow = ({ shows }) => {
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>
            <Link href="/d">
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

tvShow.getInitialProps = async () => {
  const res = await axios.get("https://api.tvmaze.com/search/shows?q=batman");
  const data = res.data;
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map((entry) => entry.show),
  };
};

export default tvShow;