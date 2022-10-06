(() => {
  const items = document.querySelectorAll('a[sg_selector="link:sg_detail"][sg_entity_type="Shot"]');
  const itemsContent = [];

  for (let i = 0; i < items.length; i++) {
    itemsContent.push(items[i].innerText);
  }

  const formattedContent = itemsContent.join('\n');
  navigator.clipboard.writeText(formattedContent).then(() => {
    chrome.runtime.sendMessage('Copied to clipboard');
  })
})();
