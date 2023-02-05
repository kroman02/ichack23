import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>aMeal.io</title>
        <meta
          name="description"
          content="aMeal.io is a the meal prep inspiration app without the bs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bcream"><p className="text-bblue">Hello World</p></main>
    </>
  );
}
