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
  let prompt = "Create a story based on users demand.";
  let usersDemand = document.querySelector("#input-txt");

  let context = `You are a story generator AI, you create story based on ${usersDemand.value} demand on various topics.note that you will make 5 lines short story.the story must contain important characters and dialogues of those characters also the story must give a good message for society.no vulnerability will accept.no adult content will add here.you should always mention the story name on your story based on users demand.you should not write more than 5 lines`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(createStory);
}

let formInput = document.querySelector("#btn");
formInput.addEventListener("click", formSubmit);
