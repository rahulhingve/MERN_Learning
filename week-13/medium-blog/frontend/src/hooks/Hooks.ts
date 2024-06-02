import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";
export interface Blogs {
    "title": string;
    "content": string;
    "id": string;
    "author": {
        "name": string;
    }

}

export const useBlogs = () => {
    const [blogs, setBlogs] = useState<Blogs[]>([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response=>{
            setBlogs(response.data.blogs);
            setLoading(false)
        })
    },[])
    return {
        loading,
        blogs
    }
}
export const useBlog = ({id}:{id:string}) => {
    const [blog, setBlog] = useState<Blogs>();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response=>{
            setBlog(response.data.blog);
            setLoading(false)
        })
    },[])
    return {
        loading,
        blog
    }
}