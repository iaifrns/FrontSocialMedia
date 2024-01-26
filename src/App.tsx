import { Box, PaletteMode, Stack, ThemeProvider, createTheme } from "@mui/material"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Add from "./components/Add"
import { useState } from "react"

function App() {

  const [mode, setMode] = useState<PaletteMode>('dark');

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ backgroundColor: 'background.default', color: 'text.primary' }}>
        <Navbar />
        <Stack direction={'row'} spacing={2}>
          <Sidebar mode={mode} setMode={e => setMode(e)} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App
