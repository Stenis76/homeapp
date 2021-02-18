import { useState } from "react";
import NextLink from "next/Link";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

import Mui from "./Mui";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    flexGrow: 1,
    background:
      "linear-gradient(90deg, rgba(96,96,96,1) 35%, rgba(176,176,176,1) 100%)",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Mui.AppBar position="static">
      <Mui.Toolbar className={classes.header}>
        <Mui.IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <Mui.MenuIcon color="secondary" />
        </Mui.IconButton>
        <Mui.Typography
          variant="h1"
          className={classes.title}
          color="secondary"
        >
          MyHOME
        </Mui.Typography>
        <Mui.IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="menu"
        >
          <Mui.ExitToAppIcon color="secondary" />
        </Mui.IconButton>
      </Mui.Toolbar>
    </Mui.AppBar>
  );
};

export default Header;
