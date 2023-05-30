import React from "react";
import Header from "../NavBar/NavBar";

const Education = () => {
    return(
        <>
            <Header/>
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
                 </div>
        </>
    )
}
export default Education;