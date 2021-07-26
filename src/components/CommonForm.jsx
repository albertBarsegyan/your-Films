import React, { useState, useEffect, useReducer } from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import { registerScheme } from '../validationSchemes/registerScheme';
import GenderCheckGroup from './GenderCheckGroup';
import CommonButton from './CommonButton';
import ErrorPopUp from './PopUp';
import { handleRegistrationSubmit } from '../handlers/handleRegistraionSubmit';

export default function CommonForm() {
  const [users, setUsers] = useState([]);
  const [popup, dispatch] = useReducer(reducer, {
    show: false,
    isError: false,
    popupMessage: '',
  });
  function reducer(state, action) {
    switch (action.type) {
      case 'error':
        return {
          show: true,
          isError: true,
          popupMessage: 'There is user with this email',
        };
      case 'hide':
        return {
          show: false,
          isError: true,
          popupMessage: '',
        };
      case 'notification':
        return {
          show: true,
          isError: false,
          popupMessage: 'Now you can login',
        };
      default:
        throw new Error();
    }
  }
  useEffect(() => {
    if (localStorage.getItem('localUsers')) {
      setUsers(() => [...JSON.parse(localStorage.getItem('localUsers'))]);
      // console.log('did mount state list [common form]', users);
    }
    return () => {
      setUsers([]);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'hide' });
    }, 4000);
  }, [popup]);

  return (
    <>
      {popup.show ? (
        <ErrorPopUp isError={popup.isError} popUpMessage={popup.popupMessage} />
      ) : null}
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
        onSubmit={(formData, { resetForm }) => {
          handleRegistrationSubmit(formData, setUsers, dispatch);
          resetForm();
        }}
      >
        {() => {
          return (
            <div className="ml-0 md:ml-10 w-3/4 md:w-4/12">
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
    </>
  );
}
