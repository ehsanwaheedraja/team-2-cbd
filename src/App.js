import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import Hablan from "./components/Hablan.js";
import Productos from "./components/Productos.jsx";

function App() {
  return (
    <div>
      <Header />
      {/* <Hablan /> */}
      <Productos />
    </div>
  );
}

export default App;
