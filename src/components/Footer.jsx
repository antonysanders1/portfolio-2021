import React from 'react';
import {Grid, Typography, Button, Tooltip} from '@material-ui/core';
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
    iconsHeader: {
      display:'flex',
      justifyContent:'center'
    },
    iconsWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height:'inherit'
    },
    socialIcon: {
      height: 30,
      width: 30,
      filter: `opacity(0.8)`,
      '&:hover': {
          height: 50,
          width: 50,
          cursor: 'pointer',
          opacity: 1,
          filter: `drop-shadow(2px 4px 6px ${theme.palette.primary.dark})`
      },
  },
    
  }));

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.root}>
          <Grid container item xs={12} className={classes.iconsHeader}>
                <Grid xs={8} sm={6} md={4} lg={3} className={classes.iconsWrapper}>
                    <Tooltip title="LinkedIn">
                        <img className={classes.socialIcon} src='/images/linkedIn-wht.png' alt=''
                            onClick={()=> window.open('https://www.linkedin.com/in/antonysanders/')}/>
                    </Tooltip>
                    <Tooltip title="Twitter">
                        <img className={classes.socialIcon} src='/images/twitter-wht.png' alt=''
                            onClick={()=> window.open('https://twitter.com/AntonySanders_')}/>
                    </Tooltip>
                    <Tooltip title="Github">
                        <img className={classes.socialIcon} src='/images/github-wht.png' alt=''
                            onClick={()=> window.open('https://github.com/antonysanders1')}/>
                    </Tooltip>
                    <Tooltip title="Resume">
                        <img className={classes.socialIcon} src='/images/resume-wht.png' alt=''
                            onClick={()=> window.open('https://drive.google.com/file/d/13gmbfkda-Nbkz9GYVnUrwwZ_gpn8RPeb/view?usp=sharing')}/>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Footer

