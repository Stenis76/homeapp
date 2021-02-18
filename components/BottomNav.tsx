import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import AddIcon from "@material-ui/icons/Add";
import LocationOnIcon from "@material-ui/icons/House";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    color: theme.palette.primary.main,
    height: "100px",
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.icon}
        label="Recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        label="Add"
        icon={<AddIcon />}
      />
      <BottomNavigationAction
        className={classes.icon}
        label="Projects"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
