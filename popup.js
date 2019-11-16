let triggerbutton = document.getElementById('triggerbutton');

triggerbutton.onclick = function(element) {
  chrome.storage.sync.get('templateText', function(data) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementById("pull_request_body").value = "' + data.templateText + '"'});
    });
  })
};