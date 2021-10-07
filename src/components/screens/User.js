import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function User() {
    const [user, setUser] = useState([]);
    // const [isLoading, setLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setUser(response.data.data);
                // setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                // setLoading(false);
            })
    }, [])

    let renderItems = () => {
        return (
            <div>
                    <div className="item">
                        <div className="image-container">
                            <img src={user.image} alt="Profile" />
                        </div>
                        <div className="content">
                            <h5>{user.title}</h5>
                            <span><small>{user.name}</small> on {user.posted_date}</span>
                            <p>{user.description}</p>
                        </div>
                    </div>
            </div>
        );
    };

    return (
        <section className="spotlight">
            <section className="s-wrapper">
                <div className="items">    
                    {renderItems()}
                </div>
            </section>
        </section>
    );
}
