import { Card } from "@mui/material";
import classes from "./LocationDetails.module.css";

function LocationDetails(props) {
  return (
    <Card>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <h3>{props.description}</h3>
    </Card>
  );
}

export default LocationDetails;
