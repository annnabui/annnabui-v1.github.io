document.querySelector("#orderEm")
  .addEventListener("click", () => {
    document.querySelectorAll("div > div")
      .forEach(div => {
        div.style.order = div.id;
      });
  });

  // https://stackoverflow.com/questions/69321652/sort-div-element-using-jquery

  //doesnt work