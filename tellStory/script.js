let arrayString = ["Mario", "happy", "learning Java-Script"];
function tellStory([name, mood, activity]) {
  let story = `This is ${name}.${name} is a nice person.Today they are ${mood}.They are ${activity} all day.The end.`;
  return story;
}
console.log(tellStory(arrayString));
