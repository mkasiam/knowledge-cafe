import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks,handleReadingTime}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("../../../public/blogs.json")
        .then(res=>res.json())
        .then(data=> setBlogs(data));
    },[])
    return (
            <div className="w-full md:w-2/3 lg:w-2/3 space-y-4">
                {
                    blogs.map((blog)=><Blog handleBookmarks={handleBookmarks} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}></Blog>)
                }
            </div>
    );
};

export default Blogs;