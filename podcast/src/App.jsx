import { useState } from 'react'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../utils/Themes";
import './App.css'

const Container = styled.div`
background: ${({ theme }) => theme.bg };
width: 100%;
height: 100vh;
`;

function App() {
  //hooks
  const  [darkMode,setDarkMode] = useState (true);

  return (
    <>
    <ThemeProvider theme={darkTheme}>

    <Container>
      Podcast
    </Container>
  
    </ThemeProvider>
    </>
  ); 
}

export default App;
