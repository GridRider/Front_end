import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/common/NavBar";
import Routing from "./components/routes/Routing";

function App() {
  return (
    <>
      <NavBar />
      <Routing />
    </>
  );
}

export default App;
