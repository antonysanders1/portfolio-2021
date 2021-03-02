import React, {useEffect} from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      width: "inherit",
      minHeight: '700px',
      background: `white`,
      justifyContent: 'center'
    },
    headerText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'calc(20px + 3vw)',
        //textAlign: 'right',
        textTransform: 'uppercase',
        lineHeight: 1,
        //filter: `drop-shadow(2px 4px 6px ${theme.palette.primary.dark})`
    },
    highlightedText: {
        color: theme.palette.primary.light
    },
    
  }));

const About = () => {
    const classes = useStyles()
    
    const Header = () => {
        const classes = useStyles();
    
        useEffect(() => {
            Aos.init();
        }, [])
    }


    return (
        <Grid container item xs={12} className={classes.root}>
            <Grid item xs={2}></Grid>
            <Grid container item md={5} direction='column' style={{display: 'flex', flexFlow:'column', textAlign:'right', justifyContent:'center', alignItems:'center', padding: '50px 0'}}>
                <div data-aos="fade-up" data-aos-duration="1500" style={{flex:'0 1 80px', background:'black', padding: 8, width: 'inherit'}}>
                    <Typography  className={classes.headerText}><span className={classes.highlightedText}>My </span>Story.</Typography>
                </div>
                <div style={{flex:'1 0 auto', borderRight: '10px solid #f9d22d', borderBottom: '10px solid #f9d22d', width: 'inherit'}}>

                </div>

            </Grid>
            <Grid item style={{postion: 'relative', }} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" md={4}>
                <img style={{position: 'absolute', bottom:-2, left: -15, height: '90%'}} src='/images/antony-2.png'/>
            </Grid>
         </Grid>
    )
}

export default About
