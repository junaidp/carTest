import './App.css';
import CarSearch from './components/carsearch/CarSearch.js'
import flagsmith from 'flagsmith';
import React, { useState } from 'react';
import LoginPage from './components/LoginPage.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [searchByTsn, setSearchByTsn] = useState(false);
 
  flagsmith.init({
    environmentID:"WtXojgLDfUpP9wXJwvRhJh",
    cacheFlags: true,
    enableAnalytics: true,
    onChange: (oldFlags, params) => {
      setSearchByTsn(flagsmith.hasFeature('search_by_tsn'));
    }
  });

  function Home() {
    return <CarSearch searchByTsn={searchByTsn}></CarSearch>;
  }

  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        
        </ul>
      </nav>
      <Routes>
        
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  </Router>
);
}




function Login() {
  return <LoginPage></LoginPage>
}

export default App;