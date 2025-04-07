function createStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function formSubmit(event) {
  event.preventDefault();

  let apiKey = "3od7af2214ca31898090dtcb837a2247";

  let usersDemand = document.querySelector("#input-txt");
  let prompt = `Create a story based on ${usersDemand.value} demand.`;

  let context =
    "You are a story generator AI, you create story based on users demand on various topics.note that you will make 5 lines short story.the story must contain important characters and dialogues of those characters also the story must give a good message to the society.no vulnerability will accept.no adult content will add here.you should always give a story name on the top of your story based on users demand.you should not write more than 5 lines";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let storyBuilding = document.querySelector("#story");
  storyBuilding.classList.remove("hidden");
  storyBuilding.innerHTML = `<div class="wait">⏳Please wait, your required story is generating.. </div>`;

  axios.get(apiUrl).then(createStory);
}

new Typewriter("#type", {
  strings: `<h1>Hi, I'm Sheera 🤖</h1>
        <p>
          your <strong>Story Generator AI</strong>. I can help you to build your
          fantasy
        </p>`,
  autoStart: true,
  delay: 19,
  cursor: "",
});
let formInput = document.querySelector("#btn");
formInput.addEventListener("click", formSubmit);
