import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomElements(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generatorExcuses() {
    const randomWho = getRandomElements(who);
    const randomAction = getRandomElements(action);
    const randomWhat = getRandomElements(what);
    const rWhandomen = getRandomElements(when);

    return `${randomWho} ${randomAction} ${randomWhat} ${rWhandomen}`;
  }

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = generatorExcuses();
};
