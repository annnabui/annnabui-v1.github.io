chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "getHoveredText" }, function (response) {
      document.getElementById("result").textContent = response;
    });
});