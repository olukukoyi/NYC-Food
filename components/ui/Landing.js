import classes from "./Landing.module.css";
// import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { Button, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    color: "#fefefe",
    marginTop: 4,
  },
  btn: {
    marginTop: 20,
  },
});

function Landing() {
  const cl = useStyles();
  return (
    <div className={classes.showcase}>
      <Typography variant="h3" className={cl.text}>
        New York Citys Hottest and Trending Food Places
      </Typography>
      <Typography variant="h6" className={cl.text}>
        Do you love eating? So Does NYC. Here you can view the #1 Food spots
      </Typography>
      <Typography variant="subtitle1" className={cl.text}>
        SeaFood, Soul Food, Fast Food. You name it!
      </Typography>
      <Button
        size="large"
        href="/view-content"
        className={cl.btn}
        endIcon={<ArrowForwardIcon />}
        variant="contained"
      >
        View Locations
      </Button>
    </div>
  );
}

export default Landing;
