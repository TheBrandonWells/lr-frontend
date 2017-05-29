import React from "react";
import PropTypes from 'prop-types';
import InlineEdit from 'react-edit-inline';

import './styles.scss';

export default class Item extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      nameError: false,
      gradeError: false,
    }
  }

  onClickDelete() {
    const { item, deleteItem } = this.props;
    deleteItem(item.id)
  }

  dataChanged(data) {
    const { item, updateItem } = this.props;
    // account for if they only change one of the two attributes
    const name = data.name ? data.name : item.name
    const grade = data.grade ? parseInt(data.grade) : item.grade

    // reset our error messages
    this.setState({
      gradeError: false,
      nameError: false,
    })
    updateItem(item.id, name, grade, item.picture)
  }

  validateName(text) {
    // if they enter a name between 1-50 characters and make sure they didn't add numerics
    const validate = (text.length > 0 && text.length < 50 && !(/\d/.test(text)))
    if (validate) {
      return true;
    }

    this.setState({nameError: true});
    setTimeout(() => this.setState({nameError: false}), 3000);
    return false;
  }

  validateGrade(num) {
    // if grade is a number and between 0-150
    const validate = !(isNaN(num)) && num > -1 && num < 150
    if (validate) {
      return true;
    }

    this.setState({gradeError: true});
    setTimeout(() => this.setState({gradeError: false}), 3000);
    return false;
  }

  render(){
    const { item } = this.props;
    const failClass = item.grade < 65 ? 'failing' : null;

    return (
      <li className={failClass}>
          <div className="cardContainer">
            <div className="grade">{item.gradeLetter}</div>
            <img src={item.picture} />
            <div className="cardInfo">
              <p className="cardHeader">
                <InlineEdit
                validate={::this.validateName}
                activeClassName="editing"
                text={item.name}
                paramName="name"
                change={::this.dataChanged}
              />
              {this.state.nameError  ?
                <small className="error">To update please enter a valid name.</small>
              : null }
            </p>
            <p>
                <InlineEdit
                validate={::this.validateGrade}
                activeClassName="editing"
                text={item.grade.toString()}
                paramName="grade"
                change={::this.dataChanged}
              />/100
              {this.state.gradeError ?
                <small className="error">To update please enter a valid number.</small>
              : null }
            </p>
            </div>
            <div className="itemTools">
                <i className="fa fa-trash" onClick={() => this.onClickDelete()}/>
            </div>
          </div>
      </li>
    )
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
}
