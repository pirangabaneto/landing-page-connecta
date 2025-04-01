import "./App.css";
import AboutMe from "./components/AboutMe";
import Menu from "./components/Menu";
import Presentation from "./components/Presentation";
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
    </>
  );
}

export default App;
