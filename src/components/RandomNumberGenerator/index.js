// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  clickGenerateButton = () => {
    const randomNumber = this.getRandomNumber()
    console.log(randomNumber)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="random-num-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.clickGenerateButton}
          >
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
