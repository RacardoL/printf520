import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDetailListAction, getType } from '../../store/actionCreators'
import '../../style/hot.css'

class Hot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 0,
      // eslint-disable-next-line react/no-unused-state
      id: -1,
    }
    this.renderTypesList = this.renderTypesList.bind(this)
    this.handleClickTags = this.handleClickTags.bind(this)
  }

  handleClickTags(id, index) {
    this.setState({
      choice: index
    })
    this.props.clickTags(id)
  }

  // 循环遍历
  renderTypesList() {
    return this.props.type.map((item, index) => {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <p
          key={item.id}
          onClick={() => this.handleClickTags(item.id, index)}
          className={
            index === this.state.choice
              ? 'hot-title-content border-choice'
              : 'hot-title-content'
          }
        >{item.title}
        </p>
      )
    })
  }

  renderDetailList() {
    // todo
    return this.props.list.map((item, index) => {
      return (
        <p className="list-div-wrapper" key={index}>{index + 1}.{item.title}</p>
      )
    })
  }

  componentDidMount() {
    // todo
    this.props.getTypes()
  }

  render() {
    return (
      <div className="hot-root">
        <div className="hot-title-wrapper">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          {this.renderTypesList()}
          {this.renderDetailList()}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.list,
    type: state.type
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    clickTags(id) {
      const action = getDetailListAction(id)
      dispatch(action)
    },
    getTypes() {
      const action = getType()
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Hot)
