var popup;

let fontList = [
    { name: "G", foundry: "Google Fonts", url: "https://fonts.google.com/specimen/Open+Sans" },
    { name: "E", foundry: "Pangram Pangram", url: "https://pangrampangram.com/products/editorial-new" },
    { name: "T", foundry: "Fonts.com", url: "https://www.fonts.com/font/linotype/times" },
    { name: "D", foundry: "Virgile Flores", url: "https://virgileflores.com/category/typefaces/" }
];
  
document.addEventListener('dblclick', function (event) {
  var clickedElement = event.target;

  if (clickedElement && clickedElement.textContent.trim() !== "") {
        var styles = window.getComputedStyle(clickedElement);
        var fontFamily = styles.fontFamily;
        console.log('Font Family:', fontFamily);
        var fontSize = styles.fontSize;
        var color = styles.color;

        let firstLetterMatchFont;

        fontList.forEach(font => {
        let trimmedFontFamily = `${fontFamily}`.trim();
        let trimmedFontName = font.name.trim();

        if (trimmedFontFamily[1] === trimmedFontName) {
            firstLetterMatchFont = font;
            console.log('Match Found! Font:', firstLetterMatchFont);
            return;
        }
        });

        let fontInfo = `
        <strong style="background-color: #E8FF5E;">Font Family:</strong> ${fontFamily}<br>
        <strong>Font Size:</strong> ${fontSize}<br>
        <strong>Color:</strong> ${color}<br>
        `;
       
        if (firstLetterMatchFont) {
            fontInfo += `
              <strong>Foundry:</strong> <a href=${firstLetterMatchFont.url}>${firstLetterMatchFont.foundry}</a><br>
            `;
        }
        chrome.runtime.sendMessage({ action: 'updatePopup', fontInfo: fontInfo });

        popup = document.createElement('div');
        popup.style.position = 'absolute';
        popup.style.top = event.clientY + 'px';
        popup.style.left = event.clientX + 'px';
        popup.style.background = 'white';
        popup.style.border = '1px solid #ccc';
        popup.style.borderRadius = '0rem 0.75rem 0.75rem 0.75rem';
        popup.style.padding = '10px';
        popup.innerHTML = fontInfo;
        popup.style.fontFamily = 'Helvetica';

        document.body.appendChild(popup);

        setTimeout(function () {
        document.body.removeChild(popup);
        popup = null;
        }, 5000);
    }
});

function replaceText() {
    const allText = document.body.getElementsByTagName('*');
  
    Array.from(allText).forEach(element => {
        const styles = window.getComputedStyle(element);
        const fontFamily = styles.fontFamily;
        const fontSize = styles.fontSize;
        const color = styles.color;
    
        const originalText = element.textContent;
        const fontInfoText = `Font Family: ${fontFamily}, Font Size: ${fontSize}, Color: ${color}`;
    
        element.textContent = fontInfoText;
        element.dataset.originalText = originalText;
    });
}
  
function restoreText() {
    const allText = document.body.getElementsByTagName('*');
  
    Array.from(allText).forEach(element => {
        if (element.dataset.originalText) {
            // Restore the original text content
            element.textContent = element.dataset.originalText;
            delete element.dataset.originalText;
        }
    });
}
  
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'replaceText') {
      replaceText();
    } else if (request.action === 'restoreText') {
      restoreText();
    }
});
  
chrome.runtime.sendMessage({ action: 'popupSwitchToggled', checked: false });