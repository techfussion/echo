import Head from "next/head";
// import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import TopNav from "@/layout/TopNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Novaglam Store</title>
        <meta
          name="description"
          content="Your number one go to e-commerce store for all your needs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {" "}
        {/* className={`${styles.main} ${inter.className}`}> */}
        <TopNav />
        <h1>
          Yo! Welcome to Novaglam. Here satisfaction is our perfection. Happy
          shopping!!
        </h1>
      </main>
    </>
  );
}
