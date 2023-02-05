import Btn from "components/form/btn";
import Checkboxes from "components/form/checkboxes";
import Steps from "components/form/stepBtn";
import Logo from "components/logo";
import Link from "next/link"
import { useState, useEffect } from "react";
import { middleware } from '../middleware.js'


export default function Four() {
  middleware()

  const [diets, setDiets] = useState(typeof window == 'undefined' ? [] :localStorage.getItem('cuisine') || []);
  const onchange = (e) => {
    let id = e.target.getAttribute("id");
    if (!diets.includes(id)) {
      setDiets([...diets, id]);
    } else {
      setDiets(diets.filter((e) => e != id));
    }
  };
  useEffect(()=>{
    localStorage.setItem('cuisine', diets)
  }, [diets])
  return (
    <div className="bg-bblue w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12 px-4">
          Cuisine Preferences
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center max-h-inherit overflow-hidden h-full">
            <Checkboxes
              title={"Cuisine Preferences"}
              name="diet"
              onchange={onchange}
              checkboxes={[
                {
                  name: "greek",
                  title: "Greek",
                  value: diets.includes("greek"),
                },
                {
                  name: "british",
                  title: "British",
                  value: diets.includes("british"),
                },
                {
                  name: "american",
                  title: "American",
                  value: diets.includes("american"),
                },
                {
                  name: "asian",
                  title: "Asian",
                  value: diets.includes("asian"),
                },
                {
                  name: "caribbean",
                  title: "Caribbean",
                  value: diets.includes("caribbean"),
                },
                {
                  name: "chinese",
                  title: "Chinese",
                  value: diets.includes("chinese"),
                },
                {
                  name: "eastern europe",
                  title: "Eastern Europe",
                  value: diets.includes("eastern europe"),
                },
                {
                  name: "indian",
                  title: "Indian",
                  value: diets.includes("indian"),
                },
                {
                  name: "korean",
                  title: "Korean",
                  value: diets.includes("korean"),
                },
                {
                  name: "kosher",
                  title: "Kosher",
                  value: diets.includes("kosher"),
                },
                {
                  name: "mediterranean",
                  title: "Mediterranean",
                  value: diets.includes("mediterranean"),
                },
                {
                  name: "mexican",
                  title: "Mexican",
                  value: diets.includes("mexican"),
                },
                {
                  name: "italian",
                  title: "Italian",
                  value: diets.includes("italian"),
                },
                {
                  name: "world",
                  title: "World",
                  value: diets.includes("world"),
                },
                {
                  name: "japanese",
                  title: "Japanese",
                  value: diets.includes("japanese"),
                },
                {
                  name: "french",
                  title: "French",
                  value: diets.includes("french"),
                },
              ]}
            />
            <div className="mt-5">
             <Link href="5"><Btn text="Next" /></Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-[15%] w-screen right-0">
          <Steps currentStep={4} />
        </div>
      </div>
    </div>
  );
}
