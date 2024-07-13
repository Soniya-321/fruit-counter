// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}
  eatMango = () => {
    this.setState((prevState) => ({ count1: prevState.count1 + 1 }))
  }
  eatBanana = () => {
    this.setState((prevState) => ({ count2: prevState.count2 + 1 }))
  }
  render() {
    const {count1, count2} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="counter">{count1}</span> mangoes{' '}
            <span className="counter">{count2}</span> bananas
          </h1>
          <div className="fruit-card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button className="button" onClick={this.eatMango}>Eat Mango</button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button className="button" onClick={this.eatBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
