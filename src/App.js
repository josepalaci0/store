import './App.css';
import{ Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login';
import Shop from './components/Shop';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={`/login/`} exact component={Login}/>
        <Route path={`/shop/:id`} exact component={Shop}/>
        <Route path={`/products/:add_to_cart`} exact component={Products}/>
        <Redirect to={`/login/`}/>
      </Switch>     
    </div>
  );
}

export default App;
