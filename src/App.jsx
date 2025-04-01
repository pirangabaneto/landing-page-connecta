import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
function App() {
  return (
    <>
      <section id="menu">
        <Menu />
      </section>

      <section id="presentation">
        <Presentation />
      </section>

      <section id="aboutMe">
        <AboutMe />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
