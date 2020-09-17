import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = (props) => {
  return (
    <div>
      <Link as={`/p/${props.name}`} href={`/profile?name=${props.name}`}>
        <a>Go to {props.name}'s profile</a>
      </Link>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <h1>Friends List</h1>
      <ProfileLink name="nick" />
      <ProfileLink name="judy" />
      <ProfileLink name="vivi" />
      <h1>Show List</h1>
      <Link href="/[pagename]" as="/batman">
        <a>배트맨</a>
      </Link>
      <br />
      <Link href="/[pagename]" as="/superman">
        <a>슈퍼맨</a>
      </Link>
    </Layout>
  );
};

export default Index;
