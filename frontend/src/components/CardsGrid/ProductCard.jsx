import React from 'react'

import { makeStyles, Typography, Card, Button, CardMedia, CardContent, CardActions } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  }
}));


export function ProductCard(props) {

  const { id, model, brand, year, img } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root} key={id}>
      <CardMedia
        className={classes.media}
        image={img}
        title={`${brand} ${model}, ${year}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${brand} ${model}, ${year}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary">Details</Button>
      </CardActions>
    </Card>
  )
}