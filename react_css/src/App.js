import './App.css';
import Calendar from './html/2023_02/230203_mini_calendar';
import Glow from './html/2023_02/230202_3D_glowing';
import Line from './html/2023_02/230201_line';
import Clock from './html/2023_02/230204_analog_clock';
import { Routes, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/230201Line">Line</Link>
      <Link to="/230202Glow">Glow</Link>
      <Link to="/230203Calendar">Calendar</Link>
      <Link to="/230204Clock">Clock</Link>
      <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
        <Route path='/230201Line' element={<Line />}></Route>
        <Route path='/230202Glow' element={<Glow />}></Route>
        <Route path='/230203Calendar' element={<Calendar />}></Route>
        <Route path='/230204Clock' element={<Clock />}></Route>
      </Routes>
    </div>
  );
}

export default App;