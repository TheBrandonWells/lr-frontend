import React, { Component } from "react";
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from "react-redux";

import * as Actions from "../actions/itemActions.js";


import ItemForm from './ItemForm/ItemForm.js';
import ItemList from './Items/ItemList.js';
import Statistics from './Statistics/Statistics.js';
import './styles.scss';

const Main = class Main extends Component{
  constructor(props) {
    super(props)
  }

  constructHighestAndLowestGrade(highest) {
    const students = this.props.items;
    const obj = highest ? _.sortBy(students, ['grade']).reverse() : _.sortBy(students, ['grade']);
    const grade = _.map(obj, 'grade')
    return parseInt(grade[0]);
  }

  constructAvgGrade(students) {
    return parseInt(_.meanBy(students, (p) => p.grade).toFixed(2));
  }


  componentDidMount() {
    const { dispatch } = this.props
    dispatch(Actions.fetchItems())
  }

  render(){
    return (
      <div className="appContainer">
        <nav className="logoHeader">
          <img src="https://www.logbinder.com/images/LogRhythm.png" width="300" />
        </nav>
        <header>
          <p>LogRhythm Frontend Exercise done by Brandon Wells May, 2017.</p>
          <p>If you have any questions feel free to email me at Brandon@brandonRwells.com</p>
        </header>
          <ItemForm {...this.props}/>
          <Statistics lowest={this.constructHighestAndLowestGrade()}
                      highest={this.constructHighestAndLowestGrade(true)}
                      avg={this.constructAvgGrade(this.props.items)}
                      {...this.props}/>
          <ItemList {...this.props}/>
      </div>
    )
  }
}

Main.propTypes = {
  items: PropTypes.array.isRequired,
  fetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    items: state.itemReducer.items,
    fetching: state.itemReducer.fetching,
  }
}

export default connect(mapStateToProps)(Main);
