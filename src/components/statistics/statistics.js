import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

export default class Statistics extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="statsContainer">
        <ul>
          <li>
            <h3>Lowest Grade:</h3>
            {this.props.lowest ?
              <p>{this.props.lowest}</p>
            : null}
          </li>
          <li>
            <h3>Highest Grade:</h3>
            {this.props.highest ?
              <p>{this.props.highest}</p>
            : null}
          </li>
          <li>
            <h3>Avg Grade:</h3>
            {this.props.avg ?
              <p>{this.props.avg}</p>
            : null}
          </li>
        </ul>
      </div>
    )
  }
}

Statistics.propTypes = {
  lowest: PropTypes.number.isRequired,
  highest: PropTypes.number.isRequired,
  avg: PropTypes.number.isRequired
}
