import React, { ChangeEvent } from "react";
import { FieldError, FieldErrorsImpl, FieldValues, Merge, UseFormRegister } from "react-hook-form";

interface MyInputProps {
  register: any
  placeholder?: string,
  disabled?: boolean,
  isError?: boolean,
  errorMessage?: string
}

export default function MyInput({
  register,
  placeholder,
  disabled = false,
  isError = false,
  errorMessage = 'error'
}: MyInputProps) {

  return (
    <>
      <input className={`my-input ${isError ? 'error' : ''}`}
        {...register}
        placeholder={placeholder}
        disabled={disabled}
      />
      {
        isError
        ? <span className="my-input-error-message">{errorMessage}</span>
        : null
      }
    </>
  );
}