import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { NextPage } from "next/types";
import LogInForm from "../components/LogInForm";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const LoginPage: NextPage = () => {
  const classes = useStyles();

  return <LogInForm />;
};

export default LoginPage;
