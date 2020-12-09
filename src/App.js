import "./App.css";
import Header from "./components/Header.js";
import Hero from './components/HeroBanner.js'
import Hablan from "./components/Hablan.js";
import Productos from "./components/Productos.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Hablan />
      <Productos />
    </div>
  );
}

export default App;
