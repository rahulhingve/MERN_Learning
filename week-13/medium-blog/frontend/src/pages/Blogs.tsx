import { BlogsCrad } from "../components/BlogsCard";
import { BlogsCardSkeleton } from "../components/BlogsCardSkeletons";
import { TopBar } from "../components/TopBar";
import { TopBarSkeleton } from "../components/TopBarSkeletons";
import { useBlogs } from "../hooks/Hooks";


export function Blogs(){
    const {loading,blogs}=useBlogs()

    if(loading){
        return <div>
            <TopBarSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
        </div>
    }
    return <div>
        <div>
            <TopBar/>
        </div>
        <div className="flex  justify-center ">
        
        
        <div>
            {blogs.map(blog=><BlogsCrad key={blog.id} id={blog.id} authorName={blog.author.name||"ANonnomus"} title={blog.title} content={blog.content}/>)}
        </div>
       

        
      
    </div>
    </div> 
}