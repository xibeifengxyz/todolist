import './App.css';
import Choose from './containers/choose';
import Input from './containers/input'
import Mainlist from './containers/mainlist';

function App() {
  return (
    <div className="App">
      <Input />
      <Mainlist />
      <Choose />
    </div>
  );
}

export default App;
