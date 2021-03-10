import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Grid, Typography, Button, Hidden, withWidth} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      flexFlow: 'column',
      width: "inherit",
      height: '100vh',
      background: `white`,
      justifyContent: 'center',
      overflow: 'hidden'
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
    titleWrapper: {
        marginTop: 20,
        border: `8px solid ${theme.palette.primary.dark}`,
        padding: 8,
        textAlign:'center',
        width:'fit-content',
        height: 'fit-content',
      },
      title: {
        fontSize: 40,
        color: ` ${theme.palette.primary.main}`,
        fontWeight: 'bold'
      },
    highlightedText: {
        color: theme.palette.primary.light
     },
     bioWrapper: {
        borderRadius:'8px', 
        minHeight:'fit-content',
        marginBottom:40 ,
        padding:40, 
        borderBottom: `10px solid ${theme.palette.secondary.main}`, 
        borderRight: `10px solid ${theme.palette.secondary.main}`,
     },
    
  }));

    const About = ({width, bio}) => {
        const classes = useStyles()
        
        const Header = () => {
            const classes = useStyles();
        
            useEffect(() => {
                Aos.init();
            }, [])
        }


    return (
        <Grid container item xs={12} className={classes.root}>

            <Grid item xs={12} style={{flex: '0 1 180px',display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid data-aos="flip-left" className={classes.titleWrapper} style={{marginBottom:20}}>
                    <Typography className={classes.title}>My Story</Typography>
              
                </Grid>
            </Grid>

            <Grid container item xs={12} style={{position:'relative', flex:'1 0 auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Grid data-aos="fade-right" data-aos-delay="300" item xs={10} sm={8} md={6} lg={4} className={classes.bioWrapper}>
                    {bio.map((p, idx) => {
                        return(
                        <Grid item xs={12} style={{marginBottom:20}}>
                            <Typography>{p}</Typography>
                        </Grid>
                        )
                    })}
                </Grid>
                <Hidden mdDown>
                    {width === 'lg' ? 
                    <img data-aos="fade-left" data-aos-delay="500" src="/images/antony-2.png" alt="antony" style={{height: '80%', position:'absolute', right: '22%', bottom: -7}}/>
                    :
                    <img data-aos="fade-left" data-aos-delay="500" src="/images/antony-2.png" alt="antony" style={{height: '80%', position:'absolute', right: '23%', bottom: -7}}/>
                    
                    }
                </Hidden>
            </Grid>

            
         </Grid>
    )
}

About.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default withWidth()(About)
