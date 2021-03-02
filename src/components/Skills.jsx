import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "inherit",
      height: '100vh',
      backgroundSize: '300% 300%',
      background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
    },   
  }));

const Skills = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} className={classes.root}>

        </Grid>
    )
}

export default Skills

