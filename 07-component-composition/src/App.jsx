import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <StrictMode>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </StrictMode>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
