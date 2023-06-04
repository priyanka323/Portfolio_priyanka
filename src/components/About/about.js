import React from "react";
import Header from "../NavBar/NavBar";

const About = () => {
    const image3 = require('./priyanka.jpeg');
    return(
        <>
            <Header/>
            <div>
            <div className="container "  style={{
        display: 'flex',borderRadius:'20px',
        flexDirection: 'row',marginTop:'20px',marginRight:'20px',marginLeft:'20px',backgroundColor:'#79E0EE'
      }}>
                 <div style={{ flex: 1,  }}>
                     <img src={image3} alt="priyanka.jpeg" style={{width: '150px', height:'150px', borderRadius:'50%', margin:'20px', backgroundSize:'cover'}}></img>
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
export default About;