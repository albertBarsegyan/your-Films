import { Input } from '@material-ui/core';
import { useField, ErrorMessage } from 'formik';
import React from 'react';
import { InputLabel } from '@material-ui/core';
// textField for formik
export default function TextField({ labelInnerText, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-3">
      <InputLabel color="primary">{labelInnerText}</InputLabel>
      <div>
        <Input
          autoComplete="off"
          variant="outlined"
          color="primary"
          {...props}
          {...field}
        />
      </div>
      <div>
        <ErrorMessage
          name={field.name}
          component="p"
          className="text-red-500"
        />
      </div>
    </div>
  );
}
