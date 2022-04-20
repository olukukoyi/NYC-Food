import classes from "./Form.module.css";
import { useRef } from "react";
import Card from "./Card";
import {
  Button,
  Container,
  TextField,
  Input,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { shadows } from "@mui/system";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
  cont: {
    height: "100vh",
    marginTop: 200,
  },
  btn: {
    backgroundColor: "white",
    color: "black",
  },
  formclass: {
    // backgroundColor: "red",
    padding: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

function Form(props) {
  const locationInput = useRef();
  const imageInput = useRef();
  const addressInput = useRef();
  const descriptionInput = useRef();
  const cl = useStyles();

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
    <Container className={cl.cont}>
      {/* <Box
        sx={{ boxShadow: 10 }}
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={cl.formclass}
      >
        <h2 style={{ color: "white" }}>Add a Location</h2>

        <FormControl variant="outlined" fullWidth className={cl.field}>
          <InputLabel htmlFor="title">Location</InputLabel>
          <Input type="text" required id="title" ref={locationInput} />
        </FormControl>

        <FormControl variant="outlined" fullWidth className={cl.field}>
          <InputLabel htmlFor="image">Location Image</InputLabel>
          <Input type="url" required id="image" ref={imageInput} />
        </FormControl>

        <FormControl variant="outlined" fullWidth className={cl.field}>
          <InputLabel htmlFor="address">Address</InputLabel>
          <Input type="text" required id="address" ref={addressInput} />
        </FormControl>
        <FormControl variant="outlined" fullWidth className={cl.field}>
          <InputLabel htmlFor="description">Locations Description</InputLabel>
          <Input type="text" required id="description" ref={descriptionInput} />
        </FormControl>

        <TextField
          component="input"
          label="Location"
          variant="standard"
          fullWidth
          className={cl.field}
          type="text"
          required
          id="title"
          ref={locationInput}
        />
        <TextField
          component="input"
          label="Location Image"
          variant="standard"
          fullWidth
          required
          className={cl.field}
          ref={imageInput}
          id="image"
          type="url"
        />
        <TextField
          component="input"
          label="Address"
          variant="standard"
          fullWidth
          required
          className={cl.field}
          type="text"
          id="address"
          ref={addressInput}
        />
        <TextField
          component="input"
          label="Location Description"
          variant="standard"
          fullWidth
          required
          className={cl.field}
          multiline
          rows={5}
          ref={descriptionInput}
          id="description"
        /> */}

      <form className={classes.form} onSubmit={handleSubmit}>
        <h1>Add a Location</h1>
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
          {/* <button onClick={handleSubmit}>Add Location</button> */}
          <Button className={cl.btn} variant="standard" onClick={handleSubmit}>
            Add Location
          </Button>
        </div>
      </form>

      {/* </Box> */}
    </Container>

    // <form className={classes.form} onSubmit={handleSubmit}>
    //   <h1>Add a Location</h1>
    //   <div className={classes.control}>
    //     <label htmlFor="title">Location </label>
    //     <input type="text" required id="title" ref={locationInput} />
    //   </div>
    //   <div className={classes.control}>
    //     <label htmlFor="image">Location Image</label>
    //     <input type="url" required id="image" ref={imageInput} />
    //   </div>
    //   <div className={classes.control}>
    //     <label htmlFor="address">Address</label>
    //     <input type="text" required id="address" ref={addressInput} />
    //   </div>
    //   <div className={classes.control}>
    //     <label htmlFor="description">Locations Description</label>
    //     <textarea
    //       id="description"
    //       required
    //       rows="5"
    //       ref={descriptionInput}
    //     ></textarea>
    //   </div>
    //   <div className={classes.actions}>
    //     <button onClick={handleSubmit}>Add Location</button>
    //   </div>
    // </form>
  );
}

export default Form;
