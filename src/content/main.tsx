import { createRoot } from 'react-dom/client';

const ROOT_ID = 'my-extension-root';

function init() {
  if (document.getElementById(ROOT_ID)) return;

  const overlay = document.createElement("div");

  overlay.id = ROOT_ID;
  
  if (document.body) {
    document.body.appendChild(overlay);
    
    const root = createRoot(overlay);
    root.render(<h1>Hello world! from content</h1>);
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
}

init();