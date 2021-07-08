import './App.css';
import Navbar from './components/Navbar';
import { Homepage } from './components/pages/Homepage';
import  Services  from './components/pages/Services';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/services" component={Services} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
