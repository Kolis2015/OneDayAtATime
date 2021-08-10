
import './App.css';
import Signup from './Component/Signup';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
     <Signup path='/' />
     </Router>
    </div>
  );
}

export default App;
