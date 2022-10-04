const items = document.querySelectorAll('a[sg_selector="link:sg_detail"][sg_entity_type="Shot"]');
const itemsContent = [];

for (let i = 0; i < items.length; i++) {
  itemsContent.push(items[i].innerText);
}

navigator.clipboard.writeText(itemsContent.join('\n')).then(() => { alert('Copied to clipboard'); });
