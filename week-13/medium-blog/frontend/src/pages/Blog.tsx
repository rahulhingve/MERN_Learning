import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/Hooks"
import { FullBlog } from "../components/FullBlog";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";

export function Blog(){

const {id}=useParams();
    const {loading,blog}=useBlog({
        id:id||""
    });

    if (loading){
        return <div>
            <FullBlogSkeleton/>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}