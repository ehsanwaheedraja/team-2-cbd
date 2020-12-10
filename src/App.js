/*import logo from './logo.svg';*/
import './App.css';
import Header from "./components/Header.js";
import Proyecto from './components/Proyecto.js'
import Trabajo from './components/Trabajo.js'
import Message from './components/Message.js'
import Hero from './components/HeroBanner.js'
import Hablan from "./components/Hablan.js";
import Productos from "./components/Productos.jsx";
import Blog from "./components/Blog.js";
import Footer from "./components/Footer.js";
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faHandHoldingHeart)

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
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
