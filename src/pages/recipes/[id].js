import Menu from "components/menu";
import Logo from "components/logo";
import Runner from "components/runner";
import { useState } from "react";
import Image from "next/image";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function recipe({ props }) {
  return (
    <div className="bg-bcream w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Link href="/dashboard">
          <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        </Link>
        <Menu styleComp="text-bblue absolute ml-2 h-12 w-12 top-0 right-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bblue bold text-[40px] md:text-[60px] text-center pt-12">
          Welcome
        </h1>
        <h2 className="font-brand text-bblue bold text-[30px] md:text-[50px] text-center -mt-3">
          Hello
        </h2>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
