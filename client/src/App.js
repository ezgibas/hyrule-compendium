import { Route, Routes } from "react-router-dom";
import Compendium from "./pages/Compendium";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route exact path="/" render={(props) => <HomePage></HomePage>}></Route>
      <Route path = "/compendium" render={(props) => <Compendium></Compendium>}></Route>
    </Routes>
  );
}

export default App;
