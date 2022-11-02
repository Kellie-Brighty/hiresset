import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { themes } from "./store/themes";

const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={themes} >
    <App />
  </ThemeProvider>
);
