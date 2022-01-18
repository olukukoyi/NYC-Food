import LocationItem from "./LocationItem";
import classes from "./LocationsList.module.css";

function LocationsList(props) {
  return (
    <ul className={classes.list}>
      {props.locations.map((location) => (
        <LocationItem
          key={location.key}
          id={location.id}
          image={location.image}
          title={location.title}
          address={location.address}
          description={location.description}
        />
      ))}
    </ul>
  );
}

export default LocationsList;
