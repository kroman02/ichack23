import Btn from "components/form/btn";
import Input from "components/form/input";
import Logo from "components/logo";
import { useState } from "react";
import jwt from 'jsonwebtoken'
import { middleware } from './middleware.js'

export default function login() {
  middleware()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {
    submitForm(email, password)
  };

  return (
    <div className="bg-bblue w-screen min-h-screen flex justify-center">
      <div className="max-w-[500px]">
        <Logo styleComp="text-borange absolute ml-2 h-12 w-12 top-0 left-0 md:h-16 md:w-16" />
        <h1 className="font-brand text-bcream bold text-[40px] text-center pt-12">
          Login
        </h1>
        <div className="h-[60vh] flex items-center justify-center">
          <div className="px-2 py-8 rounded-md bg-bcream m-3 mt-5 min-h-[20rem] flex flex-col items-center">
            <div className="mt-5 mx-5">
              <Input
                name="email"
                title="email"
                value={email}
                onchange={changeEmail}
              />
            </div>
            <div className="mt-8 mx-5">
              <Input
                name="password"
                title="password"
                value={password}
                type="password"
                onchange={changePassword}
              />
            </div>
            <div className="mt-10">
              <Btn text="Login" onclick={onSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

async function submitForm(email, password) {

  console.log(email, password)
  console.log(JSON.stringify({ email, password }))
  const res = await fetch('/api/userLogin', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then((t) => t.json())

  
  const token = res.token
  const json = jwt.decode(token)
  if(json.email) {
    window.localStorage.setItem("token", token);
  }
}

