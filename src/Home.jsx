import "./App.css";
import Events from "./components/events/Events";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Speakers from "./components/speakers/Speakers";
import Sponsors from "./components/sponsors/Sponsors";
const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Landing />
      <About />
      <Events />
      <div id="speakers">
        <Speakers />
      </div>
      <Sponsors />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
