import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../utils/Themes";
import "./App.css";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;
const MainContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
`;

function App() {
  //hooks
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Sidebar />
          <MainContent>Podcast</MainContent>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
