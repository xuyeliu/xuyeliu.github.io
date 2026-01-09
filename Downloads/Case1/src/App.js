import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTitanicData();
  }, []);

  const loadTitanicData = async () => {
    try {
      const response = await fetch('/titanic.csv');
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const cleanedData = results.data.filter(row => 
            row.PassengerId && row.PassengerId.trim() !== ''
          ).map(row => ({
            ...row,
            Age: row.Age ? parseFloat(row.Age) : null,
            Survived: parseInt(row.Survived),
            Pclass: parseInt(row.Pclass),
            SibSp: parseInt(row.SibSp),
            Parch: parseInt(row.Parch),
            Fare: row.Fare ? parseFloat(row.Fare) : null
          }));
          
          setData(cleanedData);
          setLoading(false);
        }
      });
    } catch (error) {
      console.error('Error loading data:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading Titanic dataset...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Titanic Data Visualization Dashboard</h1>
        <p>Explore passenger data from the 1912 Titanic disaster</p>
      </header>
      <Dashboard data={data} />
    </div>
  );
}

export default App;
