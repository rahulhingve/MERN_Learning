import { BlogsCrad } from "../components/BlogsCard";
import { TopBar } from "../components/TopBar";


export function Blogs(){
    return <div>
        <div>
            <TopBar/>
        </div>
        <div className="flex  justify-center">
        
        <div className=" max-w-2xl">
        <BlogsCrad />
        <BlogsCrad />
        <BlogsCrad />

        </div>
      
    </div>
    </div> 
}