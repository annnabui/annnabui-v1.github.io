document.querySelector("#orderEm")
  .addEventListener("click", () => {
    document.querySelectorAll("div > div")
      .forEach(div => {
        div.style.order = div.id;
      });
});