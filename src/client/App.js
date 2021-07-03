import './App.css';
import CreateUser from './component/User/CreateUser';
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
              <Route path="/">
                <CreateUser />
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
