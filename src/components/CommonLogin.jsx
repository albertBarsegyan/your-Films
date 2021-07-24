import { Formik } from 'formik';
import React, { Component } from 'react';
import { registerScheme } from '../helpers/registerScheme';
import CommonButton from './CommonButton';
import TextField from './TextField';

export default function CommonLogin() {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={registerScheme}
        onSubmit={(values) => {
          // console.log(values);
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
                  <form>
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
                  </form>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
