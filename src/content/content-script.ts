(() => {
  const root = document.createElement("div");
  root.id = "content-root";
  document.body.append(root);

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("content-script/main.js");
  script.type = "module";
  (document.head || document.documentElement).appendChild(script);
})();
