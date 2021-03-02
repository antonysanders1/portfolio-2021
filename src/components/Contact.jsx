import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "inherit",
      minHeight: '700px',
      background: `linear-gradient(0deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      overflow: 'hidden'
    },
    
  }));

const Contact = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.root}>

        </Grid>
    )
}

export default Contact

