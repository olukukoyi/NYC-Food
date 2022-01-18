import classes from "./Form.module.css";
import { useRef } from "react";
import Card from "./Card";

function Form(props) {
  const locationInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const enteredTitle = locationInput.current.value;
    const enteredImage = imageInput.current.value;
    const enteredAddress = addressInput.current.value;
    const enteredDescription = descriptionInput.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    // console.log(meetupData);
    props.addMeetup(meetupData); // forum-page/index.js
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.control}>
          <label htmlFor="title">Location </label>
          <input type="text" required id="title" ref={locationInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Location Image</label>
          <input type="url" required id="image" ref={imageInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Locations Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInput}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={handleSubmit}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default Form;
