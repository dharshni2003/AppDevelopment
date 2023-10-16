// Dashboard.js
import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ searchHistory }) => {
  return (
    <div>
      <h1>Search History</h1>
      <ul>
        {searchHistory.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchHistory: state.search.searchHistory,
});

export default connect(mapStateToProps)(Dashboard);
