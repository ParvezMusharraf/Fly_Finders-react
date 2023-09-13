import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css'

import FlightBookingCard from "./Components/FlightBookingCard/FlightBookingCard";
import SearchBar from './Components/SerachBar/SearchBar';
import NavRouter from './Router/NavRouter';


function App() {
  return (
    <>
    <div className="app">
    <NavRouter/>
    </div>
    </>
  );
}

export default App;
