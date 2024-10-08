import { createRoot } from "react-dom/client";
import { App } from "./App";

/**
 * Render to DOM
 */
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
