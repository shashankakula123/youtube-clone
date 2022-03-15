import RecommendedVideo from './RecommendedVideo';
import './App.css';
import Sidebar from './Sidebar';
 import Header from './Header';
 import React from 'react';
import {BrowserRouter as Router ,Route, Switch} from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <div className="App">
     
           <Router>
             <Header/>
             <Switch>
            <Route path='/search/:searchTerm'>
            <div className='app__page'>
    <Sidebar/>
    <SearchPage/>
    </div>
</Route>
<Route path='/'>
<div className='app__page'>
    <Sidebar/>
    <RecommendedVideo/>
    </div>
    </Route>
            </Switch>
           </Router>


    </div>

  );
}

export default App;
