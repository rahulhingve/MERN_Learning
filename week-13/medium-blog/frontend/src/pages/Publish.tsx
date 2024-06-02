import { useState } from "react"
import { TopBar } from "../components/TopBar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export function Publish() {
const navigate = useNavigate();
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    return <div>
        <TopBar/>
       
        <div className="flex justify-center p-3 ">

            <div className="max-w-screen-lg w-full	">

                <label className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                <textarea className="resize rounded-md w-4/5  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="type here" onChange={(e)=>{
                    setTitle(e.target.value);
                }}></textarea>



            </div>
            <div>

            </div>

        </div>
        <div className="flex justify-center pt-4 ">
            <div className="max-w-screen-lg w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Content</label>
            <textarea className="resize rounded-md w-4/5  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" rows={8} placeholder="type here" onChange={(e)=>{
                    setContent(e.target.value);
                }}></textarea>
               
            </div>
        </div>
        <div className="flex
         justify-center pt-5">
           <button type="button" className="mr-4 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 " onClick={
            async()=>{
               try{
               const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                    title,
                    content,
                    published:false
                },{
                    headers:{
                        Authorization: localStorage.getItem("token")
                    }
                })
                navigate(`/blog/${response.data.id}`)
               }catch(e){
                console.log("put karne me dikkat")
               }
            }
           }>Publish</button> 
        </div>
        
    </div>
}