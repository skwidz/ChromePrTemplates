let triggerbutton = document.getElementById('triggerbutton');

triggerbutton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: 'template.js'});
  });
};