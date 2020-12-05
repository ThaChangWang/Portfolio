import { Typography, Grid, Avatar, Link, makeStyles } from "@material-ui/core"

import { useTheme } from '@material-ui/core/styles'

function Project(props) {

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
            {props.thisProject.image1 ? 
            <img alt="Anders Bergquist" src={props.thisProject.image1} width="250" height="200"/> :
            null
            }
            {props.thisProject.image2 ? 
            <img alt="Anders Bergquist" src={props.thisProject.image2} width="250" height="200"/> :
            null
            }
            {props.thisProject.video ? 
            <video src={props.thisProject.video} width="250" height="200" controls> </video> :
            null
            }
          </Grid>
          <Grid item xs={7}>
            <Typography className={classes.title} > {props.thisProject.projectTitle} </Typography>
            <Link className={classes.website} href={props.thisProject.website} > {props.thisProject.website} </Link>
            <br />
            <br />
            <Typography className={classes.description} > {props.thisProject.projectDescription} </Typography>
          </Grid>
          
      </Grid>
    </div>
  )
}

export default Project
