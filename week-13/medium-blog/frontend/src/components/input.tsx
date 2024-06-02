import { ChangeEvent } from "react";


interface InputType{
    label:string;
    placeholder:string;
    onChange:(e:ChangeEvent<HTMLInputElement>)=> void;
    type?:string;
}

export function Input({ label, placeholder, type ,onChange }:InputType) {
    return <div className="flex justify-center p-3 ">
        <div>
            <label className ="text-sm font-medium ">{label}</label>
            <input type={type||"text"} className="w-80 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 " placeholder={placeholder} required onChange={onChange} />
        </div>
    </div>
}