import { Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react';
import { loginScheme } from '../validationSchemes/loginCheme';
import PopUp from '../components/PopUp';
import CommonButton from './CommonButton';
import TextField from './TextField';
import { useRouter } from 'next/router';
import handleLogin from '../handlers/handleLogin';

export default function CommonLogin() {
  const [showPopup, setShowPopup] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 4000);
    }
    if (isLogged) {
      router.push('/user');
    }
  }, [showPopup, isLogged, router]);

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
          handleLogin(values, setShowPopup, setIsLogged);
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
