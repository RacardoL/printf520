import React, { Component } from 'react'
import { connect } from 'react-redux'
import Icon from 'antd/es/icon'
import { getDetailListAction, getType } from '../../store/actionCreators'
import '../../style/hot.css'

class Hot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      choice: 0,
      // eslint-disable-next-line react/no-unused-state
      scrollX: 1000,
      // eslint-disable-next-line react/no-unused-state
      id: -1,
    }
    this.renderTypesList = this.renderTypesList.bind(this)
    this.handleClickTags = this.handleClickTags.bind(this)
    this.handleClickShow = this.handleClickShow.bind(this)
  }

  handleClickTags(id, index, e) {
    e.persist()
    e.target.parentElement.scrollTo(e.screenX - 800 + e.target.parentElement.scrollLeft, 0)
    this.setState({
      choice: index
    })
    this.props.clickTags(id)
  }

  // 循环遍历
  renderTypesList() {
    return this.props.type.map((item, index) => {
      if (item.id === '101') {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <p
            key={item.id}
            className={
              index === this.state.choice
                ? 'hot-title-content border-choice'
                : 'hot-title-content'
            }
          >{item.title}
          </p>
        )
      } else {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
          <p
            key={item.id}
            onClick={(e) => this.handleClickTags(item.id, index, e)}
            className={
              index === this.state.choice
                ? 'hot-title-content border-choice'
                : 'hot-title-content'
            }
          >{item.title}
          </p>
        )
      }
    })
  }

  handleClickShow() {}

  renderDetailList() {
    // todo
    return this.props.list.map((item, index) => {
      return (
        <p className="list-div-wrapper" key={index}>
          {/* eslint-disable-next-line react/jsx-no-target-blank */}
          <a href={item.url} className="list-a-wrapper" target="_blank">
            {index + 1}.{item.title}
          </a>
          <span className="desc-div-wrapper">
            {item.desc}
          </span>
        </p>
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
        <div className="hot-wrapper">
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <div className="hot-title-wrapper">
            {this.renderTypesList()}
          </div>
          {/* eslint-disable-next-line max-len */}
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
          <p onClick={this.handleClickShow} className="show-more-wrapper">
            <Icon type="down" />
          </p>
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
