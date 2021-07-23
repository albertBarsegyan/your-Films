import React, { Component } from 'react';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Field } from 'formik';
import CheckIcon from '@material-ui/icons/Check';
export default class GenderCheckGroup extends Component {
  render() {
    return (
      <div className="my-4">
        <div className="text-center">
          <span>Choose Gender</span>
        </div>
        <div className="mx-2 inline-block">
          <label>
            <Field className="mx-2" type="radio" name="gender" value="male" />
            Male
          </label>
        </div>
        <div className="mx-2 inline-block">
          <label>
            <Field className="mx-2" type="radio" name="gender" value="female" />
            Female
          </label>
        </div>
      </div>
    );
  }
}
