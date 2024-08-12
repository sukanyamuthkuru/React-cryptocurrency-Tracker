// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  return (
    <li className="item-container">
      <div className="logo-and-name-container">
        <img src={data.currencyLogo} alt={data.currencyName} className="logo" />
        <p className="currency-name">{data.currencyName}</p>
      </div>
      <div className="usdAndEuroContainer">
        <p className="usd-number">{data.usdValue}</p>
        <p className="usd-number">{data.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
