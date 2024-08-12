import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="c-list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="list-container">
          <div className="columns-container">
            <p className="coin-type">Coin Type</p>
            <div className="usd-and-euro-contianer">
              <p className="usd">USD</p>
              <p className="usd">EURO</p>
            </div>
          </div>

          <ul className="list-crypto-container">
            {data.map(each => (
              <CryptocurrencyItem data={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
