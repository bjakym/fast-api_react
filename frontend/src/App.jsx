import axios from 'axios';
import { useEffect, useState } from 'react';
import { Spin } from 'antd';
import LeftMenu from './components/LeftMenu.jsx';
import CryptocurrencyCard from './components/CryptocurrencyCard.jsx';

const App = () => {
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrency = (id) => {
    axios.get(`http://localhost:8000/currencies/${id}`)
      .then(response => {
        setCurrencyData(response.data);
        console.log('Fetched currency data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching currency data:', error);
        setCurrencyData(null);
      });
  }

  useEffect(() => {
    setCurrencyData(null);
    fetchCurrency(currencyId);
  }, [currencyId]);

  const handleCurrencySelect = (id) => {
    setCurrencyId(id);
  };

  return (
    <div className="flex">
      <LeftMenu onCurrencySelect={handleCurrencySelect} />
      <div className="mx-auto my-auto shadow-lg rounded-lg">
        { currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size="large" /> }
      </div>
    </div>
  );
};

export default App;