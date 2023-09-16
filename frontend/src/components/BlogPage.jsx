import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
    const [blog,setBLog] = useState(false)
    const params = useParams();
	const { id } = params;

    useEffect(() => {
		let url = `http://localhost:4000/blog/${id}`;

		axios.get(url).then((res) => {
			setBLog(res.data);
		});
		console.log(blog);
	}, []);


    return(
    <section className="text-gray-700 body-font overflow-hidden bg-white">
    {blog && (
        <div className="container px-5 py-24 mx-auto">
            <div className="mx-auto flex flex-wrap">
                <img
                    alt="ecommerce"
                    className=" w-[700px] object-cover object-center rounded border border-gray-200"
                    src={blog.imageUrl}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {blog.title}
                    </h1>
                    
                    <p className="leading-relaxed mt-4">{blog.desc}</p>
                    
                    
                </div>
            </div>
        </div>
    )}
</section>
);
}

export default BlogPage