// pages/index.js
import React, { useState, useEffect } from 'react';
import DataList from '../components/DataList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MySQL Database</h1>
      <DataList data={data} />
    </div>
  );
};

export default Home;
