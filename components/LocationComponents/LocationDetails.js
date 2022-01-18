import { Card } from "@mui/material";
import classes from "./LocationDetails.module.css";

function LocationDetails(props) {
  return (
    <div className={classes.details}>
      <div className={classes.details__image}>
        <img src={props.image} alt="" />
      </div>
      <div className={classes.details__content}>
        <h2>{props.title}</h2>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default LocationDetails;
