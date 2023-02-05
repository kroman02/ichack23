import Btn from "components/form/btn";
import Input from "components/form/input";
import Steps from "components/form/stepBtn";
import Logo from "components/logo";
import { useState } from "react";
// import { middleware } from '../middleware.js'

export default function Four() {

  // middleware()

const [form, setForm] = useState({
  email: "",
  password: ""
})
  
  

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm(oldForm => {
      return {...oldForm, [name]: value}
    })
  }
  console.log(form)

  const onSubmit = (e) => {
    e.preventDefault()


    
  };
  return (
    <div className="bg-bblue w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12">
          Sign Up
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center">
            <div className="mt-5 mx-5">
              <input
                name="email"
                title="email"
                onChange={handleChange}
                value={form.email}
              />
            </div>
            <div className="mt-8 mx-5">
              <input
                name="password"
                title="password"
                onChange={handleChange}
                type="password"
                value={form.password}
              />
            </div>
            <div className="mt-10">
              <Btn text="Submit" onclick={'onSubmit'} />
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 md:bottom-[15%] w-screen right-0">
          <Steps currentStep={5} />
        </div>
      </div>
    </div>
  );
}
