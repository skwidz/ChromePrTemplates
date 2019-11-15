chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  chrome.storage.sync.set({templateText: "Could I get another PTAL?"});

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
});