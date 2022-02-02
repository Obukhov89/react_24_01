import './App.css';
import IndexForm from './Components/Messages/IndexForm';
import ChatList from './Components/ChatList';

function App() {
  return (
    <div className="App">
      <aside><ChatList/></aside>
      <IndexForm/>
    </div>
  );
}

export default App;
