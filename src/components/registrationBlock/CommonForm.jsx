import React, { useState, useEffect, useReducer } from 'react';
import { Formik, Form } from 'formik';
import { registerScheme } from '../../validationSchemes/registerScheme';
import GenderCheckGroup from './GenderCheckGroup';
import ErrorPopUp from '../atoms/PopUp';
import { handleRegistrationSubmit } from '../../handlers/handleRegistraionSubmit';
import PrimaryButton from '../buttons/PrimaryButton';
import TextField from '../atoms/TextField';
import { useRouter } from 'next/router';
export default function CommonForm() {
  const [users, setUsers] = useState([]);
  const router = useRouter();
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
      default:
        throw new Error();
    }
  }
  useEffect(() => {
    if (localStorage.getItem('localUsers')) {
      setUsers(() => [...JSON.parse(localStorage.getItem('localUsers'))]);
    }
    return () => {
      setUsers([]);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'hide' });
    }, 4000);
  }, [popup.show]);

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
          handleRegistrationSubmit(formData, setUsers, dispatch)
            ? router.push('/user')
            : null;
          resetForm();
        }}
      >
        {() => {
          return (
            <div className="ml-0 md:ml-10 w-3/4 md:w-4/12">
              <div className="text-center py-3 border-b border-primary my-5">
                <span className="text-2xl text-primary">Register now.</span>
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
                    <PrimaryButton type="submit">Register</PrimaryButton>
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
