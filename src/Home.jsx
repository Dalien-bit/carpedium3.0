import "./App.css";
import Events from "./components/events/Events";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";

const Home = () => {
  return (
    <div className="bg-black">
      <Landing />
      <About />
      <Events />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
