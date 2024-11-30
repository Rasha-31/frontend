import React, { useEffect, useState } from 'react';
import './Navbar.css'
import About from ''
import { Link } from 'react-router-dom';

const Navbar = () => {

  // const links = [
  //   {
  //     title:"Home",
  //     link:"/",
  //   },
  //   {
  //     title:"Upload",
  //     link:"/upload",
  //   },
  //   {
  //     title:"Browse Summaries",
  //     link:"/browse-summ",
  //   },
  //   {
  //     title:"About",
  //     link:"/about",
  //   },
  //   {
  //     title:"Contact Us",
  //     link:"/contact-us",
  //   },
  //   {
  //     title:"Profile",
  //     link:"/profile",
  //   },
  // ];

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false); 
    })
  },[]);


  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src="/images/book-logo.png" alt="" className='logo' />
      <h1 className='web-name'>LitLite</h1>
      <ul>
        <li>|</li>
        <li>Home</li>
        <li>Upload</li>
        <li>Browse Summaries</li>
        <li><Link to={About}>About</Link></li>
        <li>Contact Us</li>
      </ul>

      <div className="login">
        <ul>
          <li><button className='btn'>Login</button></li>
          <li>Sign Up</li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar





