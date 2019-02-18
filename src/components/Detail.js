import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Detail extends Component {
  render() {
    return (
      <div>
        test detail page
        <NavLink to={'/'}>
            go back
          </NavLink>
      </div>
    )
  }
}
