import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/header";
import Rectangle from "components/Rectangle";

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
      <main className="bg-bcream min-w-screen min-h-screen"><Header/><p className="text-bblue">Hello World</p><Rectangle/></main>
    </>
  );
}
