var popup;

let fontList = [
    { name: "Google Sans", foundry: "Google Fonts", url: "https://fonts.google.com/specimen/Open+Sans" },
    { name: "Editorial Old", foundry: "Pangram Pangram", url: "https://pangrampangram.com/products/editorial-old" },
    { name: "Times", foundry: "Fonts.com", url: "https://www.fonts.com/font/linotype/times" },
    { name: "DaVinci", foundry: "Virgile Flores", url: "https://virgileflores.com/category/typefaces/" }
];
  
document.addEventListener('dblclick', function (event) {
  var clickedElement = event.target;

  // Check if the clicked element has text content
  if (clickedElement && clickedElement.textContent.trim() !== "") {
        var styles = window.getComputedStyle(clickedElement);
        // var fontFamily = styles.fontFamily;
        var fontFamily = styles.fontFamily.split(',')[0].trim();
        console.log('Font Family:', fontFamily);
        var fontSize = styles.fontSize;
        var color = styles.color;

        var fontInfo = `
        <strong>Font Family:</strong> ${fontFamily}<br>
        <strong>Font Size:</strong> ${fontSize}<br>
        <strong>Color:</strong> ${color}<br>
        `;

        console.log('Font Family:', fontFamily);

        let matchingFont;

        fontList.forEach(font => {
        let trimmedFontFamily = fontFamily.trim();
        let trimmedFontName = font.name.trim();

        console.log('Comparing First Letters:', trimmedFontFamily[0], trimmedFontName[0]);

        if (trimmedFontFamily[0] === trimmedFontName[0]) {
            matchingFont = font.name;
        }
        });

        console.log('Matching Font:', matchingFont);

        if (matchingFont) {
        fontInfo += `
            Foundry: <a href="${matchingFont.url}" target="_blank">${matchingFont.foundry}</a><br>
        `;
        }

        // Create a dynamic popup element
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

        // Append the popup to the document body
        document.body.appendChild(popup);

        // Remove the popup after a short delay (adjust as needed)
        setTimeout(function () {
        document.body.removeChild(popup);
        popup = null;
        }, 5000);
    }
});

// document.addEventListener('mousemove', function (event) {
//     // Remove the popup if it exists
//     if (popup) {
//       document.body.removeChild(popup);
//       popup = null;
//     }
// });