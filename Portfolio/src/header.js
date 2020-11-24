import { Typography, Grid, Button, Avatar, makeStyles } from "@material-ui/core"

import { useTheme } from '@material-ui/core/styles'

import canoe from "./images/canoe.jpg"
import asmr from "./images/3.mp4"

import { Player, ControlBar } from 'video-react';


function Header(props) {

  
  const theme = useTheme()

  const useStyles = makeStyles({
  
    buttonStyle: {
      color: "black"
    },
    avatar: {
      align: "center",
      height: theme.spacing(35),
      width: theme.spacing(35)
    }
  })

  const classes = useStyles()
  

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <div>
          <video width="300" height="300" autoPlay >
            <source src={asmr} type="video/mp4"/>
          </video>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Typography variant="h2"> Anders Bergquist </Typography>
            <Typography variant="h4"> abergquist96@gmail.com </Typography>
            <Typography variant="h4"> 4922 Smugglers Cove Rd. Freeland, WA 98249 </Typography>
            <Typography variant="h4"> 1-360-969-9115 </Typography>
          </div>
        </Grid>
        <Grid item xs={4}>
          <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
        </Grid>
      </Grid>
      <hr />
      <div>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Button className={classes.buttonStyle} onClick={() => props.setPage("about")}> About </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.buttonStyle} onClick={() => props.setPage("classes")}> Classes </Button>
          </Grid>
          <Grid item xs={4}>
            <Button className={classes.buttonStyle} onClick={() => props.setPage("projects")}> Projects </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header
