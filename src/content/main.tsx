import { createRoot } from "react-dom/client";
import App from "./App";

let newRoot = document.getElementById("content-root");

if (!newRoot) {
  newRoot = document.createElement("div");
  newRoot.id = "content-root";
}

document.body.replaceChildren(newRoot);

const root = createRoot(newRoot as HTMLDivElement);
root.render(<App />);
