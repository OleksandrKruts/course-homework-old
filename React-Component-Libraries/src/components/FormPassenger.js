import { Controller, useForm } from "react-hook-form";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const FormPassenger = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Box m="56px 96px;">
        <Typography variant="h3">Passenger information</Typography>
        <Typography variant="body1" mb="36px">
          Enter the required information for each traveler and be sure that it
          exactly matches the government-issued ID presented at the airport.
        </Typography>
        <Typography variant="h4">Passenger 1 (Adult)</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box>
            <Controller
              control={control}
              name="firstName"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="First name*"
                  size="small"
                  variant="outlined"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="middle"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Middle"
                  variant="outlined"
                  size="small"
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Last name*"
                  variant="outlined"
                  size="small"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Box>
            <Controller
              control={control}
              name="suffix"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Suffix"
                  variant="outlined"
                  size="small"
                />
              )}
            />

            <Controller
              control={control}
              name="dateOfBirth"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  InputLabelProps={{ shrink: true }}
                  inputFormat="MM/DD/YYYY"
                  label="Date of birth*"
                  variant="outlined"
                  error={!!error}
                  type="date"
                  helperText={error?.message || "MM/DD/YY"}
                />
              )}
            />
          </Box>

          <Box>
            <Controller
              control={control}
              name="emailAddress"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email address*"
                  type="email"
                  variant="outlined"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="phoneNumber"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Phone number*"
                  variant="outlined"
                  type="tel"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Box>
            <Controller
              control={control}
              name="redressNumber"
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Redress number"
                  variant="outlined"
                />
              )}
            />

            <Controller
              control={control}
              name="travellerNumber"
              rules={{ required: "The field is required" }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Known traveller number*"
                  variant="outlined"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Box>

          <Button type="submit" variant="contained" size="large">
            {" "}
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormPassenger;
