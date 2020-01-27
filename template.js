chrome.storage.sync.get('templateText', function(data) {
  document.getElementById("pull_request_body").value = data.templateText
})
