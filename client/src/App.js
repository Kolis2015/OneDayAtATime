import './App.css';
import Signup from './Component/Signup';
import { Router } from '@reach/router';
import Introduction from './Component/Introduction';

function App() {
  return (
    <div className="App">
      <Router>
        <Signup path='/' />
        <Introduction path='/Introduction' />
      </Router>
    </div>
  );
}

export default App;
