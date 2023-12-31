import AboutImg from '../../assets/images/about-img.jpeg';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>
      <div className="row">
        <div className="image">
          <img src={AboutImg} alt="about" />
        </div>
        <div className="content">
          <h3>what makes our food special?</h3>
          <p>
            Without food, there will be no life. In today’s world, there are so
            many dishes available worldwide. Food comes in a wide variety all
            around the world. Dosa, Paneer, Naan, Chapati, Biryani, and more
            Indian delicacies are available.
          </p>
          <p>
            Burgers are one of the most convenient and easiest foods to eat on
            the fly when we’re in a hurry. We can have a burger at any time of
            day, whether it’s breakfast, lunch, or supper, and maybe some fries
            and a Coke to go with it.
          </p>
          <a href="#about" className="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
