import { Typography, Grid, Avatar, makeStyles } from "@material-ui/core"

import { useTheme } from '@material-ui/core/styles'

import "./header.css"

import canoe from "./images/header/canoe.jpg"
import bham from "./images/header/bellingham.jpeg"
//import asmr from "./images/fire.mp4"

function Header(props) {

  
  const theme = useTheme()

  const useStyles = makeStyles({
  
    buttonStyle: {
      color: "black",
      width: theme.spacing(30),
      fontFamily: "roboto",
      fontSize: "16px"
    },
    avatar: {
      display: "contain",
      height: theme.spacing(30),
      width: theme.spacing(30)
    }
  })

  const classes = useStyles()
  

  return (
    <div>
      <div className="Header-Pictures">
        <Grid container spacing={1}>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={bham} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
          </Grid>
          <Grid item xs={4} md={2}>
            <Avatar className={classes.avatar} alt="Anders Bergquist" src={canoe} />
          </Grid>     
        </Grid>
      </div>

      <br />
        <div>
          <Typography variant="h2"> Anders Bergquist </Typography>
          <Typography variant="h4"> abergquist96@gmail.com </Typography>
          <Typography variant="h4"> 4922 Smugglers Cove Rd. Freeland, WA 98249 </Typography>
          <Typography variant="h4"> 1-360-969-9115 </Typography>
        </div>
      <br />

        {/*<div>
          <Typography variant="h4"> Enjoy some nice background music: </Typography>
          <br />
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <video src={asmr} width="250" controls>
              </video>
              <Typography variant="h4"> Water </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <video src={asmr} width="250" controls>
              </video>
              <Typography variant="h4"> Earth </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <video src={asmr} width="250" controls>
              </video>
              <Typography variant="h4"> Fire </Typography>
            </Grid>
            <Grid item xs={6} md={3}>
              <video src={asmr} width="250" controls>
              </video>
              <Typography variant="h4"> Air </Typography>
            </Grid>     
          </Grid>
        </div>*/}
      
    </div>
  )
}

export default Header
