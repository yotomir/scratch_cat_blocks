chrome.storage.local.get({ catModeEnabled: true }, (result) => {
  if (result.catModeEnabled) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('inject.js');
    script.onload = function() {
        this.remove(); // Премахваме тага след зареждане, за да е чисто
    };
    (document.head || document.documentElement).appendChild(script);
  }
});
