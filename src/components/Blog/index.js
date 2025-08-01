import React from 'react';
import SectionTitle from "../UI/SectionTitle";
import BlogItem from "./blogItem";

import Blogs from '../../data/Blog/blog';

function Blog() {
    // Merge both blog arrays
    const mergedBlogs = [...Blogs].reverse();  // Reverse after merging

    return (
        <div className="blog-area-wrapper sm-top">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <SectionTitle title="TECH NEWS" heading="What's New in CK TOOL"/>
                    </div>
                </div>

                <div className="row mtn-35">
                    {
                        mergedBlogs.slice(0,3).map(blog =>(
                            <BlogItem key={blog.id} id={blog.id} title={blog.title} excerpt={blog.excerpt} postBy={blog.author.name} date={blog.publishDate}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Blog;
