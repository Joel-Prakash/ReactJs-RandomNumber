import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {ranNum: 0}

  onGenerateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({ranNum: randomNumber})
  }

  render() {
    const {ranNum} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="para">
            Generate a random number in the <br />
            range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{ranNum}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
