

import HomePage from './components/Pages/HomePage';
import BlaguePage from './BlaguePage';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Link,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/citation_sauvegarder' element={<BlaguePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
