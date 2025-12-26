chrome.storage.local.get({ catModeEnabled: true }, (result) => {
  if (result.catModeEnabled) {
    const script = document.createElement('script');
    script.textContent = `
      (function() {
        const checkBlockly = setInterval(() => {
          if (window.Blockly && window.Blockly.setCatMode) {
            window.Blockly.setCatMode(true);
            clearInterval(checkBlockly);
          }
        }, 500);
      })();
    `;
    document.documentElement.appendChild(script);
  }
});
