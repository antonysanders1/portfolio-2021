import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "inherit",
      height: '100vh',
      background: `linear-gradient(-180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      overflow: 'hidden'
    },
    borderTop:{
      position: 'absolute',
      top: -40,
      right: '-20%',
      transform: 'rotate(180deg)'
  },
  borderBottom:{
    position: 'absolute',
    bottom: -15,
    right: '50%',
    transform: 'scale(2)'
},
    
  }));

const Projects = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.root}>



            <svg className={classes.borderTop} id="Component_1_1" data-name="Component 1 – 1"
              xmlns="http://www.w3.org/2000/svg" width="2748.129" height="124.929"
              viewBox="0 0 2748.129 124.929">
                <path id="Path_2" data-name="Path 2" 
                    d="M0,968.991s324.254,131.964,897.353,22.622,1021.776,29.462,1021.776,29.462v53.487H0Z"
                    transform="translate(0 -949.633)" fill="#fff"/>
                <path id="Path_3" data-name="Path 3" 
                    d="M1919.129,968.991s-324.254,131.964-897.353,22.622S0,1021.075,0,1021.075v53.487H1919.129Z"
                    transform="translate(829 -949.633)" fill="#fff"/>
            </svg>
            <svg className={classes.borderBottom} id="Component_1_1" data-name="Component 1 – 1"
              xmlns="http://www.w3.org/2000/svg" width="2748.129" height="124.929"
              viewBox="0 0 2748.129 124.929">
                <path id="Path_2" data-name="Path 2" 
                    d="M0,968.991s324.254,131.964,897.353,22.622,1021.776,29.462,1021.776,29.462v53.487H0Z"
                    transform="translate(0 -949.633)" fill="#fff"/>
                <path id="Path_3" data-name="Path 3" 
                    d="M1919.129,968.991s-324.254,131.964-897.353,22.622S0,1021.075,0,1021.075v53.487H1919.129Z"
                    transform="translate(829 -949.633)" fill="#fff"/>
            </svg>
        </Grid>
    )
}

export default Projects

