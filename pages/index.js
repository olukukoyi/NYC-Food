import Head from "next/head";
import Image from "next/image";
import Footer from "../components/ui/Footer";
import Landing from "../components/ui/Landing";
import Testimonials from "../components/ui/Testimonials";

export default function Home({ users }) {
  return (
    <div style={{ position: "relative" }}>
      <Landing />
      <Testimonials usersList={users} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  const slicedData = data.slice(0, 6);

  return {
    props: {
      users: slicedData,
    },
  };
}
