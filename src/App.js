import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Flight from "./pages/Flight";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";
import Error from './pages/Error';
import Forex from "./pages/Forex";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/flights' element={<Flight/>}/>
          <Route exact path='/hotels' element={<Hotel/>}/>
          <Route exact path='/forex' element={<Forex/>} />
          <Route exact path='/*' element={<Error/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
