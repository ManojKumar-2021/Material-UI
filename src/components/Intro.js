import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'
import Cake from '../images/cake.png'
function Intro() {
    return (
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h5">A Sweetness in Every Byte</Typography>
          <Typography variant="subtitle1">
            Cake.com offer tasty cake and sweets for you and your loved ones.
          </Typography>
          <Button
            variant="contained"
            color="inherit"
            style={{ backgroundColor: "#EEEEEE", borderRadius: 10 }}
          >
            Call Us
          </Button>
        </Grid>
        <Grid
          item xs={12} sm={6} justifyContent="center" order={{ xs:1, sm:2 }}>
          <Box style={{ width: "100%", height: "auto" }} component="img" src={Cake}/>
        </Grid>
      </Grid>
    );
}

export default Intro