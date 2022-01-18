import LocationsList from "../../components/LocationComponents/LocationsList";
import { MongoClient } from "mongodb";

function ContentPage(props) {
  // ^^^^ props will be recieved in getStaticProps

  return (
    <div>
      <LocationsList locations={props.locations} />
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from an api
  const client = await MongoClient.connect(
    "mongodb+srv://oluadmin:weruletheworld12345@cluster0.wmw83.mongodb.net/FoodLocations?retryWrites=true&w=majority"
  );

  const db = client.db();
  const locationCollection = db.collection("locations"); // created collection on the fly, collections are objects
  const locations = await locationCollection.find().toArray(); // finds a collection, turns to array

  client.close();

  return {
    props: {
      locations: locations.map((location) => ({
        // maps through the array , deconstructs it and retu
        title: location.title,
        address: location.address,
        image: location.image,
        id: location._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default ContentPage;
