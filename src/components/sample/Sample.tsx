import React from 'react';
import { Typography } from "@material-ui/core";
import {SubmitHandler, useForm} from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
}

export const Sample = (): JSX.Element => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log('submit data', data);

  console.log('watch example', watch("example"));
  console.log('watch exampleRequired', watch("exampleRequired"));
  return (
    <>
      <Typography>Sample</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
      </form>
    </>
  );
}
