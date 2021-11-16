import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import UsersContainer from './components/UsersContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer /> */}
      {/* <HooksCakeContainer /> */}
      <NewCakeContainer />
      <IceCreamContainer />
      <UsersContainer />
    </div>
    </Provider>
  );
}

export default App;
