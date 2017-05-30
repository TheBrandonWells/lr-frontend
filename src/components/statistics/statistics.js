import React from "react";
import PropTypes from 'prop-types';

import './styles.scss';

export default class Statistics extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const { lowest, highest, avg } = this.props;
    return (
      <div className="statsContainer">
        <ul>
          <li>
            <h3>Lowest Grade:</h3>
            {lowest !== 'undefined' ?
              <p>{lowest}</p>
            : null}
          </li>
          <li>
            <h3>Highest Grade:</h3>
            {highest ?
              <p>{highest}</p>
            : null}
          </li>
          <li>
            <h3>Avg Grade:</h3>
            {avg ?
              <p>{avg}</p>
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
