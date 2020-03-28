// import image from "../images/movieHouse.png";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default ({ good, onAddToCart, user, onDeleteGood }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {good.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {good.description}
          </Typography>
          <Typography variant="h3" component="h4">
            {good.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {user.username !== null ? (
          <div>
            <Button size="small" color="primary">
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => onDeleteGood(good.id)}
            >
              Delete
            </Button>
          </div>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={e => onAddToCart(e, good)}
          >
            Add to cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
