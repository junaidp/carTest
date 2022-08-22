import './App.css';
import CarSearch from './components/carsearch/CarSearch.js'
import flagsmith from 'flagsmith';
import React, { useState } from 'react';

function App() {

  const [searchByTsn, setSearchByTsn] = useState(false);

  flagsmith.init({
    environmentID:"5EyccitGtWdXsxXU5VmerP",
    cacheFlags: true,
    enableAnalytics: true,
    onChange: (oldFlags, params) => {
      setSearchByTsn(flagsmith.hasFeature('search_by_tsn'));
    }
  });

  return (
    <div className="App">
      <header>
        KFZ
      </header>
      <CarSearch searchByTsn ={searchByTsn}></CarSearch>
      <footer>

      </footer>
    </div>
  );
}

export default App;
