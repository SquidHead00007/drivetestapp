import React, { useState } from 'react';
import NavBar from "./NavBar";
import SectionCard from "./SectionCard";
import SearchBar from "./SearchBar";
import doltestsection from "./data/doltestsection";

export function Home () {
    const allData = doltestsection;
    const [results, setResults] = useState(allData);
   
    const handleSearch = (query) => {
      if (query === '') {
        setResults(allData);
      }
      else {
        const filteredResults = allData.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredResults);  // Update the results state
      }
    };

    return (
      <div id="homebody">
      <div>
        <NavBar />
      </div>

      <div>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="section-card">
        {
          results.map((e) => {
            return (<SectionCard id={e.id} name={e.name} description={e.description} image={e.image} />);
          })
        }
      </div>
    </div>
    );
  }
 
  export default Home;