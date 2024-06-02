import { SignupValidation } from "@rahulhingve/common-medium-blog";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./input";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";


export function Auth({ type }: { type: ("signup" | "signin") }) {

    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupValidation>({
        name: "",
        email: "",
        password: ""
    })
 
        async function sendData() {
          try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem('token', jwt)
            navigate("/blogs")
          }catch(e){
                console.error("error while fetching data from backend",e)
          }
        }
    
   
    return <div className="h-screen flex justify-center flex-col">
        <div className="text-center font-bold text-3xl">
            {type === "signup" ? "Create a new Account" : "Log in"}

        </div>
        {/* {JSON.stringify(postInputs)} */}
        <div className="text-center text-slate-500">
            {type === "signup" ? "Already have an account?" : "Create an Account"}
            <Link className="underline pl-2" to={type === "signin" ? "/signup" : "/signin"}>{type === "signup" ? "Sign in" : "Sign up"}</Link>
        </div>
        {type === "signup" ? <Input label={"Name"} placeholder={"john"} onChange={(e) => {
            setPostInputs({
                ...postInputs,
                name: e.target.value
            })
        }} /> : null}
        <Input label={"Email"} placeholder={"john@example.com"} onChange={(e) => {
            setPostInputs({
                ...postInputs,
                email: e.target.value
            })
        }} />
        <Input label={"Password"} type={"Password"} placeholder={"********"} onChange={(e) => {
            setPostInputs({
                ...postInputs,
                password: e.target.value
            })
        }} />
        <Button label={type==="signup"?"Sign up":"Log in"} onClick={sendData}  />
    </div>
}