import './App.css';
import CreateClient from './component/Client/CreateClient';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './global'

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div className="App-content container">
          <div className="row">
            <Switch>
              <Route exact path="/">
                <CreateClient />
              </Route>
            </Switch>
          </div>
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
