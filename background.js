chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  chrome.storage.sync.set({templateText: "Could I get another PTAL?"});

});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {
        hostEquals: 'github.com',
        pathContains: 'compare'
      },
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.commands.onCommand.addListener(function(command) {
  switch(command) {
    case "insert_template":
      chrome.storage.sync.get('templateText', function(data) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.executeScript(
              tabs[0].id,
              {code: 'document.getElementById("pull_request_body").value = "' + data.templateText + '"'});
        });
      })
    default:
      return
  }
})

