import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="share">
        <a href="#f" className="fab fa-facebook-f">
          f
        </a>
        <a href="#f" className="fab fa-twitter">
          t
        </a>
        <a href="#f" className="fab fa-instagram">
          i
        </a>
        <a href="#f" className="fab fa-linkedin">
          l
        </a>
        <a href="#f" className="fab fa-pinterest">
          p
        </a>
      </div>
      <div className="links">
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#menu">menu</a>
        <a href="#products">products</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
      </div>
      <div className="credit">
        created by <span>Portogas D Ace</span> | all rights reserved
      </div>
    </section>
  );
};

export default Footer;
