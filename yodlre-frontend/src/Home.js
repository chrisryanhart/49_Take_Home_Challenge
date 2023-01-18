import React from "react";
import { Link } from "react-router-dom";



function Home(){


    return (
        <div style={{margin:'50px', display:'flex', justifyContent:'center' }}>

            <p>Welcome to Yodlr!  <Link to='/register'>Register</Link> to continue.</p>
        </div>
    );

}

export default Home;