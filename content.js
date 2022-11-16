const showMessage = () => {
  const message = 'Copied to clipboard';
  Toastify({
    text: message,
    avatar: chrome.runtime.getURL('images/logo.png'),
    className: 'vfx-extension-toast',
  }).showToast();
};

const copyContentToClipboard = () => {
  const items = document.querySelectorAll('a[sg_selector="link:sg_detail"][sg_entity_type="Shot"]');
  const itemsContent = [];

  for (let i = 0; i < items.length; i++) {
    itemsContent.push(items[i].innerText);
  }

  const formattedContent = itemsContent.join('\n');
  navigator.clipboard.writeText(formattedContent).then(showMessage);
};

chrome.runtime.onMessage.addListener(request => {
  if (request.extIconPressed) {
    copyContentToClipboard();
  }  
});
