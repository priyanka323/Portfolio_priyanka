import React from "react";
import Header from "../NavBar/NavBar";
const Project = () => {
    return(
        <>
        <Header/>
        <div>
        <div style={{marginLeft:'20px'}}>
                     <div>
                        <h4>Projects</h4>
                     </div>
                     <div>
                        <ul>
                            <div>
                                <p> <h4>•Zomato clone</h4>
                                    <p>Situation : A system/web application where you can order food.</p>
                                    <p>Behaviour : Design website to order food.</p>
                                    <p>Impact : Build fully interactive zomato clone(Frontend) Using Html,Css and JavaScript.Used git as version controlling tool and
                                    VSCode as the IDE for development.</p>
                                    <p>Learning : learned html rendering, managing web pages, JavaScript, GitHub for development.</p>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <h4>•Tasky Project</h4>
                                    Situation : A system/web application where you can add new cards and save there at a place.
                                    Behaviour : Design website to add cards.
                                    Impact : Build a DOM manupulation Tasky Project by using HTML, CSS, JavaScript. Used git as version controlling tool and ATOM
                                    as the IDE for development.
                                    Learning : learned html rendering, managing web pages, JavaScript,Dom, GitHub for development.

                                </p>
                            </div>
                        </ul>
                     </div>
                 </div>
        </div>
        </>
    )
}
export default Project;