import logo from './logo.svg';
import './App.css';

import ClickCounter from './Components/ClickCounter';
import HoverCount from './Components/HoverCount';
import ComponentA from './Components/ComponentA';

function App() {
  return (
    <div className="App">
      <ClickCounter/>
      <HoverCount/>
      <ComponentA/>
    </div>
  );
}

export default App;
