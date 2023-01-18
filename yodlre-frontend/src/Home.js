import React from "react";
import { Link } from "react-router-dom";



function Home(){


    return (
        <div>
            Welcome to Yodlr!
            <p><Link to='/register'>Register</Link> or login to continue.</p>
        </div>
    );

}

export default Home;