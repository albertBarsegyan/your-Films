import { Formik, Form } from 'formik';
import React, { Component, useState, useEffect } from 'react';
import checkPasswordAndEmail from '../helpers/checkPasswordAndEmail';
import handleLogin from '../helpers/handleLogin';
import { loginScheme } from '../helpers/loginCheme';
import PopUp from '../components/PopUp';
import CommonButton from './CommonButton';
import TextField from './TextField';

export default function CommonLogin() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
  }, [showPopup]);
  return (
    <div>
      {showPopup ? (
        <PopUp popUpMessage="Email or password is incorrect." isError={true} />
      ) : null}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginScheme}
        onSubmit={(values) => {
          handleLogin(values, setShowPopup);
        }}
      >
        {() => {
          return (
            <div className="flex flex-col items-center justify-center mt-10">
              <div>
                <div>
                  <h1 className="text-gray-900 text-4xl text-center">Login</h1>
                </div>
                <div className="mt-10">
                  <Form>
                    <div>
                      <TextField
                        type="email"
                        name="email"
                        labelInnerText="Email"
                      />
                      <TextField
                        type="password"
                        name="password"
                        labelInnerText="password"
                      />
                      <div className="flex flex-row items-center justify-center">
                        <CommonButton type="submit" buttonInnerText="Login" />
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
