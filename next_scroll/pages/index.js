import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = (props) => {
  return (
    <div>
      <Link
          as={`/p/${props.name}`}
          href={`/profile?name=${props.name}`}>
        <a>Go to {props.name}'s profile</a>
      </Link>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <p>Friends List</p>
      <ProfileLink name="nick" />
      <ProfileLink name="judy" />
      <ProfileLink name="vivi" />
    </Layout>
  );
};

export default Index;
