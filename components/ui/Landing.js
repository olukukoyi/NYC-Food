import classes from "./Landing.module.css";
// import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { Button } from "@mui/material";

function Landing() {
  return (
    <div className={classes.showcase}>
      <h2>New York Citys Hottest and Trending Food Places</h2>
      <div className={classes.showcase__container}>
        <Link href="/view-content" style={{ textDecoration: "none" }}>
          <button size="large" className={classes.showcase__button}>
            View
          </button>{" "}
        </Link>
        <Link href="/forum-page" style={{ textDecoration: "none" }}>
          <button size="large" className={classes.showcase__button}>
            Add
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
