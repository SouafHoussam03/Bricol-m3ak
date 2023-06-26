import React ,{Component} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Bricole from './pages/Bricole';
import Contact from './pages/Contact'
import Login from './pages/Login';
import Sign from './pages/Sign';
import FindAccount from './pages/FindAccount'
import Electricity from './pages/pages service/Electricity';
import Plumbing from './pages/pages service/Plumbing';
import Carpenter from './pages/pages service/Carpenter';
import Building from './pages/pages service/Building';
import Dyeing from './pages/pages service/Dyeing';
import Mechanics from './pages/pages service/Mechanics';



class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Bricole" element={<Bricole />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Sign" element={<Sign />} />
            <Route path="FindAccount" element={<FindAccount />} />
            <Route path="Electricity" element={<Electricity />} />
            <Route path="Plumbing" element={<Plumbing />} />
            <Route path="Carpenter" element={<Carpenter />} />
            <Route path="Building" element={<Building />} />
            <Route path="Dyeing" element={<Dyeing />} />
            <Route path="Mechanics" element={<Mechanics />} />
        </Routes>
      </BrowserRouter>
    )
  }

}
export default App ;


