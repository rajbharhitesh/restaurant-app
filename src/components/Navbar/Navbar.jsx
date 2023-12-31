import './Navbar.css';
import Logo from '../../assets/images/logo.png';
import { useRef } from 'react';

const Navbar = () => {
  const navbarRef = useRef();

  const navbarHandler = () => {
    navbarRef.current.classList.toggle('active');
  };

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src={Logo} alt="logo" />
      </a>
      <nav className="navbar" ref={navbarRef}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#products">Products</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
        <a href="#blogs">Blogs</a>
      </nav>
      <div className="icons">
        <div className="fas fa-search"></div>
        <div className="fas fa-shopping-cart"></div>
        <div
          className="fas fa-bars"
          id="menu-btn"
          onClick={navbarHandler}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;
