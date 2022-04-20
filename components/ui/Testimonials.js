import React from "react";
import classes from "./Testimonials.module.css";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Container,
  Grid,
  Typography,
  Avatar,
  CardMedia,
} from "@material-ui/core";
import CheckIcon from "@mui/icons-material/Check";
import { red } from "@mui/material/colors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    marginTop: 220,
  },
});

function Testimonials({ usersList }) {
  const cl = useStyles();

  return (
    <Container>
      <Grid container spacing={3} className={cl.container}>
        {usersList.map((user) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <Card elevation={6}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }}>
                    {user.name.slice(0, 1)}
                  </Avatar>
                }
                action={
                  <IconButton style={{ backgroundColor: "transparent" }}>
                    <CheckIcon />
                  </IconButton>
                }
                title={user.name}
                subheader="4/2/22"
              />
              <CardMedia
                component="img"
                height="194"
                image="https://static01.nyt.com/images/2022/03/30/dining/25Appe-promo/merlin_202627353_46e605bd-d594-4eeb-9abe-356d9c2fce73-threeByTwoMediumAt2X.jpg"
              />
              <CardContent>
                <Typography variant="body2">
                  Look what I had today at the Africa Kine. If you are not using
                  @NycFood to pick your brunch, you are doing it wrong!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

<Card elevation={6}>
  <CardHeader
    avatar={<Avatar sx={{ bgcolor: "red" }}> A</Avatar>}
    action={
      <IconButton style={{ backgroundColor: "transparent" }}>
        <CheckIcon />
      </IconButton>
    }
    title="FoodSpot"
    subheader="date"
  />
  <CardMedia
    component="img"
    height="194"
    image="https://static01.nyt.com/images/2022/03/30/dining/25Appe-promo/merlin_202627353_46e605bd-d594-4eeb-9abe-356d9c2fce73-threeByTwoMediumAt2X.jpg"
  />
  <CardContent>
    <Typography variant="body2"> Dumy text</Typography>
  </CardContent>
</Card>;

export default Testimonials;
