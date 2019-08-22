import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/title.css'
import { Icon, Input } from 'antd'

class Title extends Component {
  constructor(props) {
    super(props)
    this.handleClickSearchShow = this.handleClickSearchShow.bind(this)
    this.handleClickSearchClick = this.handleClickSearchClick.bind(this)
    this.state = {
      showSearchIcon: true,
    }
  }

  //
  handleClickSearchClick() {
    const { showSearchIcon } = this.state
    this.setState({
      showSearchIcon: !showSearchIcon
    })
  }

  // 点击🔍显示输入框，并且隐藏🔍
  handleClickSearchShow() {
    if (this.state.showSearchIcon) {
      return (
        <Icon onClick={this.handleClickSearchClick} type="search" className="right-search-icon" />
      )
    } else {
      return (
        <Input.Search
          autoFocus
          className="input-search-wrapper"
          onBlur={this.handleClickSearchClick}
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
        />
      )
    }
  }

  render() {
    return (
      <div className="title-root">
        <div className="left-wrapper-title">
          <b className="left-content-logo-left">Printf</b> <span className="left-content-logo-right">& 520</span>
        </div>
        <div className="right-wrapper-title">
          <p className="right-menus">Home</p>
          <p className="right-menus">News</p>
          <p className="right-menus">Daily</p>
          <p className="right-menus">About</p>
          <p className="right-menus">Contact</p>
          {this.handleClickSearchShow()}
        </div>
      </div>
    )
  }
}

// 这个state指的是store里面的数据
// 把store映射到props里面来
const mapStateToProps = (state) => {
  return {
    a: state.a
  }
}

// store.dispatch 挂载到 props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

// 连接到store
export default connect(mapStateToProps, mapDispatchToProps)(Title)
