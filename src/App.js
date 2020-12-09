/*import logo from './logo.svg';*/
import './App.css';
import Proyecto from './components/Proyecto.js'
import Trabajo from './components/Trabajo.js'
import Message from './components/Message.js'
/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faHandHoldingHeart)


function App() {
  return (
    <div>
      <container>
   <Proyecto></Proyecto>
   </container>
   <container>
   <Trabajo></Trabajo>
   </container>
   <container>
   <Message></Message>
   </container>
   </div>
      
  )
}

export default App;
