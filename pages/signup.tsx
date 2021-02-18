import React, { useRef, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import firebase from "firebase/app";
import "firebase/auth";

import initFirebase from "../utils/firebase";

import { makeStyles } from "@material-ui/core/styles";

import { NextPage } from "next/types";
import SignUpForm from "../components/SignUpForm";

initFirebase();

const provider = new firebase.auth.GoogleAuthProvider();

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const SignUpPage: NextPage = () => {
  const classes = useStyles();
  const [authorizing, setAuthorizing] = useState(false);

  const handleAuthentication = async () => {
    setAuthorizing(true);

    try {
      const result = await firebase.auth().signInWithPopup(provider);

      const { user, credential } = result;
      console.log(user, credential);

      if (!user) {
        throw new Error("there was a problem authorizing");
      }
      Router.push("/");
    } catch (error) {}
    setAuthorizing(false);
  };

  return (
    <div>
      <SignUpForm />;<button onClick={handleAuthentication}>Get started</button>
    </div>
  );
};

export default SignUpPage;
