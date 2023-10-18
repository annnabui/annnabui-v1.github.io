export default class Garden {
  constructor(gardenEl, controlsEl) {
    this.gardenEl = gardenEl;
    this.controlsEl = controlsEl;
    this.activeShape = {};
    this.mousePos = {x:0, y:0};
    this.activeShapeEl = null;
    this.grassElements = [];

    this.initInteraction();
    this.drawShape();
  }
  initInteraction() {
    this.setShape();
    this.gardenEl.addEventListener("mousemove", (event) => {
      this.mousePos = {x: event.clientX, y: event.clientY};
      this.drawShape();
    });

    this.gardenEl.addEventListener("click", (event) => {
      this.placeShape();
    });

    const inputEl = this.controlsEl.querySelectorAll("input");
    for (const input of inputEl) {
      input.addEventListener("input", () => {
        this.setShape();
        this.drawShape();
      })
    }
  }
  setShape() {
    this.activeShape = {};
    this.activeShape.type = this.controlsEl.querySelector("input[name=shape]:checked").value;


    if (this.activeShape.type === "rectangle") {
      // this.activeShape.color = this.controlsEl.querySelector('input[name="rectangle-color"]').value;
      this.activeShape.width = parseInt(this.controlsEl.querySelector('input[name="rectangle-width"]').value);
      this.activeShape.height = parseInt(this.controlsEl.querySelector('input[name="rectangle-width"]').value);
      this.activeShape.type = 'rectangle';
      this.activeShape.emoji = "🌱";

    } else if (this.activeShape.type === "circle") {
      // this.activeShape.color = this.controlsEl.querySelector('input[name="circle-color"]').value;
      this.activeShape.radius = parseInt(this.controlsEl.querySelector('input[name="circle-radius"]').value);
      this.activeShape.type = 'circle';
      this.activeShape.emoji = "🌷";
    }
  }
  drawShape(){
    if (this.activeShapeEl == null) {
    this.activeShapeEl = document.createElement('div');
    this.gardenEl.appendChild(this.activeShapeEl);
    }

    this.activeShapeEl.style.backgroundColor = this.activeShape.color;

    if (this.activeShape.type === "rectangle") {
      this.activeShapeEl.style.width = `${this.activeShape.width}px`;
      this.activeShapeEl.style.height = `${this.activeShape.height}px`;
      this.activeShapeEl.style.borderRadius = "0%";
      this.activeShapeEl.innerText = `${this.activeShape.emoji}`;
      this.activeShapeEl.style.textAlign = "center";
      this.activeShapeEl.style.fontSize = `${this.activeShape.height}px`;
      this.activeShapeEl.className = "grass";

    } else if (this.activeShape.type === "circle") {
      this.activeShapeEl.style.width = `${this.activeShape.radius*2}px`;
      this.activeShapeEl.style.height = `${this.activeShape.radius*2}px`;
      this.activeShapeEl.style.borderRadius = "100%";
      this.activeShapeEl.innerText = `${this.activeShape.emoji}`;
      this.activeShapeEl.style.textAlign = "center";
      this.activeShapeEl.style.fontSize = `${this.activeShape.radius*2}px`;
    }

    this.activeShapeEl.style.position = "absolute";

    if (this.activeShape.type === "rectangle") {
      this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.width/2}px`;
      this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.height/2}px`;
    } else if (this.activeShape.type === "circle") {
      this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.radius}px`;
      this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.radius}px`;
    }
  }
  placeShape() {
  if (this.activeShapeEl) {
    this.activeShapeEl = null;

    // Draw the shape
    this.drawShape();

    this.grassElements.push(this.activeShapeEl);
    // Replace content of the last element with class "grass" after a delay
    setTimeout(() => {
      for (const replaceDiv of this.grassElements) {
        if (replaceDiv !== this.activeShapeEl) {
          replaceDiv.innerHTML = "🌳";
        }
      }
    }, 10000);
  }
}
}