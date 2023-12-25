// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onStart = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }
  onStop = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="main-h">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1>Speed is {count}mph</h1>
        <p>Min limit is 0mph, Max limit is 200mph</p>
        <div className="con1">
          <button className="b1" onClick={this.onStart}>
            Accelerate
          </button>
          <button className="b2" onClick={this.onStop}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
