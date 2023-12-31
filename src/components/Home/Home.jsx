import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          fresh <span>food in the </span>morning
        </h3>
        <p>
          Fresh food is food which has not been preserved and has not spoiled
          yet. For vegetables and fruits, this means that they have been
          recently harvested and treated properly postharvest; for meat, it has
          recently been slaughtered and butchered; for fish, it has been
          recently caught or harvested and kept cold.
        </p>
        <a href="#home" className="btn">
          get yours now
        </a>
      </div>
    </section>
  );
};

export default Home;
