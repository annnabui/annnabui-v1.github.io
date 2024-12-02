const years = document.querySelectorAll(".year");
const allYearTexts = document.querySelectorAll(".eachYearText");

// Function to hide all year texts
function hideAllTexts() {
  allYearTexts.forEach((text) => {
    text.style.display = "none";
  });
}

years.forEach((year) => {
  const correspondingText = document.getElementById(year.id + "-text");

  year.addEventListener("click", () => {
    hideAllTexts();
    if (correspondingText) correspondingText.style.display = "block";
  });
});

// Timeline animation
document.addEventListener('DOMContentLoaded', function() {
    const trainTimeline = document.getElementById('trainTimeline');
    const yearButtons = document.querySelectorAll('.year');
    const yearTexts = document.querySelectorAll('.eachYearText');
    const grayTimeline = document.getElementById('grayTimeline');
    const grayTimelineWidth = grayTimeline.offsetWidth;

    let currentYearIndex = 0;

    function animateTimeline() {
        let interval = setInterval(() => {
            if (currentYearIndex >= yearButtons.length) {
                clearInterval(interval);
                return;
            }

            const currentButton = yearButtons[currentYearIndex];
            const currentText = document.getElementById(`${currentButton.id}-text`);

            const buttonPosition = currentButton.offsetLeft;
            const buttonMidPoint = buttonPosition + (currentButton.offsetWidth / 2);

            let newWidth = buttonMidPoint;
            trainTimeline.style.width = newWidth + 'px';

            currentText.style.display = 'block';

            currentButton.style.color = 'blue';

            if (currentYearIndex > 0) {
                const previousButton = yearButtons[currentYearIndex - 1];
                const previousText = document.getElementById(`${previousButton.id}-text`);
                previousText.style.display = 'none';
                previousButton.style.color = '';
            }

            currentYearIndex++;

            if (newWidth >= grayTimelineWidth) {
                clearInterval(interval);
            }
        }, 3500);
    }
    animateTimeline();
});

