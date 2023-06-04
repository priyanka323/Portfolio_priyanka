
import './App.css';
import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyCarousel from './components/craouselcard';
// import Table from './components/table'
import List from './components/list';
import Form from './components/form';
// import Buton from './components/button'
import Profile from './components/profile/profile';

import Header from './components/NavBar/NavBar';
import Home from './components/Home/home';
import About from './components/About/about';
import Project from './components/Project/project';
import Education from './components/education/education';
import Contact from './components/contactUs/contact';
import contactus from './components/contactUs/cotact';
function App() {
  return (
   
     
     
   
    <Router>
        <Routes>
        <Route path="/" element={<Header />}></Route>
          <Route path="/home" element={<Home />}></Route>
        
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/project" element={<Project/>}></Route>
          
        </Routes>
      </Router>
     
  );
}


export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//     <>
//     <div>hello</div>
//     <div>abjkdhjs</div>
//     </>
//     );
// }

// export default App;
