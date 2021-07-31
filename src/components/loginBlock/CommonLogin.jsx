import { Formik, Form } from 'formik';
import React, { useState, useEffect } from 'react';
import { loginScheme } from '../../validationSchemes/loginCheme';
import TextField from '../atoms/TextField';
import { useRouter } from 'next/router';
import handleLogin from '../../handlers/handleLogin';
import PopUp from '../atoms/PopUp';
import PrimaryButton from '../buttons/PrimaryButton';

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
                  <p className="text-primary text-4xl text-center">Sign In</p>
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
                        <PrimaryButton type="submit">Sign In</PrimaryButton>
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
