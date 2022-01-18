import LocationsList from "../../components/LocationComponents/LocationsList";
import { MongoClient } from "mongodb";

// const locationsArray = [
//   {
//     id: "m1",
//     image:
//       "https://i.guim.co.uk/img/media/4a29dde46c17e8a07f98e4e5947d49964d074923/0_348_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=88c75e6319ec9d3588bb6e17ae92ff68",
//     title: "1",
//     address: "Location 111",
//     description: "Description 111",
//   },
//   {
//     id: "m2",
//     image:
//       "https://i.guim.co.uk/img/media/4a29dde46c17e8a07f98e4e5947d49964d074923/0_348_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=88c75e6319ec9d3588bb6e17ae92ff68",
//     title: "2",
//     address: "Location 222",
//     description: "Description 222",
//   },
//   {
//     id: "m3",
//     image:
//       "https://i.guim.co.uk/img/media/4a29dde46c17e8a07f98e4e5947d49964d074923/0_348_6000_3600/master/6000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=88c75e6319ec9d3588bb6e17ae92ff68",
//     title: "3",
//     address: "Location 333",
//     description: "Description 333",
//   },
// ];

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
