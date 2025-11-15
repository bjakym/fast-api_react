import { Card } from 'antd';

function CryptocurrencyCard(props) {

  const { currency } = props;
  // Rounding the price to 3 decimal places
  const price = Math.round(currency.quote.USD.price * 1000) / 1000;
  // Rounding the 24h price change to 2 decimal places
  const priceChange24h = Math.round(currency.quote.USD.percent_change_24h * 100) / 100;
  const priceChange7d = Math.round(currency.quote.USD.percent_change_7d * 100) / 100;
  const priceChange30d = Math.round(currency.quote.USD.percent_change_30d * 100) / 100;
  // Total market capitalization in billions, rounded to nearest integer
  const totalCapitalization = Math.round(currency.quote.USD.market_cap / 1e9);
  // 24h trading volume in billions
  const volume24h = Math.round(currency.quote.USD.volume_24h / 1e9 * 100) / 100;
  // Circulating supply in millions
  const circulatingSupply = Math.round(currency.circulating_supply / 1e6 * 100) / 100;
  // Max supply (can be null for unlimited supply)
  const maxSupply = currency.max_supply ? Math.round(currency.max_supply / 1e6 * 100) / 100 : '∞';
  // Market dominance percentage
  const marketDominance = Math.round(currency.quote.USD.market_cap_dominance * 100) / 100;

  return (
    // Add shadow for the card
    <Card 
      title={
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10">
            <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`}/>
          </div>
          <span className="text-3xl font-bold">{currency.name}</span>
        </div>
      }
      style={{ width: 500 }}
    >
      <div className="text-base space-y-2">
        <p>Current price: <span className='font-medium'>{price} $</span></p>
        <p>Market cap: <span className='font-medium'>{totalCapitalization}B $</span></p>
        <p>24h volume: <span className='font-medium'>{volume24h}B $</span></p>
        <p>Market dominance: <span className='font-medium'>{marketDominance}%</span></p>
        <p>CMC rank: <span className='font-medium'>#{currency.cmc_rank}</span></p>
        <p>Price change (24h): <span className={`font-medium ${priceChange24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>{priceChange24h}%</span></p>
        <p>Price change (7d): <span className={`font-medium ${priceChange7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>{priceChange7d}%</span></p>
        <p>Price change (30d): <span className={`font-medium ${priceChange30d >= 0 ? 'text-green-600' : 'text-red-600'}`}>{priceChange30d}%</span></p>
        <p>Circulating supply: <span className='font-medium'>{circulatingSupply}M {currency.symbol}</span></p>
        <p>Max supply: <span className='font-medium'>{maxSupply}{maxSupply !== '∞' ? `M ${currency.symbol}` : ''}</span></p>
      </div>
    </Card>
  )
}

export default CryptocurrencyCard