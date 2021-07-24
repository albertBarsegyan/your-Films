import * as Yup from 'yup';

export const loginScheme = Yup.object({
  email: Yup.string().email('Email is invalid.').required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is too short.')
    .max(16, 'Must be less than 16 char.'),
});
