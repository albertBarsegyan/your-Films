import React, { useState, useEffect } from 'react';
import { Input, Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import { registerScheme } from '../helpers/registerScheme';
import GenderCheckGroup from './GenderCheckGroup';

export default function CommonForm() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('localUsers')) {
      setUsers((prevState) => [
        ...prevState,
        ...JSON.parse(localStorage.getItem('localUsers')),
      ]);
      console.log('did mount state list', users);
    }
  }, []);
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
      onSubmit={(values) => {
        if (!localStorage.getItem('localUsers')) {
          Promise.resolve('success')
            .then(() => {
              localStorage.setItem('localUsers', JSON.stringify(usersList));
              return JSON.parse(localStorage.getItem('localUser'));
            })
            .then((data) => {
              setUsers((prevState) => [...prevState, ...data]);
              console.log(users);
            });

          return;
        }

        console.log(values);
      }}
    >
      {() => {
        return (
          <div className="ml-10 w-3/12">
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
                  <Button type="submit" variant="contained" color="primary">
                    Register
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}
