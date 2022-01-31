import { Card } from "@mui/material";
import classes from "./LocationDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";

function LocationDetails(props) {
  return (
    <div className={classes.details}>
      <div className={classes.details__item}>
        <Link href="/view-content">
          <CloseIcon className={classes.exit} />
        </Link>
        <div className={classes.details__image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.details__content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>{" "}
      </div>
    </div>
  );
}

export default LocationDetails;
