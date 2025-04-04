function formSubmit(event) {
  event.preventDefault();
  new Typewriter("#story", {
    strings:
      "Five little monkeys jumping on the bed,one fell off and bumped his head",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let formInput = document.querySelector("#btn");
formInput.addEventListener("click", formSubmit);
