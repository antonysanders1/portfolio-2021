import React from 'react';
import {Grid, Typography, Button, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    root: {
      position:'relative',
      padding: '2px 4px',
      display: 'flex',
      flexFlow:'column',
      justifyContent:'center',
      alignItems: 'center',
      width: "inherit",
      minHeight: '700px',
      background: `linear-gradient(0deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      overflow: 'hidden'
    },
    backgroundPattern: {
      position:'absolute',
      width:'2000px',
      top: 180,
      opacity: .4
  },
    titleWrapper: {
      marginTop: 20,
      border: `8px solid ${theme.palette.secondary.main}`,
      padding: 8,
      textAlign:'center',
      width:'fit-content',
      height: 'fit-content',
    },
    title: {
      fontSize: 40,
      color: `white`,
      fontWeight: 'bold'
    },
    field: {
     background: 'white',
    }
    
  }));

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_00u7izb', 'template_8t50hyg', e.target, 'user_xEcAtSguNdprM7u7zof4z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  }

const Contact = () => {
    const classes = useStyles()
    return (
        <Grid container item xs={12} className={classes.root}>

          <img src='/images/background-line-pattern.png' className={classes.backgroundPattern} />

          <Grid item xs={12} style={{flex: '0 1 180px',display: 'flex', justifyContent:'center', alignItems:'center'}}>
              <Grid data-aos="flip-down" className={classes.titleWrapper} style={{marginBottom:20}}>
                  <Typography className={classes.title}>Let's Connect</Typography>
            
              </Grid>
          </Grid>

          <Grid container item xs={10} sm={8} md={6} lg={4}>
            <form  onSubmit={sendEmail} style={{width:'inherit'}}>
              <Grid data-aos="fade-up" data-aos-delay="500" container item xs={12}>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <TextField
                  className={classes.field}
                  variant='outlined' 
                  fullWidth
                  type='text'
                  placeholder='Name'
                  name='name'/>
                </Grid>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <TextField
                  className={classes.field}
                  variant='outlined' 
                  fullWidth
                  type='email'
                  placeholder='Email Address'
                  name=''/>
                </Grid>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <TextField
                  className={classes.field}
                  variant='outlined' 
                  fullWidth
                  type='text'
                  placeholder='Subject'
                  name='subject'/>
                </Grid>
                <Grid item xs={12} style={{marginBottom:10}}>
                  <TextField
                  className={classes.field}
                  variant='outlined' 
                  fullWidth
                  multiline
                  rows={6}
                  type='text'
                  placeholder='Message..'
                  name='message'/>
                </Grid>
                <Grid item xs={12} style={{marginBottom:10, display:'flex', justifyContent:'center'}}>
                  <Button type='submit' color='primary' variant='contained' style={{width:160}}>Send</Button>
                </Grid>
              </Grid>
            </form>
          </Grid>


        </Grid>
    )
}

export default Contact

