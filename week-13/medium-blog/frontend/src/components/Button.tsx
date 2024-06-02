import { MouseEventHandler } from "react";

interface Button {
    label:string;
    onClick: MouseEventHandler<HTMLButtonElement>
    
}


export function Button({label,onClick }:Button){
    
    return <div className="flex justify-center">
        <button type="button" className="w-80  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={onClick}>{label}</button>
    </div>
    
    
   

 
}