/*import logo from './logo.svg';*/
import './App.css';
import Header from "./components/Header.js";
import Proyecto from './components/Proyecto.js'
import Trabajo from './components/Trabajo.js'
import Message from './components/Message.js'
import Hero from './components/HeroBanner.js'
import Hablan from "./components/Hablan.js";
import Productos from "./components/Productos.jsx";
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faHandHoldingHeart)

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Proyecto/>
      <Trabajo />
      <Message />
      <Hablan />
      <Productos />
    </div>
  );
}

export default App;
