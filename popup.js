let changeColor = document.getElementById('changeColor');


chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});


changeColor.onclick = function(element) {
  chrome.storage.sync.get('templateText', function(data) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.getElementById("pull_request_body").value = "' + data.templateText + '"'});
    });
  })
};