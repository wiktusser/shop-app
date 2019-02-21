import React, { Component } from 'react';
import { connect } from 'react-redux'

import {selectCategory} from '../actions';

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    items: state.displayItems
  }
}

const mapDispatchToProps = { selectCategory }

class CategoriesList extends Component {

  handleSelectCategory = (e) => {
    
    this.props.selectCategory(e.target.value)
  }

  render() {
    return (
      <div className="CategoriesList">
        <button onClick={(e) => this.handleSelectCategory(e)}>Category 1</button>
        <div>Category 2</div>
        <div>Category 3</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)
