import React, { Component } from 'react';
import { Field } from 'formik';

export default class GenderCheckGroup extends Component {
  render() {
    return (
      <div className="my-4">
        <div className="text-center">
          <span>Choose Gender</span>
        </div>
        <div className="mx-2 inline-block">
          <label>
            <Field
              className="mx-2"
              type="radio"
              name="gender"
              value="male"
              required
            />
            Male
          </label>
        </div>
        <div className="mx-2 inline-block">
          <label>
            <Field
              className="mx-2"
              type="radio"
              name="gender"
              value="female"
              required
            />
            Female
          </label>
        </div>
      </div>
    );
  }
}
