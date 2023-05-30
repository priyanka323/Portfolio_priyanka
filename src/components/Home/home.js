import React from "react";
import Header from "../NavBar/NavBar";
import './home.css'
const Home =()=>{
    const image1 = require('./priyanka1.png');
    const image2 = require('./bg.jpg')
    return(
        
        <>
            <Header/>
            <div className="image-container" style={{ }}>
                <div style={{}}>
                <img src={image2} className="image" style={{backgroundSize:'cover',}}></img>
                </div>
                <div style={{}}>
                <img src={image1} className="overlay-image" style={{  }}></img>
                </div>
            </div>
        </>
    )
}
export default Home;
