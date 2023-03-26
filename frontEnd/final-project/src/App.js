import Register from "./fold2/registerpage";
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/" exact>
          
               <Register/>
          </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;