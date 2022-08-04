import React from 'react'
import Navbar from './components/Navbar'
import Intro from "./components/Intro";
import Cake from './components/Cake'
import Contactus from './components/Contactus';
import { createTheme ,ThemeProvider} from "@mui/material/styles";
import { Container } from '@mui/system';

const newtheme = createTheme({
  palette: {
    primary: {
      main: "#222831",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={newtheme}>
        <Navbar />
        <Container>
          <Intro />
          <Cake />
          <Contactus />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App

