import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Product/Product';
import Review from './components/Review/Review';

const App = () => (
  <>
    <Navbar />
    <Home />
    <About />
    <Menu />
    <Products />
    <Review />
    <Contact />
    <Blog />
    <Footer />
  </>
);

export default App;
