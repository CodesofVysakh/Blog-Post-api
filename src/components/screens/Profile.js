import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Profile() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://traveller.talrop.works/api/v1/blog/')
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    let renderItems = () => {
        return data.map((single) => (
            <div className="item">
                <div className="image-container">
                    <img src={single.author.image} alt="Profile" />
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
