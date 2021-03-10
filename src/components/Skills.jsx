import React, {useEffect} from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Aos from 'aos';
import 'aos/dist/aos.css';
//import {frameworks, languages, software} from './data'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      width: "inherit",
      minHeight: '60vh',
      background: `white`,
    },
    titleWrapper: {
      marginTop: 20,
      border: `8px solid ${theme.palette.error.main}`,
      padding: 8,
      textAlign:'center',
      width:'fit-content',
      height: 'fit-content',
    },
    title: {
      fontSize: 40,
      color: ` ${theme.palette.error.main}`,
      fontWeight: 'bold'
    },
    skillsTitle: {
      fontWeight: 'bold',
      margin: '20px 0',
    },

  }));

const Skills = ({software, frameworks, languages}) => {
    const classes = useStyles();
    const softwareSorted = software.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    const frameworksSorted = frameworks.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    const languagesSorted = languages.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    
    const Header = () => {
      const classes = useStyles();
  
      useEffect(() => {
          Aos.init();
        }, [])
      }
      
    return (
        <Grid container item xs={12} className={classes.root}>
          <Grid container item xs={12} style={{flex:'0 1 200px', display:'flex', justifyContent: 'center', alignItmens:'center', height:'fit-content'}}>
            <Grid item data-aos="flip-left" className={classes.titleWrapper}>
              <Typography className={classes.title}>
                Technical Skills
              </Typography>
            </Grid>
          </Grid>

          <Grid container item xs={12} style={{flex:'1 0 auto'}}>
            <Grid item sm={1} md={2} lg={1} xl={2}></Grid>
            <Grid container item xs={12} sm={10} md={8} lg={10} xl={8}>
              <Grid container item xs={12} sm={6} md={4}>
                <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography data-aos="flip-left" className={classes.skillsTitle}>LANGUAGES</Typography>
                </Grid>
                {languagesSorted && languagesSorted.map((lang, idx) => {
                  return(
                    <div key={lang.title+idx} data-aos="fade-left" data-aos-delay={(idx*100).toString()} style={{height: 120, width: 100, display: 'flex', flexFlow:'column'}}>
                      <div style={{flex: '0 1 100px', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={lang.src} alt={lang.title} style={{height:80}}/>

                      </div>
                      <div style={{flex: '1 0 auto', textAlign:'center'}}>
                        <Typography>{lang.title}</Typography>
                      </div>
                    </div>
                  )
                })}
              </Grid>

              <Grid container item xs={12} sm={6} md={4}>
              <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography data-aos="flip-left" className={classes.skillsTitle}>FRAMEWORKS</Typography>
                </Grid>
                {frameworksSorted && frameworksSorted.map((fw, idx) => {
                  return(
                    <div key={fw.title+idx} data-aos="fade-left" data-aos-delay={(idx*100).toString()} style={{height: 120, width: 100, display: 'flex', flexFlow:'column'}}>
                      <div style={{flex: '0 1 100px', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={fw.src} alt={fw.title} style={{height:80}}/>

                      </div>
                      <div style={{flex: '1 0 auto', textAlign:'center'}}>
                        <Typography>{fw.title}</Typography>
                      </div>
                    </div>
                  )
                })}

              </Grid>
              <Grid container item xs={12} sm={6} md={4}>
              <Grid item xs={12} style={{textAlign:'center'}}>
                  <Typography data-aos="flip-left" className={classes.skillsTitle}>SOFTWARE</Typography>
                </Grid>
                {softwareSorted && softwareSorted.map((sw, idx) => {
                  return(
                    <div key={sw.title+idx} data-aos="fade-left" data-aos-delay={(idx*100).toString()} style={{height: 120, width: 100, display: 'flex', flexFlow:'column'}}>
                      <div style={{flex: '0 1 100px', display: 'flex', alignItems:'center', justifyContent:'center'}}>
                        <img src={sw.src} alt={sw.title} style={{height:80}}/>

                      </div>
                      <div style={{flex: '1 0 auto', textAlign:'center'}}>
                        <Typography>{sw.title}</Typography>
                      </div>
                    </div>
                  )
                })}

              </Grid>
            </Grid>
            <Grid item sm={1} md={2} lg={1} xl={2}></Grid>
          </Grid>
          <Grid style={{flex:'1 1 auto', textAlign:'center', marginTop: 80, marginBottom: 80}}>
                <Typography data-aos="fade-up" data-aos-duration="2000"  style={{fontStyle:'italic'}}>"I pride myself on learning new skills and becoming profficient enough <br/> to deliver quailty software to my clients and employers."</Typography>
          </Grid>
        </Grid>
    )
}

export default Skills

