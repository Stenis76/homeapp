import React, { useRef } from "react";

import { useForm } from "react-hook-form";

import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password_repeat: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const SignUpForm = () => {
  const classes = useStyles();

  const { handleSubmit, register, errors, watch } = useForm<FormData>();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={onSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="First Name"
                  name="firstName"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="lastName"
                  name="lastName"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register}
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register({
                    required: "You must specify a password",
                    minLength: {
                      value: 4,
                      message: "Password must have at least 4 characters",
                    },
                  })}
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
                {errors.password && <p>{errors.password.message}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  inputRef={register({
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  label="Repeat Password"
                  name="password_repeat"
                  size="small"
                  type="password"
                  variant="outlined"
                />
                {errors.password_repeat && (
                  <p>{errors.password_repeat.message}</p>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignUpForm;
