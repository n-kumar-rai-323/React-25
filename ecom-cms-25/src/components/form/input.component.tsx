import { Input, SizeType } from "antd"; // Import SizeType from antd
import React, { Fragment } from "react"; // Import Fragment
import { Controller, useController } from "react-hook-form";
export enum InputType {
  TEXT = "text",
  EMAIL = "email",
  URL = "url",
  DATE = "date",
}

export interface ITextInputProps {
  name: string;
  type?: InputType;
  placeholder?: string;
  size?: SizeType;
  control: any;
  errorMsg?: string | null;
}

export interface IInputLabelProps {
  htmlFor?: string;
  label: string;
}

export const FormErrorMessage = ({
  errorMsg = "",
}: {
  errorMsg: string | null;
}) => {
  return (
    errorMsg && (
      <span className="text-red-800 text-xs font-light italic">{errorMsg}</span>
    )
  );
};

export const TextInput = ({
  name,
  type = InputType.TEXT,
  size,
  placeholder = "Enter your value",
  control,
  errorMsg = "",
}: ITextInputProps) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <Fragment>
      {" "}
      {/* Use the explicit Fragment component */}
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        size={size}
        {...field}
        status={errorMsg ? "error" : ""}
      />
      <FormErrorMessage errorMsg={errorMsg} />
    </Fragment>
  );
};

export const PasswordInput = ({
  name,
  size,
  placeholder = "Enter your value...",
  control,
  errorMsg = "",
}: ITextInputProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              <Input.Password
                {...field}
                id={name}
                placeholder={placeholder}
                size={size}
                status={errorMsg ? "error" : ""}
              />
              <FormErrorMessage errorMsg={errorMsg} />
            </>
          );
        }}
      ></Controller>
    </>
  );
};

export const InputLabel = ({ htmlFor = "", label }: IInputLabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor}>{label}:</label>
    </>
  );
};
