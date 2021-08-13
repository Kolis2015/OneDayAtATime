import './App.css';
import Signup from './Component/Signup';
import { Router } from '@reach/router';
import Introduction from './Component/Introduction';
import Resources from './Component/Resource';
import Login from './Component/Login';
import Postblog from './Component/Postblog';

function App() {
  return (
    <div className="App">
      <Router>
        <Signup path='/' />
        <Introduction path='/Introduction' />
        <Resources path='/Resources' />
        <Login path='/Login' />
        <Postblog path='/Postblog' />
      </Router>
    </div>
  );
}

export default App;
