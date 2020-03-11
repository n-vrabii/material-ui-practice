import React from 'react'
import { makeStyles, Container, Grid } from '@material-ui/core'

import { ProductCard } from './'

export function CardsGrid() {

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(2),
    }
  }));

  const classes = useStyles();

  const cardsInfo = [
    {
      id: 0,
      model: 'Prius',
      brand: 'Toyota',
      year: 2019,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-toyota-prius-limited-1545163015.jpg'
    },
    {
      id: 1,
      model: 'Camry',
      brand: 'Toyota',
      year: 2019,
      img: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2018-toyota-camry-mmp-1544816921.jpg'
    },
    {
      id: 2,
      model: 'Corolla',
      brand: 'Toyota',
      year: 2019,
      img: 'https://static.bangkokpost.com/media/content/20191002/3351694.jpg'
    },
    {
      id: 3,
      model: 'Supra',
      brand: 'Toyota',
      year: 2019,
      img: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/58b/48d7216d1dc8ce7f-main.jpg'
    },
  ];

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="md">
        <Grid container spacing={3}>
          {cardsInfo.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ProductCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  )
}