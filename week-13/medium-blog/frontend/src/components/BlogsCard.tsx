import { Link } from "react-router-dom";

interface BlogsContent{
    content:string;
    title:string;
    
    authorName:string;
    id:string;
}

export function BlogsCrad({content,title,id,authorName}:BlogsContent) {

    const date = new Date();
    

    return <Link to={`/blog/${id}`}> <div className="border-b p-2 ">

        <div className="flex  mt-2	w-screen max-w-screen-md">

            <div className="pt-1.5 ">
            <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{authorName[0]}</span>

            </div>
            </div>
            <div className="p-2.5 font-semibold text-sm">
                {authorName}
            </div>
            <div className="pt-2 font-bold text-slate-400">
            ·
            </div>
            <div className="pt-2.5 pl-1 font-light text-sm">
                {date.toDateString()}
            </div>

            

        </div>
        {/* ///////////title& content down////////// */}
        <div className="p-2 font-bold text-2xl	">
                {title}
            </div>
            <div className="pt-1 p-2 pb-1 font-normal text-lg 	">
                {content.slice(0,100)+"..."} 
            </div>
            <div className="text-light pl-4 pt-0 p-2 text-slate-400">
            {`${Math.ceil(content.length / 100)} min read`}
            </div>
    </div>
    </Link>



}