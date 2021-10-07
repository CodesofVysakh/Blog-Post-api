import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Profile() {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get('https://traveller.talrop.works/api/v1/blog/')
            .then(function (response) {
                setBlog(response.data.data);
            })
            .catch(function (error) {

            })
    }, [])

    let renderItems = () => {
        return blog.map((single) => (
            <div className="item" key={single.id}>
        
                    <div className="image-container">
                        <Link to={`/article/${single.id}/`}>
                            <img src={single.author.image} alt="Profile" />
                        </Link>
                    </div>
                
                <div className="content">
                    <h5>{single.title}</h5>
                    <span>A guest post by <small>{single.author.name}</small> on {single.posted_date}</span>
                    <p>{single.description}</p>
                </div>
            </div>           
        ))
    }

    return (
        <section className="spotlight">
            <section className="s-wrapper">
                <h3>Blog Posts</h3>
                <div className="items">    
                    {renderItems()}
                </div>
            </section>
        </section>
    )
}
