import React from 'react'
import { makeStyles, Container, Grid, Typography } from '@material-ui/core'

import { ProductCard } from './'
import { useState } from 'react';
import { useEffect } from 'react';

export function CardsGrid() {

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(2),
    }
  }));

  const classes = useStyles();

  const [carsInfo, setCarsInfo] = useState([]);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3001/api/v1/cars");

      res
        .json()
        .then(res => {
          const data = res;
          console.log(data);
          setCarsInfo(data);
        })
        .catch(err => {
          console.log(err);
          setFetchError(true);
        });
    }

    fetchData();

  }, []);

  return (
    <React.Fragment>
      {fetchError
        ? (<Container>
          <Typography>Error : (</Typography>
        </Container>)
        : (<Container className={classes.root} maxWidth="md">
          <Grid container spacing={3}>
            {carsInfo.map((data, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ProductCard {...data} />
              </Grid>
            ))}
          </Grid>
        </Container>)
      }
    </React.Fragment >
  )
}