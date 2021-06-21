
import { Route } from 'react-router';
import './App.scss';
import { Menu } from './components/main/Menu';
import { Easy } from './components/main/Easy';

function App() {
  return (
    <div className="App">
        <Route path={["/", "/menu"]} exact render={() => <Menu />} />
        <Route path="/easy" render={()=> <Easy />} />
    </div>
  );
}

export default App;
