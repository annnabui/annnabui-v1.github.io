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

document.addEventListener('DOMContentLoaded', function () {
  const fontInfoElement = document.getElementById('fontInfo');

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'updatePopup' && request.fontInfo) {
      updatePopup(request.fontInfo);
    }
  });

  function updatePopup(fontInfo) {
    if (fontInfo) {
      var fontInfoHTML = `
        <strong>Clicked Text:</strong> ${fontInfo.clickedText}<br>
        <strong>Font Family:</strong> ${fontInfo.fontFamily}<br>
        <strong>Font Size:</strong> ${fontInfo.fontSize}<br>
        <strong>Color:</strong> ${fontInfo.color}<br>
      `;

      if (fontInfo.foundry && fontInfo.url) {
        fontInfoHTML += `<strong>Foundry:</strong> <a href="${fontInfo.url}" target="_blank">${fontInfo.foundry}</a><br>`;
      }

      fontInfoElement.innerHTML = fontInfoHTML;
    }
  }
});