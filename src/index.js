function generatePoem(event) {
  event.preventDefault();
 
      new Typewriter("#poem", {
        strings: "Poem will be included here.",
        autoStart: true,
        delay: 5,
        cursor: "",
      });


}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);