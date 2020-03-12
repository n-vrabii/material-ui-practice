import React, { useState } from 'react'
import { Paper, Grid, FormLabel, FormControl, Typography, Container, Button, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { filterCriteria, inputTypes } from '../../constants'
import { FilterCriterion } from './'

import FilterList from '@material-ui/icons/FilterList'

export function CardsFilter() {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(2),
      borderRadius: 0,
    },
    filterHeader: {
      paddingBottom: theme.spacing(2),
      borderBottom: '1px solid #eee'
    },
    filterBody: {
      display: 'flex',
      flexGrow: 1,
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      '& > *:not(:last-child)': {
        marginRight: theme.spacing(4),
      }
    },
    filterButton: {
      textAlign: 'right',
    }
  }));

  const classes = useStyles();

  const [filterIsCollapsed, setFilterIsCollapsed] = useState(false);

  const [state, setState] = useState({ info: "Placeholder" });

  function handleFormControlChange({ parent, type, name } = {}) {
    if (type === inputTypes.CHECKBOX) {
      return (e) => setState({ ...state, [parent]: { ...state[parent], [name]: e.target.checked } })
    }
    return (e) => setState({ ...state, [e.target.name]: e.target.value });
  }

  return (<React.Fragment>
    <Paper className={classes.root}>
      <Container className={classes.filterHeader} maxWidth="md">
        <Grid container>
          <Grid item xs>

          </Grid>
          <Grid item xs className={classes.filterButton}>
            <Button
              color="secondary"
              aria-label="filter list"
              startIcon={<FilterList />}
              onClick={() => setFilterIsCollapsed(!filterIsCollapsed)}>
              Filter
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Collapse in={filterIsCollapsed}>
        <Container className={classes.filterBody} maxWidth="md">
          {filterCriteria.map((el, index) => {
            return (
              <FormControl className={classes.filterCategory} key={index}>
                <FormLabel component="legend">
                  <Typography variant="body2">{el.name}</Typography>
                </FormLabel>
                <FilterCriterion data={el} handleChange={handleFormControlChange} />
              </FormControl>
            )
          })}
        </Container>
      </Collapse>

    </Paper>
  </React.Fragment>)
}