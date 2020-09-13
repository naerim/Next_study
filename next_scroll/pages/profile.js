import React from "react";
import Layout from "../components/Layout";

export default function Profile(props) {
  return (
    <Layout>
      <h1>{props.url.query.name}</h1>
      <p>this is my profile page</p>
    </Layout>
  );
}
