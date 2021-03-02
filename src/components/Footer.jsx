import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "inherit",
      height: '200px',
      background: `black`,
    },
    
  }));

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.root}>

        </Grid>
    )
}

export default Footer

