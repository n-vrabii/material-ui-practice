import React from 'react'
import { Paper, Grid, FormGroup, FormControlLabel, Checkbox, FormLabel, FormControl, Typography, Select, MenuItem, Container, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FilterList from '@material-ui/icons/FilterList'

export function CardsFilter() {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      borderRadius: 0,
    },
    filterHeader: {
      marginBottom: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      borderBottom: '1px solid #eee'
    },
    filterBody: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-start',
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(4),
      }
    },
    filterButton: {
      textAlign: 'right',
    }
  }));

  const classes = useStyles();

  return (<React.Fragment>
    <Paper className={classes.root}>
      <Container className={classes.filterHeader}>
        <Grid container>
          <Grid item xs>
            <Typography variant="h6">
              Filter
          </Typography>
          </Grid>
          <Grid item xs className={classes.filterButton}>
            <Button color="secondary" aria-label="filter list" startIcon={<FilterList />}>
              Filter
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.filterBody}>

        <FormControl className={classes.filterCategory}>
          <FormLabel component="legend">
            <Typography variant="body2">Category A</Typography>
          </FormLabel>

          <FormGroup name="categoryA">
            <FormControlLabel value="A" control={<Checkbox />} label="A" />
            <FormControlLabel value="B" control={<Checkbox />} label="B" />
            <FormControlLabel value="C" control={<Checkbox />} label="C" />
          </FormGroup>
        </FormControl>

        <FormControl className={classes.filterCategory}>
          <FormLabel component="legend">
            <Typography variant="body2">Category B</Typography>
          </FormLabel>

          <FormGroup name="categoryB">
            <FormControlLabel value="A" control={<Checkbox />} label="A" />
            <FormControlLabel value="B" control={<Checkbox />} label="B" />
            <FormControlLabel value="C" control={<Checkbox />} label="C" />
          </FormGroup>
        </FormControl>

        <FormControl>
          <FormLabel component="legend">
            <Typography variant="body2">Category C</Typography>
          </FormLabel>

          <Select name="categoryC" value={'all'}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="0">Label 0</MenuItem>
            <MenuItem value="1">Label 1</MenuItem>
            <MenuItem value="2">Label 2</MenuItem>
          </Select>
        </FormControl>

      </Container>
    </Paper>
  </React.Fragment>)
}