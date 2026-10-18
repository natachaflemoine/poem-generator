function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d05245ff0939e3211o0dfebb19ae585t";
  let prompt = `Generate a limerick about ${instructionsInput.value}`;
  let context =
    "You are a poem expert with light humour and your mission is to generate limericks in basic HTML. Post the poem directly without an introduction or title. Please avoid including the word HTML in the output. Sign 'SheCodes AI' with a <strong> element at the end of the poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⏳ Generating a poem about ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(publishPoem);
}

function publishPoem(response) {
  let poem = response.data.answer;
  new Typewriter("#poem", {
    strings: `${poem}`,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
