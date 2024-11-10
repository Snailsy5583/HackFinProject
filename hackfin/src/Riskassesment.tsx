import React, { useState } from 'react';

const Riskassesment: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <img src="src/Risk Monkey-4_processed.png" alt="Company Logo" style={logoStyle} /> 
          <h1 style={companyNameStyle}>Risk Monkey</h1>
        </div>
      </header>

      
      <div style={searchBarContainerStyle}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Enter latitude and longitude"
          style={searchBarStyle}
        />
      </div>

      
      <div style={additionalContentStyle}>
        <h2></h2>
        <p></p>
      </div>

      
      <div style={leftContainerStyle}>
        
        <p></p>
      </div>

    <div style={addContentStyle}>

        <h2></h2>
    <p> </p>
    </div>

    <div style={rightContainerStyle}>
    <p></p>

    </div>
        


    </div>
  );
};


const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'left',
  justifyContent: 'left',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '50px',
  padding: '10px 20px',
  backgroundImage: 'linear-gradient(to right, #c32727, #e87925, #d27fb2)',
  color: '#fff',
  boxShadow: '0px 8px 25px rgba(0, 0, 0, 0.4)',
  zIndex: 1000,
};

const headerContentStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
  height: '40px',
  width: 'auto',
  marginRight: '10px',
};

const companyNameStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
};

const searchBarContainerStyle: React.CSSProperties = {
  position: 'absolute',
  top: '90px',
  left: '20px',
  zIndex: 10,
};

const searchBarStyle: React.CSSProperties = {
  padding: '10px 15px',
  border: '1px solid #ddd',
  borderRadius: '15px',
  width: '500px',
  backgroundColor: '#fff',
  color: '#000',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.15)',
  transition: 'box-shadow 0.3s ease-in-out',
  outline: 'none',
  fontSize: '16px',
};


const additionalContentStyle: React.CSSProperties = {
    top: '150px',
    position: 'absolute',
    left: '15px',
    height: '1150px',
    width: '650px',
    padding: '0px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '25px',
    zIndex: 4,
  
};

const addContentStyle: React.CSSProperties = {
    top: '150px',
    position: 'absolute',
    left: '700px',
    height: '1150px',
    width: '650px',
    padding: '0px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    borderRadius: '25px',
    zIndex: 4,
};
  


const leftContainerStyle: React.CSSProperties = {
  top: '50px',
  position: 'absolute',
  left: '0px',
  height: '1265px',
  width: '1400px',
  padding: '0px',
  backgroundColor: '#f2f2f2',
  boxShadow: '5px 4px 20px rgba(0, 0, 0, 0.5)',
  borderRadius: '5px',
  zIndex: 1,
};


const rightContainerStyle: React.CSSProperties = {
    top: '50px',
    position: 'absolute',
    right: '0px',
    height: '1265px',
    width: '1200px',
    padding: '0px',
    backgroundColor: '#f2f2f2',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
    borderRadius: '5px',
    zIndex: 0,
  };

export default Riskassesment;
