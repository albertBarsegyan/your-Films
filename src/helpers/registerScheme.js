import * as Yup from 'yup';



// Using built-in methods
export const registerScheme = Yup.object({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Firstname is required'),

  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Lastname is required'),

  email: Yup.string()
    .email('Email is invalid.')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short.')
    .max(16, 'Must be less than 16 char.'),

  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    "Passwords don't match"
  ),
});
