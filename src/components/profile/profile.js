import React from "react";
import Header from "../NavBar/NavBar";


const Profile = () => {
    const image = require('./priyanka.jpeg');
     return (
         <>
            <Header/>
             <div className="container "  style={{
        display: 'flex',borderRadius:'20px',
        flexDirection: 'row',marginTop:'20px',marginRight:'20px',marginLeft:'20px',backgroundColor:'#79E0EE'
      }}>
                 <div style={{ flex: 1,  }}>
                     <img src={image} alt="priyanka.jpeg" style={{width: '150px', height:'150px', borderRadius:'50%', margin:'20px', backgroundSize:'cover'}}></img>
                 </div>
                 <div style={{ flex: 1, margin:'30px',}}>
                     <h2 style={{margin:'1px'  }}>Priyanka Rani</h2>
                     <h4 style={{margin:'1px'  }}>Frontend Developer</h4>
                     
                     <p style={{margin:'1px'  }}>Email- priyanka.20eic530@rtu.ac.in</p>
                 </div>
                 <div style={{ flex: 1, marginTop: '45px' }}>
                     <button>Edit Profile</button>
                 </div>

             </div>
             <div style={{marginRight:'20px',marginLeft:'20px',marginTop:'20px',display:'flex',flexDirection:'column', backgroundColor:'#ECF8F9',borderRadius:'20px' }} >
                 <div style={{marginLeft:'20px',display:'flex',flexDirection:'row'}}>
                     <div>
                        <h4>Education</h4>
                     </div>
                     <div style={{margin:'30px',display:'flex', flexDirection:'row'}}>
                        <div style={{display:'flex', flexDirection:'column',marginLeft:'20px',marginRight:'20px',}}>
                            <h4 style={{marginBottom:'5px',marginTop:'5px'}}>Class X</h4>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>HBSE Board</h6>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>CGPA: 9.5</h6>
                        </div>
                        <div style={{display:'flex', flexDirection:'column',marginLeft:'20px',marginRight:'20px',}}>
                            <h4 style={{marginBottom:'5px',marginTop:'5px'}}>Class XII</h4>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>HBSE Board</h6>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>CGPA: 9.2</h6>
                            
                        </div>
                        <div style={{display:'flex', flexDirection:'column',marginLeft:'20px',marginRight:'20px',}}>
                            <h4 style={{marginBottom:'5px',marginTop:'5px'}}>B.tech</h4>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>Rajasthan Technical University Kota, Rajasthan</h6>
                            <h6 style={{marginBottom:'2px',marginTop:'2px'}}>CGPA: 9.6</h6>
                        </div>
                     </div>

                 </div>
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
                 <div style={{marginLeft:'20px'}}>
                     <h4>Work Experience</h4>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                     <h4>Achievements</h4>
                 </div>
                 <div style={{marginLeft:'20px'}}>
                    <div >
                        <h4>About</h4>
                    </div>
                    <div>
                    <p style={{marginLeft:'40px'}}>I’m pursuing B.Tech in Electronics and communication engineering from Rajasthan Technical University, currently in Final year.
                            I have a passion for software development and always looking for learning opportunities. I am looking for an entry-level internship
                            opportunity in the software development field, to work on industry-level projects and learn in the process.</p>
                    </div>

                 </div>
             </div>
            
         </>
     )
 }
export default Profile;

// // import React from 'react';

// // const MyComponent = () => {
// //   return (
// //     <div className="container">
// //       <div className="item">Div 1</div>
// //       <div className="item">Div 2</div>
// //       <div className="item">Div 3</div>
// //     </div>
// //   );
// // };

// // export default MyComponent;
// import React from 'react';

// const MyComponent = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//       }}
//     >
//       <div style={{ flex: 1 }}>Div 1</div>
//       <div style={{ flex: 1 }}>Div 2</div>
//       <div style={{ flex: 1 }}>Div 3</div>
//     </div>
//   );
// };

// export default MyComponent;
