// import { useRouter } from "next/router";
import LocationDetails from "../../components/LocationComponents/LocationDetails";
import { MongoClient, ObjectId } from "mongodb";

function DetailPage(props) {
  // const router = useRouter();
  // router.query.locationId;

  return (
    <LocationDetails
      image={props.locationData.image}
      title={props.locationData.title}
      address={props.locationData.address}
      description={props.locationData.description}
    />
  );
}

export async function getStaticPaths() {
  // pregenerates paths during the build process

  const client = await MongoClient.connect(
    "mongodb+srv://oluadmin:weruletheworld12345@cluster0.wmw83.mongodb.net/FoodLocations?retryWrites=true&w=majority"
  );

  const db = client.db();
  const locationCollection = db.collection("locations"); // created collection on the fly, collections are objects

  const locations = await locationCollection.find({}, { _id: 1 }).toArray(); // .find() gives access to all the locations
  client.close();
  return {
    fallback: "blocking",
    paths: locations.map((location) => ({
      params: { locationId: location._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const locationId = context.params.locationId;
  const client = await MongoClient.connect(
    "mongodb+srv://oluadmin:weruletheworld12345@cluster0.wmw83.mongodb.net/FoodLocations?retryWrites=true&w=majority"
  );

  const db = client.db();
  const locationCollection = db.collection("locations"); // created collection on the fly, collections are objects

  const selectedLocation = await locationCollection.findOne({
    _id: ObjectId(locationId),
  }); // finds one single document

  client.close();

  return {
    props: {
      locationData: {
        id: selectedLocation._id.toString(),
        title: selectedLocation.title,
        address: selectedLocation.address,
        image: selectedLocation.image,
        description: selectedLocation.description,
      },
    },
  };
}

export default DetailPage;
