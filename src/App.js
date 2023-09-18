import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './App.css'
import NavRouter from './Router/NavRouter';
import Crausel from './Components/Crausel/Crausel';


function App() {
  return (
    <>
    <div className="app">
    <NavRouter/>
    {/* <Crausel/> */}
    </div>
    </>
  );
}

export default App;
