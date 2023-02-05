import Btn from "components/form/btn";
import Checkboxes from "components/form/checkboxes";
import Steps from "components/form/stepBtn";
import Logo from "components/logo";
import { useState } from "react";

export default function Three() {
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
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12 px-4">
          Dietary Preferences
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center max-h-inherit overflow-hidden h-full">
            <Checkboxes
              title={"Dietary Preferences"}
              name="diet"
              onchange={onchange}
              checkboxes={[
                {
                  name: "balanced",
                  title: "Balanced",
                  value: diets.includes("balanced"),
                },
                {
                  name: "high-fiber",
                  title: "High Fiber",
                  value: diets.includes("high-fiber"),
                },
                {
                  name: "low-carb",
                  title: "Low Carb",
                  value: diets.includes("low-carb"),
                },
                {
                  name: "low-fat",
                  title: "Low Fat",
                  value: diets.includes("low-fat"),
                },
                {
                  name: "high-protein ",
                  title: "High Protein",
                  value: diets.includes("high-protein "),
                },
              ]}
            />
            <div className="mt-5">
              <Btn text="Next" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-[15%] w-screen right-0">
          <Steps currentStep={3} />
        </div>
      </div>
    </div>
  );
}
