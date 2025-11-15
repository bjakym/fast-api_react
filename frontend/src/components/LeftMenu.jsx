import axios from 'axios';
import { useEffect, useState } from 'react';
import { Menu } from 'antd';

function LeftMenu({ onCurrencySelect }) {
  const [currencies, setCurrencies] = useState([]);

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

  useEffect(() => {
    fetchCurrencies();
  }, []);

  const onClick = (e) => {
    onCurrencySelect(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['crypto-group']}
      mode="inline"
      items={currencies}
      className="h-screen overflow-scroll"
    />
  );
}

export default LeftMenu;
