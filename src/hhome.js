import React from "react";
import './homme.css'
const Home = () => {
    //const image1 = require('./homepage.png');
    //const image2 = require('./ko.png')
    return ( 
        <>
            < div className = "image-container" style = {{}} >
                <div style = {{}} >
                    <img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="img" className = "image" style = {{ backgroundSize: 'cover', }} />
                < /div > 
                <div style = {{}} >
                    <img src = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="im" className = "overlay-image" style = {{}} /> 
                < /div > 
            </div>
         < / >
    )
};
export default Home;