import { Button } from "@mui/material";
import { useRouter } from "next/router";
import classes from "./LocationItem.module.css";
import Card from "../ui/Card";

function LocationItem(props) {
  const router = useRouter();

  function handleDetails() {
    router.push("/" + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img alt={props.title} src={props.image} />
        </div>
        <div className={classes.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
        </div>

        <div className={classes.actions}>
          <Button onClick={handleDetails}>Details</Button>
        </div>
      </Card>
    </li>
  );
}

export default LocationItem;
