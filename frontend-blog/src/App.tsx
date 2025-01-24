import { RouterProvider } from "react-router"
import router from "./Routes/router"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
   <>
   <ThemeProvider  defaultTheme="dark" storageKey="vite-ui-theme">

   <RouterProvider router={router} />
   </ThemeProvider>
   </>
  )
}

export default App
