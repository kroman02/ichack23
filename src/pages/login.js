import Btn from "components/form/btn";
import Input from "components/form/input";
import Logo from "components/logo";
import { useState } from "react";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = () => {
    console.log("do something");
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
                onchange={changeUsername}
                value={username}
              />
            </div>
            <div className="mt-8 mx-5">
              <Input
                name="password"
                title="password"
                onchange={changePassword}
                type="password"
                value={password}
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
