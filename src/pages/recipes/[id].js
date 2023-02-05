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
          {user.name}
        </h2>
        <div className="flex items-center my-5 md:my-8">
          <Runner styleComp="w-20 h-20 ml-10 md:w-28 md:h-28" />
          <div>
            <p className="font-brand text-bblue text-sm text-center mb-3 md:text-xl">
              Activity today:{" "}
              <span className={activityColor}>{user.activity}</span>
            </p>
            <p className="font-brand text-bblue text-sm text-center md:text-xl">
              Here are some nutritious meal recommendations.
            </p>
          </div>
          <div className="absolute bottom-0 right-0 rounded-tl-3xl w-[95%] h-[60vh]  bg-bblue m">
            {recipes.map((recipe) => {
              return (
                <div
                  key={recipe.meal}
                  onClick={() => {
                    setOpened(recipe.meal);
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mx-5">
                      <h1 className="font-brand text-bcream bold text-[30px] md:text-[50px]">
                        {recipe.meal} {recipe.meal == "Snacks" && "x" + 3}{" "}
                      </h1>
                      {recipe.meal == opened ? (
                        ""
                      ) : (
                        <ChevronDownIcon className="h-8 w-8 bold text-bcream ml-5" />
                      )}
                    </div>
                  </div>
                  {recipe.meal == opened && (
                    <div>
                      {recipe.meals.map((r) => (
                        <Link href={"/recipe/" + r.id}>
                          <div
                            key={recipe.meal + r.id}
                            className="flex flex-center w-full my-3"
                          >
                            <div className="ml-5">
                              <Image
                                src={r.img}
                                className="w-20 h-20 rounded-md"
                                width={100}
                                height={100}
                                alt="recipe"
                              />
                            </div>
                            <div className="ml-5">
                              <p className="text-bcream bold text-[20px] md:text-[30px]">
                                {r.name}
                              </p>
                              <div className="text-bcream text-[15px] md:text-[20px] flex justify-evenly w-full">
                                <div>Ingredients: {r.ingredient_num}</div>
                                <div className="ml-5">Time: {r.time}</div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
