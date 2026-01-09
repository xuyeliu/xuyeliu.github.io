import React from 'react';
import BasicChart from './BasicChart';
import './Dashboard.css';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="data-info">
          <h3>Dataset Overview</h3>
          <p>Total Records: <strong>{data.length}</strong></p>
          <p>This is a basic starting point for Titanic data visualization.</p>
        </div>
        
        <div className="chart-container">
          <BasicChart data={data} />
        </div>
        
        <div className="data-preview">
          <h3>Data Sample</h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Age</th>
                  <th>Class</th>
                  <th>Survived</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 5).map((passenger, index) => (
                  <tr key={index}>
                    <td>{passenger.Name}</td>
                    <td>{passenger.Sex}</td>
                    <td>{passenger.Age || 'N/A'}</td>
                    <td>{passenger.Pclass}</td>
                    <td>{passenger.Survived === 1 ? 'Yes' : 'No'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;