import React from "react";
import {
  Control,
  Controller,
  FieldErrors
} from "react-hook-form";
import { TextField } from "@material-ui/core";

type TextProps = {
  control: Control<any, object> | undefined;
  label: string;
  name: string;
  defaultValue: string;
  placeholder?: string;
  rules?: object;
  errors?: FieldErrors;
};

export const Text = (props: TextProps): JSX.Element => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      rules={{ required: true }}
      render={({ field}) => (
        <TextField
          {...field}
          label={props.label}
          fullWidth
          margin="normal"
          placeholder={props.placeholder ? props.placeholder : ""}
          error={props.errors?.[props.name.toString()] && true}
          helperText={ props.errors?.[props.name.toString()] && true ? 'This field is required' : ''}
        />
      )}
    />
  )
}