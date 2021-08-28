import React from "react";
import {
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import {
  Button,
  TextField,
} from "@material-ui/core";

type Inputs = {
  text1: string;
  text2: string;
}

export const SampleWithMaterialUI = () => {
  const { control, handleSubmit, formState: { errors }} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => { console.log(data) };

  console.log(errors)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="text1"
          defaultValue="test"
          rules={{ required: true }}
          render={({ field}) => (
            <TextField
              {...field}
              label="Example Field"
              fullWidth
              margin="normal"
              placeholder="I am placeholder. when you input any value, I will disappear..."
              error={errors.text1 && true}
              helperText={ errors.text1 && true ? 'This field is required' : ''}
            />
          )}
        />
        <Controller
          control={control}
          name="text2"
          defaultValue=""
          rules={{ required: true }}
          render={({ field}) => (
            <TextField
              {...field}
              label="Example Required Field"
              fullWidth
              margin="normal"
              placeholder="I am placeholder. when you input any value, I will disappear///"
              error={errors.text2 && true}
              helperText={ errors.text2 && true ? 'This field is required' : ''}
            />
          )}
        />
        <Button variant="contained" color="primary" type="submit">
          submit
        </Button>
      </form>
    </>
  )
}