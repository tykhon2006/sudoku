
import { Route } from 'react-router';
import './App.scss';
import { Menu } from './components/main/menu';

function App() {
  return (
    <div className="App wrap">
    <div class="container">
      <Route path={["/", "/menu"]} render={()=> <Menu />}/>
    </div>
    </div>
  );
}

export default App;
