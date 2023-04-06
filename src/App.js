import './App.css';
import Lessons from './components/Lessons/Lessons';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link className='group_link' to="/lessons">3ПИ</Link>
        <Routes>
          <Route path="/lessons" element={<Lessons/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
