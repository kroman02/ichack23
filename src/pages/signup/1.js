import Btn from "components/form/btn";
import Steps from "components/form/stepBtn";
import Logo from "components/logo";
import { middleware } from '../middleware.js'


export default function One() {
  middleware()

  return (
    <div className="bg-bblue w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12">
          Connect to your Smart Device
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center">
            <p className="font-brand text-bblue text-md mb-10 text-center">
              We need you to connect to your smart device to get the data
              required to personalise meals for you.
            </p>
            <Btn text="Connect" />
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-[15%] w-screen right-0">
          <Steps currentStep={1} />
        </div>
      </div>
    </div>
  );
}
