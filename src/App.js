import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/*<Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          заменили т.к. не сможем в таком случае передать инфу через пропсы*/}

          <Route path="/profile" render={() => <Profile 
            state={props.state.profilePage}
            dispatch={props.dispatch}  />} />
          <Route path="/dialogs" render={() => <Dialogs 
            state={props.state.dialogsPage} 
            dispatch={props.dispatch} />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;