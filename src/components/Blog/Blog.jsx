import { blog } from '../../Data';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>
      <div className="box-container">
        {blog.map((item, index) => (
          <div className="box" key={index * Math.random()}>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <a href="#title" className="title">
                tasty and refreshing spices
              </a>
              <span>by admin / 21st may, 2021</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                dicta.
              </p>
              <a href="#btn" className="btn">
                read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
