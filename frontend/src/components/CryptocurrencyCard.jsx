import { Card } from 'antd';

function CryptocurrencyCard(props) {

  const { currency } = props;
  // Rounding the price to 3 decimal places
  const price = Math.round(currency.quote.USD.price * 1000) / 1000;
  // Rounding the 24h price change to 2 decimal places
  const priceChange24h = Math.round(currency.quote.USD.percent_change_24h * 100) / 100;
  // Total market capitalization in billions, rounded to nearest integer
  const totalCapitalization = Math.round(currency.quote.USD.market_cap / 1e9);

  return (
    <div>
      <Card 
        title={
          <div className="flex items-center gap-3">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
            <span className="text-lg font-semibold">{currency.name}</span>
          </div>
        }
        style={{ width: 500 }}
      >
        <p>Current price: {price}$</p>
        <p>Price change (24h): {priceChange24h} %</p>
        <p>Total market capitalization: {totalCapitalization}B $</p>
      </Card>
    </div>
  )
}

export default CryptocurrencyCard