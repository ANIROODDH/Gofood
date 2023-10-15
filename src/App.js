import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
    <div >
      <Routes>
      <Route exact path="/" element={<Home></Home>}/>
      <Route exact path="/signup" element={<Signup></Signup>}/>
      <Route exact path="/Login" element={<Login></Login>}/>
      </Routes>
    </div>
    </Router>
      );
}

export default App;
