import React, { useState } from 'react';
import "./RiskEvaluationPage.css";

const RiskAssesment: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div id="root2">
      <header>
        <a href="/home">
          <img src="src/assets/Risk Monkey-4_processed.png" alt="Company Logo" id="logo" /> 
          <h1 id="companyName">Risk Monkey</h1>
        </a>
      </header> 

      <div id="pageContainer">
        <div id="leftContainer">
          <div id="searchBarContainer">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Enter latitude and longitude"
              id="searchBar"
            />
          </div>

          <div id="customization">
            <h2>additionalContentStyle</h2>
            <p></p>
          </div>
          <div id="analysis">
            <h2>addContentStyle</h2>
            <p></p>
          </div>
        </div>

        <div id="rightContainer">
          <p>rightContainerStyle</p>
        </div>
      </div>
    </div>
  );
};

export default RiskAssesment;
