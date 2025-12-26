const toggle = document.getElementById('catToggle');

// Зареждаме текущото състояние (по подразбиране е true)
chrome.storage.local.get({ catModeEnabled: true }, (result) => {
  toggle.checked = result.catModeEnabled;
});

// Запазваме новото състояние при клик
toggle.addEventListener('change', () => {
  chrome.storage.local.set({ catModeEnabled: toggle.checked }, () => {
    // Презареждаме страницата на Scratch, за да влязат промените в сила
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});
