import axios from 'axios';
import { useEffect, useState } from 'react';
import { Menu, Spin } from 'antd';
import CryptocurrencyCard from './components/CryptocurrencyCard.jsx';

const App = () => {

  const [currencies, setCurrencies] = useState([]);
  const [currencyId, setCurrencyId] = useState(1);
  const [currencyData, setCurrencyData] = useState(null);

  const fetchCurrencies = () => {
    axios.get('http://localhost:8000/currencies/')
      .then(response => {
        const currenciesResponse = response.data;
        const menuItems = [{
          key: 'crypto-group',
          label: 'Cryptocurrencies List',
          type: 'group',
          children: currenciesResponse.map(currency => ({
            key: currency.id,
            label: currency.name,
          }))
        }];
        setCurrencies(menuItems);
      })
      .catch(error => {
        console.error('Error fetching currencies:', error);
        setCurrencies([]);
      });
  }

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
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setCurrencyData(null);
    fetchCurrency(currencyId);
  }, [currencyId]);

  const onClick = e => {
    setCurrencyId(e.key);
  };
  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['crypto-group']}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll"
      />
      <div className="mx-auto my-auto">
        { currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size="large" /> }
      </div>
    </div>
  );
};

export default App;