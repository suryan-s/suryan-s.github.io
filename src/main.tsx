
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Disable browser scroll restoration to prevent page from jumping to previous scroll position
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Ensure page starts at top on initial load
  window.scrollTo(0, 0);

  createRoot(document.getElementById("root")!).render(<App />);
  