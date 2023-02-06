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

export async function getServerSideProps(props) {
  let data = await fetch(
    `https://api.edamam.com/api/recipes/v2/${props.query.id}?type=public&app_id=04df2c97&app_key=2e4f17903e0ba50f0592b9948a93b35e&random=true`
  );
  data = await data.json();
  return {
    props: {
      name: data.recipe.label,
      ingredients: data.recipe.ingredientLines,
      calories: data.recipe.calories,
      protein: data.recipe.totalNutrients.PROCNT.quantity,
      carbs: data.recipe.totalNutrients.CHOCDF.quantity,
      fat: data.recipe.totalNutrients.FAT.quantity,
      ingrdient_num: data.recipe.ingredients.length,
      img: data.recipe.image,
      time: data.recipe.totalTime,
      url: data.recipe.url,
    },
  };
}
