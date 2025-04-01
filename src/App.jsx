import "./App.css";
import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Menu />

      <section id="presentation">
        <Presentation />
      </section>
      <section id="aboutMe">
        <AboutMe />
      </section>
      <section id="services">
        <Services />
      </section>
    </>
  );
}

export default App;
