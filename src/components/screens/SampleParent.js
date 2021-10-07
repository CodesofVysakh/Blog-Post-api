import React from 'react';
import { Link } from "react-router-dom";

export default function SampleParent() {
    return (
        <div>
            <Link to={"/sample"}>
                <button>Click</button>
            </Link>
        </div>
    )
}
