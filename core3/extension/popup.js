chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { message: "getHoveredText" }, function (response) {
      document.getElementById("result").textContent = response;
    });
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const switchStatus = document.getElementById('switchStatus');

  toggleSwitch.addEventListener('change', function () {
    const isChecked = toggleSwitch.checked;

    if (isChecked) {
      switchStatus.innerText = 'Revealed';
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'replaceText' });
      });
    } else {
      switchStatus.innerText = 'Hidden';
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'restoreText' });
      });
    }
  });
});