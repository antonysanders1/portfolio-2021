import React, {useState} from 'react';
import {Grid, Typography, Button, Modal, Tooltip} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: "inherit",
      minHeight: '100vh',
      background: `linear-gradient(-180deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
      overflow: 'hidden'
    },
    backgroundPattern: {
      position:'absolute',
      width:'120%',
      top: -20,
      transform: 'rotate(180deg)',
      opacity: .4
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
titleWrapper: {
  marginTop: 20,
  border: `8px solid ${theme.palette.primary.light}`,
  padding: 8,
  textAlign:'center',
  width:'fit-content',
  height: 'fit-content',
},
title: {
  fontSize: 40,
  color: `white`,
  fontWeight: 'bold',
  
},
img: {
  width: '100%',
  borderRadius: 8,
  "&:hover": {
    cursor: 'pointer',
    opacity: .8
  },
},
project: {
  backgroundColor: 'rgba(0, 0, 0, 0.0)',
  textAlign:'center',
  borderRadius: 8,
  padding: 10,
  height:'100%',
  "&:hover":{
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    boxShadow: theme.shadows[4]
  }
},
skillBox: {
  flex:'0 1 auto',
  border: `3px solid ${theme.palette.primary.light}`,
  background:`${theme.palette.primary.dark}`,
  width:'fit-content',
  padding: 4,
  margin: 4
},
vLBtn: {
  width:'40%',
  background: 'white',
  color: theme.palette.secondary.main
},
sCBtn: {
  width:'40%',
  background: theme.palette.primary.light,
  color:'white'
}
    
  }));

const Projects = ({projects}) => {
    const classes = useStyles()
    const [isVideoShowing, setShowVideo] = useState(false)
    const [openedProject, setProject] = useState(null)

    const handleShowVideo = () => {
      setShowVideo(!isVideoShowing)  
      console.log(isVideoShowing)
    }
    const handleClose = () => {
      setShowVideo(!isVideoShowing)  
      
    }
    
    
    return (
      <Grid container item xs={12} className={classes.root}>
          <img src='/images/background-line-pattern.png' className={classes.backgroundPattern} />

          <Grid item xs={12} style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
            <Grid data-aos="flip-up" className={classes.titleWrapper} style={{marginTop:100, marginBottom:20}}>
              <Typography className={classes.title}>Portfolio Projects</Typography>
              
            </Grid>
          </Grid>

          <Grid container item xs={12} style={{marginBottom: '130px'}}>
            {projects && projects.map((project, idx) => {
              const {img,title, description, note, langEnvSoft, sourceCode, url, videoURL, team, collaborators} = project
              return(
                <Grid data-aos="fade-up"
                data-aos-delay={idx*100}
                item xs={12} sm={6} md={4} xl={3} style={{textAlign:'center', padding: 40}}>
                  <Grid item xs={12} className={classes.project}>
                    <Typography style={{fontSize:20, fontWeight: 'bold', color:'white', marginBottom: 10}}>{title}</Typography>
                    {videoURL !== '' ?
                      <Tooltip title={'View demo: ' + title}>
                        <img src={img} alt={title} className={classes.img} onClick={()=> window.open(videoURL)}/>
                      </Tooltip>
                    :
                        <img src={img} alt={title} className={classes.img}/>
                    }
                    
                    <Grid container item xs={12} style={{display: 'flex', }}>
                      {langEnvSoft.map(skill=> {
                        return(
                          <Grid item className={classes.skillBox}>
                            <Typography style={{color: 'white'}}>{skill}</Typography>
                          </Grid>
                        )
                      })}

                    </Grid>
                    <Typography style={{fontWeight: 'bold'}}>{team}{
                      team === 'Collaboration' && <span>: <span style={{fontWeight: 'normal'}}> {collaborators}</span></span>
                    }</Typography>
                    <Typography style={{color:'white'}}>{description}</Typography> 
                    <Typography style={{fontStyle:'italic', color:'white', marginTop:15}}>{note}</Typography>
                    <Grid container item xs={12} style={{display:'flex', justifyContent:'space-evenly', padding: 8, marginTop: 10}}>
                      {url !== '' ? 
                        <Button variant="contained" className={classes.vLBtn} onClick={() => window.open(url)}>View Live</Button>
                      :
                        <Button variant="contained" className={classes.vLBtn} disabled>View Live</Button>
                      }
                      {sourceCode !== '' ?
                        <Button variant="contained" className={classes.sCBtn} onClick={() => window.open(sourceCode)} >Source Code</Button>
                      :
                        <Button variant="contained" className={classes.sCBtn} disabled>Source Code</Button>
                      }

                    </Grid>
                  </Grid>

                </Grid>
              )
            })}
            
          </Grid>



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

