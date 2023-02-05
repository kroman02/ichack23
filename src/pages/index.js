import Head from "next/head";
import { Inter } from "@next/font/google";
import Logo from "components/logo";
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
        <link
          href="https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:ital,wght@0,700;1,400&display=swap"
          rel="stylesheet"
        />

      </Head>
      <main className="bg-bcream min-w-screen min-h-screen">
        <div className="absolute ml-20 top-1/4">
          <Logo styleComp="w-32 h-32 ml-12 text-borange" />
          <p className="text-bblue font-brand text-center w-full text-[60px]">aMeal.io</p>
          <p className="text-bblue font-brand text-center w-full text-[20px]">Recipe Inspiration</p>
        </div>
        <Rectangle/>
      </main>
    </>
  );
}
