import React from "react";
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <section >
            <div className="container">
                <h1>
                    Oops! it's a dead end
                </h1>
                <Link to="/" className="btn btn-primary" >
                    back home
                </Link>
            </div>
        </section>
    );
}