import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Sobre from "./Pages/Sobre";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/Sobre">
          <Sobre />
        </Route>
        <Route path="/Contato">
          <Contato />
        </Route>
        <Route path="/Projetos">
          <Projetos />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
