import { useField, ErrorMessage } from 'formik';
import React from 'react';

// textField for formik
export default function TextField({ labelInnerText, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="my-3">
      <label className="text-primary">{labelInnerText}</label>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between md:relative">
        <div>
          <input
            className="border-b border-primary bg-transparent text-xl text-primary px-4 py-2 outline-none "
            {...props}
            {...field}
          />

          <ErrorMessage
            name={field.name}
            component="p"
            className="bg-red-500 text-secondary py-2 px-4 text-center md:absolute md:top-0 md:right-0 md:transform md:translate-x-full"
          />
        </div>
      </div>
    </div>
  );
}
