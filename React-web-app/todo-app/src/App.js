import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="body">
    <div className="Container">
      <ToDoList />
    </div>
    </div>
  );
}

export default App;
