import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.getFetchedDetails()
  }

  getFetchedDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    console.log(updatedData)
    this.setState({isLoading: false, currenciesData: updatedData})
  }

  render() {
    const {isLoading, currenciesData} = this.state
    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList data={currenciesData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
