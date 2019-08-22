import React, { Component } from 'react'
import '../../style/foot.css'
class Foot extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="foot-root">
        <span>© Wr.W's blog copyright-蜀ICP备17040223号</span>
      </div>
    )
  }
}

export default Foot
