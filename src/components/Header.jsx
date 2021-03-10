import React, {useEffect} from 'react';
import {Grid, Typography, Button, Tooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
        position:'relative',
        padding: '2px 4px',
        display: 'flex',
        flexFlow: 'column',
        width: "inherit",
        height: '100vh',
        backgroundSize: '300% 300%',
        background: `linear-gradient(-45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
        animation: `$gradientRotate 10s ease infinite`,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    backgroundPattern: {
        position:'absolute',
        width:'2000px',
        top: 80,
        animation: `$background 3s ease`,
    },
    backgroundShapes1: {
        position: 'absolute',
        animation: `$shapesFromRight 3s ease`,
    },
    backgroundShapes2: {
        position: 'absolute',
        animation: `$shapesFromLeft 4s ease`,
    },
    backgroundShapes3: {
        position: 'absolute',
        animation: `$shapesFromTop 5s ease`,
    },
    backgroundShapes4: {
        position: 'absolute',
        animation: `$shapesFromCurveTop 3s ease-in`,
    },
    iconsHeader: {
        flex: '0 1 80px'
    },
    iconsWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
    contentWrapper: {
        flex: '1 0 auto',
        display: 'flex',
        overflow: 'hidden',
    },
    paintSplash:{
         position:'absolute',
         bottom: 0,
         left: "-10%",
         height: '85%'
    },
    antony: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '80%'
    },
    borderBottom:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        animation: `$wave 8s ease`,
    },
    textBox: {
        animation: `$shapesFromLeft 4s ease`,
    },
    headerText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 'calc(20px + 2vw)',
        textAlign: 'right',
        textTransform: 'uppercase',
        lineHeight: 1,
        filter: `drop-shadow(2px 4px 6px ${theme.palette.primary.dark})`
    },
    highlightedText: {
        color: theme.palette.primary.light
    },
    "@keyframes gradientRotate": {
        "0%": {
          backgroundPosition: '47% 0%',

        },
        "50%": {
            backgroundPosition: '54% 100%',
          },
        "100%": {
            backgroundPosition: '47% 0%',
        }
      },
    "@keyframes wave": {
        "0%": {
          transform: "translateX(-30%)"
        },
        
        "100%": {
          transform: "translateX(0)"
        },
      },
    "@keyframes shapesFromRight": {
        "0%": {
          transform: "translateX(-300%)",
          opacity: 0
        },
        
        "100%": {
          transform: "translateX(0)",
          opacity: 1
        }
      },
    "@keyframes shapesFromLeft": {
        "0%": {
          transform: "translateX(300%)",
          opacity: 0
        },
        
        "100%": {
          transform: "translateX(0)",
          opacity: 1
        }
      },
    "@keyframes shapesFromTop": {
        "0%": {
          transform: "translateY(-300%)",
          opacity: 0
        },
        
        "100%": {
          transform: "translateY(0)",
          opacity: 1
        }
      },
    "@keyframes shapesFromCurveTop": {
        "0%": {
            transform: "translate(300%, -300%)",
            opacity: 0
        },
        "100%": {
          transform: "translate(0)",
          opacity: 1
        }
      },
    "@keyframes background": {
        "0%": {
            opacity: 0
        },
        "100%": {
          opacity: .8
        }
      },
    
  }));

const Header = () => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <Grid container item xs={12} className={classes.root}>
            <img src='/images/background-line-pattern.png' className={classes.backgroundPattern} />
            <img data-aos="zoom-out" src='/images/circle.png' className={classes.backgroundShapes4} style={{right:'15%', top:'15%', width: '60px'}} />
            <img data-aos="zoom-out" src='/images/red-arrows.png' className={classes.backgroundShapes1} style={{left:'40%', top:'50%', width: '60px'}} />
            <img data-aos="zoom-out" src='/images/red-squiggle.png' className={classes.backgroundShapes1} style={{left:'-10px', top: 160, height:'3vh'}} />
            <img data-aos="zoom-out" src='/images/yellow-lines-horz.png' className={classes.backgroundShapes2} style={{right:'0%', bottom:'20%', width: '20vh'}} />
            <img data-aos="zoom-out" src='/images/yellow-lines-vert.png' className={classes.backgroundShapes3} style={{left: '12%', top: 0, height: '20vh'}} />
            
            <Grid container item xs={12} className={classes.iconsHeader}>
                <Grid xs={4} sm={6} md={8} lg={9} xl={10}></Grid>
                <Grid xs={8} sm={6} md={4} lg={3} xl={2} className={classes.iconsWrapper}>
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
            <Grid container item xs={12} className={classes.contentWrapper}>
                <Grid style={{position:'relative'}} xs={12}>
                    <img className={classes.paintSplash} src="/images/paint-splash.png" alt=""/>
                    <img className={classes.antony} src="/images/antony.png" alt=""/>
                </Grid>
            </Grid>

            <Grid container item xs={12} style={{position: 'absolute', justifyContent:'flex-end', alignItems:'center', padding: 60}}>
                <div className={classes.textBox} style={{backgroundColor:'rgba(0, 0, 0, 0.75)', padding: 10,}}>
                    <Typography className={classes.headerText}>Hey, I'm <span className={classes.highlightedText}>Antony Sanders...</span>
                            <br/>
                            <span style={{fontSize:'calc(20px + 2.5vw)', minWidth:''}}>
                                <span className={classes.highlightedText}>& </span>
                                    I Develop Software.
                                </span>
                    </Typography>

                </div>
            </Grid>

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

export default Header
