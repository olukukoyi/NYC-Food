import Link from "next/link";
import classes from ".//Navbar.module.css";
import { Button, AddIcon } from "@material-ui/core";
import LoginIcon from "@mui/icons-material/Login";

import { makeStyles } from "@material-ui/core";
import { signInWithGoogle, auth, logOut } from "../../Firebase";
import { useEffect, useState } from "react";

// const useStyles = makeStyles({});

function Navbar() {
  const [isSignedIn, setIsSignedIn] = useState();
  // const classes = useStyles();
  auth.onAuthStateChanged((user) => {
    setIsSignedIn(user);
  });

  return (
    <div className={classes.nav__container}>
      <Link href="/">
        <h1>NYC</h1>
      </Link>
      <div className={classes.nav__links__container}>
        <ul>
          <li
            onClick={() => {
              if (!isSignedIn) {
                alert("please sign in");
              }
            }}
          >
            <Link href={isSignedIn ? "/forum-page" : ""}>Add a Location</Link>
          </li>
          <li>
            <Link href="/view-content">View Locations</Link>
          </li>
        </ul>
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={!isSignedIn ? signInWithGoogle : logOut}
        endIcon={<LoginIcon />}
        disableElevation
      >
        {isSignedIn ? "Log Out Here " + isSignedIn.displayName : "Log In"}
      </Button>
    </div>
  );
}

export default Navbar;
