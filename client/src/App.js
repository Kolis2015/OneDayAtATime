import './App.css';
import Signup from './Component/Signup';
import { Router } from '@reach/router';
import Introduction from './Component/Introduction';
import Resources from './Component/Resource';
import Login from './Component/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Signup path='/' />
        <Introduction path='/Introduction' />
        <Resources path= '/Resources' />
        <Login path= '/Login' />
      </Router>
    </div>
  );
}

export default App;
