import { Blogs } from "../hooks/Hooks"
import { TopBar } from "./TopBar"

export function FullBlog({blog}:{blog:Blogs}) {
   
    return <div>
<TopBar/>
<div className="grid grid-cols-12 px-10 w-full p-10 bg-slate-200">
        <div className="grid col-span-8  ">

            <div className="font-bold text-4xl">
                {blog.title}
            </div>
            <div>
                posted on {Date()}
            </div>
            <div className="font-semibold text-xl mr-8 ">
            {blog.content}
            </div>
        </div>
        <div className="grid col-span-4 p-3  shadow-lg">
            <div className="font-bold text-2xl">
            <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="flex justify-center text-center font-medium  text-gray-600 dark:text-gray-300">{blog.author.name[0]}</span>

            </div>  {blog.author.name}
            </div>
            <div className="font-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam sunt voluptatum non explicabo, sit repudiandae. Quaerat obcaecati nam libero!
            </div>

        </div>



    </div>

        </div>
}