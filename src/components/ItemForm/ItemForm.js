import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Input, Button, Message } from 'semantic-ui-react';
import * as Actions from "../../actions/itemActions.js"


import './styles.scss';

class ItemForm extends Component{
  constructor(props) {
    super(props);
  }

  nameInput({ input, meta: { touched, error }}) {
    const hasError = touched && !!error;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input
          error={hasError}
          fluid
          placeholder="Student Name"
          {...input} />
      </div>
    );
  }

  gradeInput({ input, meta: { touched, error }}) {
    const hasError = touched && !!error;
    return (
      <div>
        {hasError &&
          <Message
            error
            header='Error'
            content={error} />
        }
        <Input
          error={hasError}
          fluid
          placeholder="Grade Score"
          {...input} />
      </div>
    );
  }

  submitForm({name, grade}, dispatch){
    dispatch(Actions.addItem(name, parseInt(grade)))
  }

  render(){
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Add a new student:</h2>
        <form className="newItemForm" onSubmit={handleSubmit(::this.submitForm)}>
          <Field name="name" component={this.nameInput} />
          <Field name="grade" component={this.gradeInput} />
          <Button fluid type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const { name, grade } = values;
  const errors = {};

  if (!name || name.trim() === ''){
    errors.name = 'Name is required.';
  } else if((/\d/.test(name))){
    errors.name = 'Name must be letters only.'
  } else if (name.length > 150) {
    errors.name = 'Name must be between 1-150 characters.'
  }

  if(!grade || grade.trim() === ''){
    errors.grade = 'Grade is required.'
  } else if (isNaN(grade)) {
    errors.grade = 'Grades must be in numeric format.'
  } else if ( parseInt(grade) < 0 || parseInt(grade) > 150) {
    errors.grade = 'Grade must be between 0-150.'
  }

  return errors;
}

ItemForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'addStudent',
  validate,
})(ItemForm)
