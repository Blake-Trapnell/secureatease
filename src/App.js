import Landing from "./components/landing/landing.js";
import Navbar from "./components/nav/navbar.js";
import './App.scss';
import Main from "./Main.js";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
