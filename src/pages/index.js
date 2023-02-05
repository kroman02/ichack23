import { useState } from 'react'
import jwt from 'jsonwebtoken'

// const inter = Inter({ subsets: ['latin'] })
import Head from "next/head";
import Logo from "components/logo";
import Rectangle from "components/rectangle";
import { middleware } from './middleware.js'

export default function Home() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('You are not logged in')
  const [secret, setSecret] = useState('')

  return (
    <>
      <h1>{message}</h1>
      <h1>{secret}</h1>
      <Head>
      <title>aMeal.io</title>
        <meta
          name="description"
          content="aMeal.io is a the meal prep inspiration app without the bs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-bcream max-w-screen min-h-screen">
      <div className="absolute w-full items-center flex flex-col top-[20%] md:top-[10%]">
          <Logo styleComp="w-32 h-32 text-borange md:w-52 md:h-52" />
          <h1 className="text-bblue font-brand text-center w-full text-[60px] -mt-10 md:text-[80px]">
            aMeal.io
          </h1>
          <h2 className="text-bblue font-brand text-[20px] w-4/6 md:text-[40px] text-center">
            Recipe Inspiration
          </h2>
        </div>
        <Rectangle />
    </main>
    </>
  );
}
