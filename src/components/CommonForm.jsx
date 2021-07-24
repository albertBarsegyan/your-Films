import React, { useState, useEffect } from 'react';

import { Formik, Form } from 'formik';
import TextField from './TextField';
import { registerScheme } from '../helpers/registerScheme';
import GenderCheckGroup from './GenderCheckGroup';
import CommonButton from './CommonButton';
import { handleRegistrationSubmit } from '../helpers/handleRegistraionSubmit';

export default function CommonForm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('localUsers')) {
      setUsers(() => [...JSON.parse(localStorage.getItem('localUsers'))]);
      // console.log('did mount state list [common form]', users);
    }
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
      }}
      validationSchema={registerScheme}
      onSubmit={(formData) => {
        handleRegistrationSubmit(formData, setUsers);
      }}
    >
      {() => {
        return (
          <div className="ml-10 w-3/12">
            <div className="text-center py-3 border-b border-gray-800 my-5">
              <span className="text-xl text-gray-800 ">Register now.</span>
            </div>
            <Form>
              <div className="flex flex-col items-center justify-center">
                <TextField
                  type="text"
                  name="firstName"
                  labelInnerText="First Name"
                />
                <TextField
                  type="text"
                  name="lastName"
                  labelInnerText="Last Name"
                />
                <TextField type="email" name="email" labelInnerText="Email" />
                <TextField
                  type="password"
                  name="password"
                  labelInnerText="Password"
                />
                <TextField
                  type="password"
                  name="confirmPassword"
                  labelInnerText="Confirm Password"
                />
                <GenderCheckGroup />
                <div>
                  <CommonButton type="submit" buttonInnerText="Register" />
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
