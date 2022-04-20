import { Card } from "@mui/material";
import classes from "./LocationDetails.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";

function LocationDetails(props) {
  return (
    <div className={classes.details}>
      <Link href="/view-content">
        <CloseIcon className={classes.exit} />
      </Link>
      <div className={classes.details__container}>
        <div className={classes.details__image}>
          <img src={props.image} className={classes.imageItem} />
        </div>
        <div className={classes.content}>
          <h2> {props.title} </h2>
          <address>{props.address}</address>
          <p> {props.description} </p>
        </div>
      </div>
    </div>
  );
}

export default LocationDetails;

// {
//   props.image;
// }
// {
//   props.title;
// }
// {
//   props.description;
// }
// {
//   props.address;
// }
// <Link href="/view-content">
//   <CloseIcon className={classes.exit} />
// </Link>;
