import './App.css';
import Lessons from './components/Lessons/Lessons';
import Lessons_changer from './components/lessons_changer/Lessons_changer';
import ViewSettings from './components/ViewSettings/ViewSettings'

function App() {
  return (
      <div className="App">
          <Lessons/>
          <ViewSettings/>
      </div>
  );
}

export default App;
