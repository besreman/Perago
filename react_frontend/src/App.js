import './App.css';

import Tree from './tree';

import { DATA } from './constants';

function App() {
  return (
    <>
    <h3>Perago employees structure</h3>
    <div className="App">
    <Tree data={DATA} />
  </div></>
  );
}

export default App;
