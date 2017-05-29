import React from "react";
import PropTypes from 'prop-types';
import uuid from "uuid";

import { bindActionCreators } from 'redux'

import * as Actions from "../../actions/itemActions.js"

import Item from './Item.js'
import './styles.scss';

export default class ItemList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 1
    }
  }

  render(){
    let { dispatch } = this.props;
    let boundActionCreators = bindActionCreators(Actions, dispatch)


    return (
      <div className="listContainer">
          <ul className="itemCards">
            {
              this.props.items.map(function(item, i){
                return (
                    <Item key={uuid.v4()} item={item} count={i} {...boundActionCreators}/>
                )
              }).reverse()
            }
          </ul>
      </div>
    )
  }
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}
