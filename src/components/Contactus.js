import { Typography } from '@mui/material'
import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


function Contactus() {
  return (
    <>
      <Typography variant="h4" mt={6} mb={4}>
        Contact Us
      </Typography>
      <Box component="form">
        <TextField
          variant="outlined"
          label="First Name"
          type="text"
          sx={{ mb: "20px", mr: "20px", width: "300px" }}
        />
        <TextField
          variant="outlined"
          label="Last Name"
          type="text"
          sx={{ mb: "20px", mr: "20px", width: "300px" }}
        />
        <TextField
          variant="outlined"
          label="Contact Number"
          type="text"
          sx={{ mb: "20px", mr: "20px", width: "300px" }}
        />
        <TextField
          variant="outlined"
          label="Message For Us"
          type="message"
          multiline
          maxRows={4}
          fullWidth
          sx={{ mb: "20px" }}
        />

        <Button
          variant="contained"
          type="submit"
          size="large"
          sx={{ mb:"20px" }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Contactus
