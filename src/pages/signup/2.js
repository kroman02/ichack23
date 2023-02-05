import Btn from "components/form/btn";
import Checkboxes from "components/form/checkboxes";
import Steps from "components/form/stepBtn";
import Logo from "components/logo";
import { useState } from "react";

export default function Two() {
  const [diets, setDiets] = useState([]);
  const onchange = (e) => {
    let id = e.target.getAttribute("id");
    if (!diets.includes(id)) {
      setDiets([...diets, id]);
    } else {
      setDiets(diets.filter((e) => e != id));
    }
  };
  return (
    <div className="bg-bblue w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12">
          Dietary Requirements
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center max-h-inherit overflow-hidden h-full">
            <Checkboxes
              title={"Dietary Requirements"}
              name="diet"
              onchange={onchange}
              checkboxes={[
                {
                  name: "alcohol-free",
                  title: "Alcohol Free",
                  value: diets.includes("alcohol-free"),
                },
                {
                  name: "celery-free",
                  title: "Celery Free",
                  value: diets.includes("celery-free"),
                },
                {
                  name: "pescatarian",
                  title: "Pescatarian",
                  value: diets.includes("pescatarian"),
                },
                {
                  name: "vegetarian",
                  title: "Vegetarian",
                  value: diets.includes("vegetarian"),
                },
                {
                  name: "vegan",
                  title: "Vegan",
                  value: diets.includes("vegan"),
                },
                {
                  name: "wheat-free",
                  title: "Wheat Free",
                  value: diets.includes("wheat-free"),
                },
                {
                  name: "halal",
                  title: "Halal",
                  value: diets.includes("halal"),
                },
                {
                  name: "no-oil-added",
                  title: "No Added Oils",
                  value: diets.includes("no-oil-added"),
                },
              ]}
            />
            <div className="mt-5">
              <Btn text="Next" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-[15%] w-screen right-0">
          <Steps currentStep={2} />
        </div>
      </div>
    </div>
  );
}
