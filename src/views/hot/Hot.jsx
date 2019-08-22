import React, { Component } from 'react'

import '../../style/hot.css'

class Hot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 0,
      index: 0
    }
  }

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <div className="hot-root">
        <div className="hot-title-wrapper">
          <p className={
            this.state.choice === this.state.index
              ? 'hot-title-content border-choice'
              : 'hot-title-content'
          }
          >知乎
          </p>
        </div>
      </div>
    )
  }
}

export default Hot
