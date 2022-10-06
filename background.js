chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});

chrome.runtime.onMessage.addListener(message => {
  chrome.notifications.create('copiedToClipboard', {
    type: 'basic',
    iconUrl: 'images/logo.png',
    title: 'Helper',
    message
  }); 
});