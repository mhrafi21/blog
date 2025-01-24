import { RouterProvider } from "react-router";
import router from "./Routes/router";
import { ThemeProvider } from "./components/ThemeProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
