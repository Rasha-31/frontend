// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Upload from './Components/Upload/Upload'
// import About from './Components/About/About'
// import Title from './Components/Title/Title'
// import Contact from './Components/Contact/Contact'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// const App = () => {
//   return (
//     <router>
//     <div>
//       <Routes>
//       <Navbar/>
//       <Hero/>
//       <Title/>
//       <Upload/>
//       {/* <Title subTitle='Contact Us' title='Get In Touch'/> */}
//       <About/>
//       <Contact/>
//       </Routes>
//     </div>
//     </router>
//   )
// }

// export default App




import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Upload from './Components/Upload/Upload';
import About from './Components/About/About';
import Title from './Components/Title/Title';
import Contact from './Components/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/about" element={<About />} />
          <Route path="/title" element={<Title />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
