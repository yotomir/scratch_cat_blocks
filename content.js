chrome.storage.local.get({ catModeEnabled: true }, (result) => {
    if (result.catModeEnabled) {
        const script = document.createElement('script');
        // Използваме URL адреса на файла вътре в разширението
        script.src = chrome.runtime.getURL('inject.js');
        script.onload = function() {
            this.remove();
        };
        (document.head || document.documentElement).appendChild(script);
    }
});
