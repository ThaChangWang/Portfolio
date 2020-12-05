import { Typography, Grid, Avatar, Link, makeStyles } from "@material-ui/core"

import { useTheme } from '@material-ui/core/styles'

function Experience(props) {

  const theme = useTheme()

  const useStyles = makeStyles({
  
    title: {
      color: "white",
      fontFamily: "roboto",
      fontSize: "36px"
    },
    description: {
      color: "white",
      fontFamily: "roboto",
      fontSize: "22px"
    },
    company: {
      color: "white",
      fontFamily: "roboto",
      fontSize: "28px"
    },
    website: {
      color: "white",
      fontSize: "20px"
    },
    avatar: {
      display: "contain",
      height: theme.spacing(30),
      width: theme.spacing(30)
    }
  })

  const classes = useStyles()

  const experienceStyle = {
    borderTop: "2px solid white"
  }

  return (
    <div style={experienceStyle}>
      <Grid container spacing={1}>
          <Grid item xs={5}>
            {props.thisExperience.image1 ? 
            <img alt="Anders Bergquist" src={props.thisExperience.image1} width="250" height="200"/> :
            null
            }
            {props.thisExperience.image2 ? 
            <img alt="Anders Bergquist" src={props.thisExperience.image2} width="250" height="200"/> :
            null
            }
            {props.thisExperience.video ? 
            <video src={props.thisExperience.video} width="250" height="200" controls> </video> :
            null
            }
          </Grid>
          <Grid item xs={7}>
            <Typography className={classes.title} > {props.thisExperience.company} </Typography>
            <Typography className={classes.description} > {props.thisExperience.time} </Typography>
            <Link className={classes.website} href={props.thisExperience.website} > {props.thisExperience.website} </Link>
            <br />
            <br />
            <Typography className={classes.company} > {props.thisExperience.jobTitle} </Typography>
            <Typography className={classes.description} > {props.thisExperience.jobDescription} </Typography>
          </Grid>
          
      </Grid>
    </div>
  )
}

export default Experience
